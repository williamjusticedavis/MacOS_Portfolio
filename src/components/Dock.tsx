import { dockApps, locations } from "@constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { useLocationStore } from "@store/location";
import useWindowStore, { type WindowKey } from "@store/window";
import type { DockApp } from "../types/windowTypes";

const Dock = () => {
  const { closeWindow, openWindow, focusWindow, windows } = useWindowStore();
  const { activeLocation, setActiveLocation, resetActiveLocation } =
    useLocationStore();
  const dockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;
    const icons = dock.querySelectorAll(".dock-icon");
    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const isFrontmost = (key: WindowKey) => {
    const topZIndex = Math.max(
      ...Object.values(windows)
        .filter((w) => w.isOpen)
        .map((w) => w.zIndex),
    );
    return windows[key].isOpen && windows[key].zIndex === topZIndex;
  };

  // Closed: open it. Open but buried: bring it forward. In front: close it.
  const toggleWindow = (key: WindowKey) => {
    if (!windows[key].isOpen) return openWindow(key);
    if (!isFrontmost(key)) return focusWindow(key);
    closeWindow(key);
  };

  const toggleApp = (id: DockApp["id"]) => {
    // Archive has no window of its own: it is Finder showing the Archive folder.
    if (id === "trash") {
      const showingArchive = activeLocation?.type === "trash";
      if (showingArchive && isFrontmost("finder")) return closeWindow("finder");
      setActiveLocation(locations.trash);
      return openWindow("finder");
    }

    // Portfolio always starts at Work, not wherever Finder was left.
    if (id === "finder" && !windows.finder.isOpen) resetActiveLocation();

    toggleWindow(id);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => canOpen && toggleApp(id)}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
