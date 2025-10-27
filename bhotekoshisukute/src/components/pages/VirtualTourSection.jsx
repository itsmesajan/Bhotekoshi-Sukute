import React, { useEffect, useRef, useState } from "react";
import "pannellum/build/pannellum.css";
import "pannellum/build/pannellum.js";

const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const VirtualTourSection = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [currentScene, setCurrentScene] = useState("lobby");

  // Scenes configuration
  const scenes = {
    lobby: {
      title: "Lobby & Reception",
      pitch: 0,
      yaw: 0,
      type: "equirectangular",
      draggable: false, 
      panorama:
        "https://www.suitehomes.com.np/images/360/NXHEB-Main Entrance.jpg",
      hotSpots: [
        {
          pitch: -4,
          yaw: -3,
          type: "scene",
          text: "Lobby Area",
          sceneId: "deluxe",

          targetPitch: 0,
        },
      ],
    },
    deluxe: {
      title: "Deluxe Room",
      panorama: "https://www.suitehomes.com.np/images/360/0xnMX-Lhotse.jpg",
      hfov: 100,
      hotSpots: [
        {
          pitch: -4,
          yaw: 160,
          type: "scene",
          text: "Back to Lobby",
          sceneId: "lobby",
        },
        {
          pitch: -6,
          yaw: 40,
          type: "info",
          text: "Deluxe room with king bed and mountain view.",
        },
      ],
    },
    family: {
      title: "Family Cottage",
      panorama:
        "https://www.suitehomes.com.np/images/360/NXHEB-Main Entrance.jpg",
      hfov: 100,
      hotSpots: [
        {
          pitch: -3,
          yaw: 170,
          type: "scene",
          text: "Back to Lobby",
          sceneId: "lobby",
        },
        {
          pitch: 0,
          yaw: -30,
          type: "info",
          text: "Spacious cottage for families.",
        },
      ],
    },
    restaurant: {
      title: "Restaurant & Bar",
      panorama: "/assets/virtual/restaurant.jpg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -2,
          yaw: -170,
          type: "scene",
          text: "Back to Lobby",
          sceneId: "lobby",
        },
        { pitch: 5, yaw: 60, type: "info", text: "Open daily: 7am - 10pm." },
      ],
    },
    pool: {
      title: "Swimming Pool",
      panorama: "/assets/virtual/pool.jpg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -1,
          yaw: 140,
          type: "scene",
          text: "Back to Lobby",
          sceneId: "lobby",
        },
        { pitch: 3, yaw: -50, type: "info", text: "Heated outdoor pool." },
      ],
    },
  };


    const navLinks = Object.keys(scenes).map((key, i) => ({
    name: scenes[key].title,
    icon: ["meeting_room", "bed", "cottage", "restaurant", "pool"][i] || "room",
    key,
  }));

  const goToScene = (key) => {
    if (viewerRef.current && currentScene !== key) {
      viewerRef.current.loadScene(key);
      setCurrentScene(key);
    }
  };

  useEffect(() => {
    if (!containerRef.current || !window.pannellum) return;

    // Cleanup previous instance
    if (viewerRef.current?.destroy) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }
    containerRef.current.innerHTML = "";

    // Build scenes config for Pannellum
    const configScenes = {};
    Object.entries(scenes).forEach(([id, sc]) => {
      configScenes[id] = {
        title: sc.title,
        type: "equirectangular",
        panorama: sc.panorama,
        autoLoad: true,
        showZoomCtrl: true,
        dragPan: sc.draggable ?? true,
        initialViewParameters: {
          yaw: sc.yaw ?? 0,
          pitch: sc.pitch ?? 0,
          hfov: sc.hfov ?? 100,
        },
        hotSpots: sc.hotSpots || [],
      };
    });

    // Initialize Pannellum
    viewerRef.current = window.pannellum.viewer(containerRef.current, {
      default: {
        firstScene: currentScene,
        sceneFadeDuration: 1000,
        autorotate: -2,
      },
      scenes: configScenes,
    });

    // Update currentScene and drag behavior on scene change
    viewerRef.current.on("scenechange", (sceneId) => {
      setCurrentScene(sceneId);
      const sc = scenes[sceneId];
      viewerRef.current.setYaw(sc.yaw ?? 0);
      viewerRef.current.setPitch(sc.pitch ?? 0);
      viewerRef.current.setHfov(sc.hfov ?? 100);

    });

    setReady(true);

    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, []);

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
      const allowDrag = (scenes[currentScene]?.draggable ?? true) === true;
      if (!allowDrag) {
        // block the move so pannellum won't drag, but keep pointerdown/up and wheel working
        try { e.preventDefault?.(); } catch {}
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

          <aside className="w-full md:w-72 lg:w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
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
                  <Icon name={link.icon} />
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