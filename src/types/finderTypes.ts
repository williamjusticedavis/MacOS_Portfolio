export type LocationType = "work" | "about" | "resume" | "trash";

export type FileKind = "file" | "folder";
export type FileType = "txt" | "url" | "img" | "fig" | "pdf";

export interface BaseItem {
  id: number;
  name: string;
  icon: string;
  kind: FileKind;
  position?: string;
}

export interface FileItem extends BaseItem {
  kind: "file";
  fileType: FileType;
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  image?: string;
  description?: readonly string[];
}

export interface FolderItem extends BaseItem {
  kind: "folder";
  type?: LocationType;
  windowPosition?: string;
  children?: readonly Item[];
}

export type Item = FileItem | FolderItem;

export interface LocationFolder extends FolderItem {
  type: LocationType;
  children: readonly Item[];
}

export interface LocationStoreState {
  activeLocation: LocationFolder | null;
  setActiveLocation: (location: LocationFolder | null) => void;
  resetActiveLocation: () => void;
}
