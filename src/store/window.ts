import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";
import type { WindowDataMap } from "../types/windowTypes";
import { castDraft } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowState<T> = {
  isOpen: boolean;
  zIndex: number;
  data: T | null;
};

export type Windows = {
  [K in keyof WindowDataMap]: WindowState<WindowDataMap[K]>;
};

export type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowStore = {
  windows: Windows;
  nextZIndex: number;
  openWindow: <K extends WindowKey>(
    windowKey: K,
    data?: WindowDataMap[K],
  ) => void;
  closeWindow: <K extends WindowKey>(windowKey: K) => void;
  focusWindow: <K extends WindowKey>(windowKey: K) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Opening always brings the window to the front, even if it was already open.
    openWindow: (windowKey, data) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        if (data !== undefined) win.data = castDraft(data);
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
  })),
);

export default useWindowStore;
