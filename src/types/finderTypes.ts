type LocationType = "work" | "about" | "resume" | "trash";

type FileKind = "file" | "folder";
type FileType = "txt" | "url" | "img" | "fig" | "pdf";

interface BaseItem {
  id: number;
  name: string;
  icon: string;
  kind: FileKind;
  position?: string;
}

interface FileItem extends BaseItem {
  kind: "file";
  fileType: FileType;
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  image?: string;
  description?: readonly string[];
}

interface FolderItem extends BaseItem {
  kind: "folder";
  type?: LocationType;
  windowPosition?: string;
  children?: readonly Item[];
}

type Item = FileItem | FolderItem;

interface LocationFolder extends FolderItem {
  type: LocationType;
  children: readonly Item[];
}

interface LocationStoreState {
  activeLocation: LocationFolder | null;
  setActiveLocation: (location: LocationFolder | null) => void;
  resetActiveLocation: () => void;
}

export type {
  FileKind,
  FileType,
  BaseItem,
  FileItem,
  FolderItem,
  Item,
  LocationFolder,
  LocationStoreState,
  LocationType,
};
