import { create } from "zustand";

interface TelemetryStore {
  backendStatus: "online" | "offline";

  setBackendStatus: (
    status: "online" | "offline"
  ) => void;
}

export const useTelemetryStore =
  create<TelemetryStore>((set) => ({
    backendStatus: "online",

    setBackendStatus: (status) =>
      set({ backendStatus: status }),
  }));