import type { WINDOW_CONFIG, dockApps } from "@constants";

export type WindowName = keyof typeof WINDOW_CONFIG;

export type NavLinksTypes = {
  id: number;
  name: string;
  type: "finder" | "contact" | "resume";
};

export type DockApp =
  | {
      id: Exclude<(typeof dockApps)[number]["id"], "trash">;
      name: string;
      icon: string;
      canOpen: true;
    }
  | {
      id: "trash";
      name: string;
      icon: string;
      canOpen: false;
    };
