import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";
import type { WindowDataMap } from "../types/windowTypes";
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
    data: WindowDataMap[K]
  ) => void;
  closeWindow: <K extends WindowKey>(windowKey: K) => void;
  focusWindow: <K extends WindowKey>(windowKey: K) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data) =>
      set((state) => ({
        windows: {
          ...state.windows,
          [windowKey]: {
            ...state.windows[windowKey],
            isOpen: true,
            zIndex: state.nextZIndex + 1,
            data: data ?? state.windows[windowKey].data,
          },
          nextZIndex: state.nextZIndex + 1,
        },
      })),

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
