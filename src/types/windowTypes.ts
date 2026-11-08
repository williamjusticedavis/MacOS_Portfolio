import type { WINDOW_CONFIG, dockApps } from "@constants";
import type { FileItem, FolderItem } from "./finderTypes";

export type WindowName = keyof typeof WINDOW_CONFIG;

export type NavLinksTypes = {
  id: number;
  name: string;
  type: "finder" | "contact" | "resume";
};

export type DockApp = (typeof dockApps)[number];

export type WindowDataMap = {
  finder: FolderItem | null;
  contact: null;
  resume: FileItem | null;
  safari: FileItem | null;
  photos: null;
  terminal: null;
  txtfile: FileItem | null;
  imgfile: FileItem | null;
};
