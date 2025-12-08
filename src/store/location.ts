import { locations } from "@constants";
import type { LocationFolder, LocationStoreState } from "../types/finderTypes";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION: LocationFolder = locations.work;

export const useLocationStore = create<LocationStoreState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => set({ activeLocation: location }),

    resetActiveLocation: () => set({ activeLocation: DEFAULT_LOCATION }),
  }))
);
