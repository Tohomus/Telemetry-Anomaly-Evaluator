import { create } from "zustand";
import type{ TelemetryRecord } from "../types/telemetry";
import type{ AIAnalysis } from "../types/anomaly";

interface TelemetryStore {

    backendStatus: "online" | "offline";

    alerts: TelemetryRecord[];

    selectedAlert: TelemetryRecord | null;

    analysis: AIAnalysis | null;

    loading: boolean;

    setBackendStatus: (
        status: "online" | "offline"
    ) => void;

    setAlerts: (
        alerts: TelemetryRecord[]
    ) => void;

    setSelectedAlert: (
        alert: TelemetryRecord | null
    ) => void;

    setAnalysis: (
        analysis: AIAnalysis | null
    ) => void;

    setLoading: (
        loading: boolean
    ) => void;
}

export const useTelemetryStore =
create<TelemetryStore>((set)=>({

    backendStatus:"online",

    alerts:[],

    selectedAlert:null,

    analysis:null,

    loading:false,

    setBackendStatus:(status)=>
        set({backendStatus:status}),

    setAlerts:(alerts)=>
        set({alerts}),

    setSelectedAlert:(selectedAlert)=>
        set({selectedAlert}),

    setAnalysis:(analysis)=>
        set({analysis}),

    setLoading:(loading)=>
        set({loading})

}));