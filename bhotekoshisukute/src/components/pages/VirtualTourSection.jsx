import React, { useEffect, useRef, useState, useMemo } from "react";
import "pannellum/build/pannellum.css";
import "pannellum/build/pannellum.js";
import useFetchApi from "../../hooks/useFetchApi";

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const VirtualTourSection = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [currentScene, setCurrentScene] = useState("lobby");

  const { data: scenes, loading, error } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_virtual_tour.php",
    "scenes"
  );

  // NORMALIZE scenes: API may return [{ img1:..., img2:... }] or an object { img1: {...} }
  const normalizedScenes = useMemo(() => {
    if (!scenes) return null;

    // case: [ { img1:..., img2:... } ]  -> return that inner object
    if (Array.isArray(scenes) && scenes.length === 1 && scenes[0] && typeof scenes[0] === "object" && !Array.isArray(scenes[0])) {
      return scenes[0];
    }

    // case: array of scene objects with `id` -> convert to keyed object
    if (Array.isArray(scenes)) {
      const byId = {};
      scenes.forEach((it) => {
        if (it && it.id) byId[it.id] = it;
      });
      if (Object.keys(byId).length) return byId;

      // fallback: index keys
      return scenes.reduce((acc, it, i) => {
        acc[`scene-${i}`] = it;
        return acc;
      }, {});
    }

    // already an object keyed by scene ids
    return scenes;
  }, [scenes]);

  // ensure currentScene is valid after scenes load
  useEffect(() => {
    if (!normalizedScenes) return;
    if (normalizedScenes[currentScene]) return; // keep current if valid
    const keys = Object.keys(normalizedScenes);
    if (keys.length) setCurrentScene(keys[0]);
  }, [normalizedScenes]);
  
  // use normalizedScenes everywhere below instead of `scenes`
  // update navLinks -> use normalizedScenes
  const navLinks = useMemo(() => {
    if (!normalizedScenes || typeof normalizedScenes !== "object") return [];
    return Object.keys(normalizedScenes).map((key, i) => ({
      name: normalizedScenes[key].title || `Scene ${i + 1}`,
      icon: ["meeting_room", "bed", "cottage", "restaurant", "pool"][i] || "room",
      key,
    }));
  }, [normalizedScenes]);
  
  const goToScene = (key) => {
    if (!viewerRef.current || currentScene === key) return;
    try {
      viewerRef.current.loadScene(key);
      setCurrentScene(key);
    } catch (e) {
      console.warn("Failed to load scene:", e);
    }
  };

  // initialize / re-init viewer when scenes change
  useEffect(() => {
    if (!containerRef.current || !window.pannellum || !scenes) return;

    // destroy previous viewer if any
    try {
      if (viewerRef.current?.destroy) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    } catch (err) {
      console.warn("pannellum destroy error:", err);
    }

    // ensure container empty
    try {
      containerRef.current.innerHTML = "";
    } catch (e) {}

    const configScenes = {};
    Object.entries(scenes).forEach(([id, sc]) => {
      configScenes[id] = {
        title: sc.title,
        type: "equirectangular",
        // support multiple possible field names for image
        panorama:
          sc.panorama || sc.image || sc.imageUrl || (Array.isArray(sc.imageUrls) && sc.imageUrls[0]) || "",
        autoLoad: true,
        showZoomCtrl: true,
        initialViewParameters: {
          yaw: sc.yaw ?? 0,
          pitch: sc.pitch ?? 0,
          hfov: sc.hfov ?? 100,
        },
        hotSpots: Array.isArray(sc.hotSpots) ? sc.hotSpots : [],
      };
    });

    // pick first scene key if currentScene not in config
    const firstKey = Object.keys(configScenes)[0];
    const firstScene = currentScene && configScenes[currentScene] ? currentScene : firstKey;

    try {
      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        default: {
          firstScene: firstScene,
          sceneFadeDuration: 800,
          autorotate: -2,
        },
        scenes: configScenes,
      });
    } catch (err) {
      console.error("Failed to initialize pannellum viewer:", err);
      return;
    }

    // update state on scene change (guard .on)
    try {
      if (typeof viewerRef.current.on === "function") {
        viewerRef.current.on("scenechange", (sceneId) => {
          setCurrentScene(sceneId);
          const sc = scenes[sceneId];
          if (sc) {
            try {
              if (typeof viewerRef.current.setYaw === "function") viewerRef.current.setYaw(sc.yaw ?? 0);
              if (typeof viewerRef.current.setPitch === "function") viewerRef.current.setPitch(sc.pitch ?? 0);
              if (typeof viewerRef.current.setHfov === "function") viewerRef.current.setHfov(sc.hfov ?? 100);
            } catch (e) {}
          }
        });
      }
    } catch (e) {
      // ignore if event API not available
    }

    setReady(true);

    return () => {
      try {
        viewerRef.current?.destroy();
      } catch (e) {}
      viewerRef.current = null;
      try {
        if (containerRef.current) containerRef.current.innerHTML = "";
      } catch (e) {}
      setReady(false);
    };
    // re-run when scenes change
  }, [scenes, currentScene]);

  // block dragging moves only (keep clicks & wheel) — stays as you had
  useEffect(() => {
    let isDown = false;
    let activePointerId = null;

    const onDown = (e) => {
      if (e.pointerId !== undefined) {
        activePointerId = e.pointerId;
        isDown = true;
      } else if (e.type === "mousedown") {
        if (e.button !== 0) return;
        isDown = true;
      } else if (e.type === "touchstart") {
        isDown = true;
      }
    };

    const onUp = (e) => {
      if (e.pointerId !== undefined && activePointerId !== null && e.pointerId !== activePointerId) return;
      isDown = false;
      activePointerId = null;
    };

    const onMove = (e) => {
      if (!isDown) return;
      const allowDrag = (scenes?.[currentScene]?.draggable ?? true) === true;
      if (!allowDrag) {
        try {
          if (e.cancelable) e.preventDefault();
        } catch (err) {}
        if (typeof e.stopImmediatePropagation === "function") e.stopImmediatePropagation();
        if (typeof e.stopPropagation === "function") e.stopPropagation();
      }
    };

    document.addEventListener("pointerdown", onDown, { capture: true });
    document.addEventListener("pointerup", onUp, { capture: true });
    document.addEventListener("mousedown", onDown, { capture: true });
    document.addEventListener("mouseup", onUp, { capture: true });
    document.addEventListener("touchstart", onDown, { capture: true, passive: false });
    document.addEventListener("touchend", onUp, { capture: true });

    window.addEventListener("pointermove", onMove, { capture: true, passive: false });
    window.addEventListener("mousemove", onMove, { capture: true, passive: false });
    window.addEventListener("touchmove", onMove, { capture: true, passive: false });

    return () => {
      document.removeEventListener("pointerdown", onDown, { capture: true });
      document.removeEventListener("pointerup", onUp, { capture: true });
      document.removeEventListener("mousedown", onDown, { capture: true });
      document.removeEventListener("mouseup", onUp, { capture: true });
      document.removeEventListener("touchstart", onDown, { capture: true });
      document.removeEventListener("touchend", onUp, { capture: true });

      window.removeEventListener("pointermove", onMove, { capture: true });
      window.removeEventListener("mousemove", onMove, { capture: true });
      window.removeEventListener("touchmove", onMove, { capture: true });
    };
  }, [currentScene, scenes]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div>Loading…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error loading scenes: {error}
      </div>
    );
  }

  if (!scenes) {
    return <div className="text-center py-12">scenes not found.</div>;
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary-color)]">
            360 Virtual Tour
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Explore our areas in immersive 360° — click an area on the right to jump there.
          </p>
        </div>

        <div className="relative mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:flex-1 rounded-2xl overflow-hidden shadow-lg">
            <div
              ref={containerRef}
              id="panorama"
              style={{ width: "100%", height: 520, backgroundColor: "#000" }}
            />
            {!ready && (
              <div className="absolute inset-0 flex items-center justify-center text-white/80 z-10 bg-black/50">
                <div className="flex items-center gap-2">
                  <Icon name="progress_activity" className="animate-spin" />
                  Loading tour…
                </div>
              </div>
            )}
          </div>

          <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 bg-white p-6  h-[calc(100vh-14rem)] overflow-y-auto  rounded-2xl shadow-lg scrollbar-thin">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-800">Explore Areas</h3>
            </div>

            <nav className="mt-4 space-y-2 ">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => goToScene(link.key)}
                  className={`flex w-full items-center gap-4 p-3 rounded-lg text-left transition-colors ${
                    currentScene === link.key
                      ? "bg-sky-100/80 text-sky-700 font-semibold"
                      : "hover:bg-slate-100 text-slate-600 font-medium"
                  }`}
                >
                  {/* <Icon name={link.icon} /> */}
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default VirtualTourSection;