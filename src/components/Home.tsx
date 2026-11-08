import { locations } from "@constants";
import { useGSAP } from "@gsap/react";
import { useLocationStore } from "@store/location";
import useWindowStore from "@store/window";
import type { FolderItem, LocationFolder } from "../types/finderTypes";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

const projects = locations.work.children ?? [];
const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const homeRef = useRef<HTMLElement | null>(null);

  const handleOpenProjectFinder = (project: FolderItem) => {
    if (project.kind !== "folder") return;
    setActiveLocation(project as LocationFolder);
    openWindow("finder", project);
  };

  // Re-created whenever the folder list changes, so every folder can be dragged.
  useGSAP(
    () => {
      const draggables = Draggable.create(".folder");
      return () => draggables.forEach((d) => d.kill());
    },
    { scope: homeRef, dependencies: [projects.length] },
  );

  return (
    <section id="home" ref={homeRef}>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
