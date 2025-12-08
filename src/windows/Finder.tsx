import { WindowControls } from "@components";
import { locations } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { useLocationStore } from "@store/location";
import useWindowStore from "@store/window";
import type { Item, LocationFolder } from "../types/finderTypes";
import { clsx } from "clsx";
import { Search } from "lucide-react";

type WindowType =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

const isLocationFolder = (item: unknown): item is LocationFolder => {
  return (
    typeof item === "object" && item !== null && (item as any).kind === "folder"
  );
};

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const WINDOW_MAP: Record<"txt" | "img", WindowType> = {
    txt: "txtfile",
    img: "imgfile",
  };

  const openItem = (item: Item) => {
    console.log(item);

    if (item.kind === "folder") {
      console.log(isLocationFolder(item));

      if (isLocationFolder(item)) {
        return setActiveLocation(item);
      }
      return;
    }

    if (item.fileType === "pdf") {
      return openWindow("resume", item);
    }

    if (item.fileType === "fig") {
      if (item.href) return window.open(item.href, "_blank");
      return;
    }

    if (item.fileType === "url") {
      if (item.href) return window.open(item.href, "_blank");
      return;
    }

    return openWindow(WINDOW_MAP[item.fileType], item);
  };

  const renderList = <
    T extends { id: number; icon: string; name: string; kind: string }
  >(
    name: string,
    items: readonly T[]
  ) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (isLocationFolder(item)) {
                setActiveLocation(item);
              }
            }}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
