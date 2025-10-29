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
  const pendingTargetRef = useRef(null); // <-- NEW: store requested target view
  const [ready, setReady] = useState(false);
  const [currentScene, setCurrentScene] = useState(null);

  const { data: scenes, loading, error } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_virtual_tour.php",
    "scenes"
  );

  // Compute navigation links from scenes
  const navLinks = useMemo(() => {
    if (!scenes) return [];
    return Object.entries(scenes).map(([key, sc]) => ({
      key,
      name: sc.title || key,
    }));
  }, [scenes]);

  // Ensure currentScene is valid after scenes load
  useEffect(() => {
    if (!scenes) return;
    if (currentScene && scenes[currentScene]) return;
    const firstKey = Object.keys(scenes)[0];
    setCurrentScene(firstKey);
  }, [scenes, currentScene]);

  const goToScene = (key) => {
    if (!viewerRef.current || currentScene === key) return;
    try {
      viewerRef.current.loadScene(key);
      setCurrentScene(key);
    } catch (e) {
      console.warn("Failed to load scene:", e);
    }
  };

  // Initialize / re-init Pannellum viewer
  useEffect(() => {
    if (!containerRef.current || !window.pannellum || !scenes || !currentScene) return;

    // destroy previous viewer
    try { viewerRef.current?.destroy(); viewerRef.current = null; containerRef.current.innerHTML = ""; } catch (e) {}

    // build configScenes
    const configScenes = {};
    Object.entries(scenes).forEach(([id, sc]) => {
      // map hotspots and attach custom click handler for scene-type hotspots that include targets
      const mappedHotspots = (Array.isArray(sc.hotSpots) ? sc.hotSpots : []).map((h) => {
        // ensure numeric targets (if present)
        const targetYaw = h.targetYaw != null ? Number(h.targetYaw) : null;
        const targetPitch = h.targetPitch != null ? Number(h.targetPitch) : null;
        const targetHfov = h.targetHfov != null ? Number(h.targetHfov) : null;

        if (h.type === "scene" && (targetYaw !== null || targetPitch !== null || targetHfov !== null)) {
          // create a custom hotspot that overrides default click behavior
          return {
            ...h,
            // createTooltipFunc runs when hotspot DOM is created; we use it to attach our click
            createTooltipFunc: (hotSpotDiv, args) => {
              hotSpotDiv.style.cursor = "pointer";
              
             const btn = document.createElement("button");
               btn.type = "button";
               // Use 'pnlm-custom-hotspot-btn-vertical' for the new layout
               btn.className = "pnlm-custom-hotspot-btn-vertical"; 
              
            // 1. Create the Arrow container (Upper section)
            const arrowSpan = document.createElement("span");
            arrowSpan.className = "pnlm-hotspot-arrow-icon";
            // Using a downward-pointing arrow (or upward, depending on preference)
            // Using a triangle pointer icon for a classic look: &#9650; (up) or &#9660; (down)
            arrowSpan.innerHTML = "&#9650;"; // Upward triangle
            
            // 2. Create a span for the text (Lower, full-width section)
            const textSpan = document.createElement("span");
            textSpan.className = "pnlm-hotspot-text-label";
            textSpan.textContent = h.text || "Go";

            // 3. Assemble the button in a column layout
            btn.appendChild(arrowSpan); // Arrow on top
            btn.appendChild(textSpan);  // Text on bottom

               hotSpotDiv.appendChild(btn);

               btn.addEventListener("click", (evt) => {
                evt.stopPropagation();
                // store requested target and perform scene change manually
                pendingTargetRef.current = {
                  yaw: Number.isFinite(targetYaw) ? targetYaw : undefined,
                  pitch: Number.isFinite(targetPitch) ? targetPitch : undefined,
                  hfov: Number.isFinite(targetHfov) ? targetHfov : undefined,
                };
                // load the scene programmatically
                try {
                  if (viewerRef.current && typeof viewerRef.current.loadScene === "function") {
                    viewerRef.current.loadScene(h.sceneId);
                  } else {
                    // fallback: dispatch event for default hotspot behaviour
                    window.location.hash = `#${h.sceneId}`;
                  }
                } catch (err) {
                  console.warn("Failed to load scene via hotspot handler:", err);
                }
              });
            },
            // createTooltipArgs keeps original hotspot data available if needed
            createTooltipArgs: h,
          };
        }

        // no special handling needed
        return h;
      });

      configScenes[id] = {
        title: sc.title,
        type: sc.type || "equirectangular",
        panorama: sc.panorama ? encodeURI(sc.panorama.trim()) : "",
        autoLoad: true,
        showZoomCtrl: true,
        initialViewParameters: {
          yaw: Number(sc.yaw ?? 0),
          pitch: Number(sc.pitch ?? 0),
          hfov: Number(sc.hfov ?? 110),
        },
        hotSpots: mappedHotspots,
      };
    });

    // initialize viewer
    try {
      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        default: {
          firstScene: currentScene,
          sceneFadeDuration: 800,
          autorotate: -2,
        },
        scenes: configScenes,
      });
    } catch (err) {
      console.error("Failed to initialize Pannellum viewer:", err);
      return;
    }

    // on scene change: apply pending target if present (fallback)
    try {
      if (typeof viewerRef.current.on === "function") {
        viewerRef.current.on("scenechange", (sceneId) => {
          setCurrentScene(sceneId);
          // small timeout to wait for scene load/transition to finish, then apply view
          if (pendingTargetRef.current) {
            const t = pendingTargetRef.current;
            pendingTargetRef.current = null;
            // apply after a short delay so the scene is ready
            setTimeout(() => {
              try {
                if (typeof viewerRef.current.setYaw === "function" && t.yaw !== undefined) viewerRef.current.setYaw(t.yaw);
                if (typeof viewerRef.current.setPitch === "function" && t.pitch !== undefined) viewerRef.current.setPitch(t.pitch);
                if (typeof viewerRef.current.setHfov === "function" && t.hfov !== undefined) viewerRef.current.setHfov(t.hfov);
              } catch (e) {
                console.warn("Failed to apply hotspot target view:", e);
              }
            }, 250); // adjust delay if needed
          }
        });
      }
    } catch (e) {}

    setReady(true);

    return () => {
      try { viewerRef.current?.destroy(); } catch (e) {}
      viewerRef.current = null;
      try { if (containerRef.current) containerRef.current.innerHTML = ""; } catch (e) {}
      setReady(false);
    };
  }, [scenes, currentScene]);



  // Block dragging if draggable=false
  useEffect(() => {
    let isDown = false;
    let activePointerId = null;

    const onDown = (e) => {
      if (e.pointerId !== undefined) activePointerId = e.pointerId;
      isDown = true;
    };
    const onUp = (e) => {
      if (e.pointerId !== undefined && activePointerId !== e.pointerId) return;
      isDown = false;
      activePointerId = null;
    };
    const onMove = (e) => {
      if (!isDown) return;
      const allowDrag = scenes?.[currentScene]?.draggable ?? true;
      if (!allowDrag) {
        try {
          if (e.cancelable) e.preventDefault();
        } catch {}
        e.stopPropagation?.();
        e.stopImmediatePropagation?.();
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
              style={{ width: "100%", height: 600, backgroundColor: "#000" }}
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
          

          <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 bg-white px-6 pb-6 h-[600px] overflow-y-auto rounded-2xl shadow-lg scrollbar-thin">
            <div className="flex items-center justify-between pb-4 pt-6 border-b border-slate-200 sticky top-0 bg-white">
              <h3 className="text-lg font-bold text-slate-800">Explore Areas</h3>
            </div>

            <nav className="mt-4 space-y-2">
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
