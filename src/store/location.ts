import { locations } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { LocationFolder, LocationStoreState } from "@/types";

const DEFAULT_LOCATION: LocationFolder = locations.work;

export const useLocationStore = create<LocationStoreState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => set({ activeLocation: location }),

    resetActiveLocation: () => set({ activeLocation: DEFAULT_LOCATION }),
  }))
);
