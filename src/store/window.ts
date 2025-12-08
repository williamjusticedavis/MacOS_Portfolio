import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowState = {
  isOpen: boolean;
  zIndex: number;
  data: unknown | null;
};

export type WindowsMap = Record<string, WindowState>;

export type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowStore = {
  windows: WindowsMap;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: unknown | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG satisfies WindowsMap,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
