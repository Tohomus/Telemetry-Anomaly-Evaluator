import { create } from "zustand";
import type{ TelemetryRecord } from "../types/telemetry";
import type{ AIAnalysis } from "../types/anomaly";

type PipelineStatus = | "idle" | "running" | "completed";

interface TelemetryStore {

    backendStatus: "online" | "offline";

    alerts: TelemetryRecord[];

    selectedAlert: TelemetryRecord | null;

    analysis: AIAnalysis | null;

    loading: boolean;

    generateStatus: PipelineStatus;

    detectStatus: PipelineStatus;

    classifyStatus: PipelineStatus;

    analysisStatus: PipelineStatus;

    generatedSamples: number;

    detectedAnomalies: number;

    generatedAlerts: number;

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

    setGenerateStatus: (
        status: PipelineStatus
    ) => void;

    setDetectStatus: (
        status: PipelineStatus
    ) => void;

    setClassifyStatus: (
        status: PipelineStatus
    ) => void;

    setAnalysisStatus: (
        status: PipelineStatus
    ) => void;

    setGeneratedSamples: (
        value: number
    ) => void;

    setDetectedAnomalies: (
        value: number
    ) => void;

    setGeneratedAlerts: (
        value: number
    ) => void;
}

export const useTelemetryStore =
create<TelemetryStore>((set)=>({

    backendStatus:"online",

    alerts:[],

    selectedAlert:null,

    analysis:null,

    loading:false,

    generateStatus: "idle",

    detectStatus: "idle",

    classifyStatus: "idle",

    analysisStatus: "idle",

    generatedSamples: 0,

    detectedAnomalies: 0,

    generatedAlerts: 0,

    setBackendStatus:(status)=>
        set({backendStatus:status}),

    setAlerts:(alerts)=>
        set({alerts}),

    setSelectedAlert:(selectedAlert)=>
        set({selectedAlert}),

    setAnalysis:(analysis)=>
        set({analysis}),

    setLoading:(loading)=>
        set({loading}),

    setGenerateStatus: (status) =>
        set({generateStatus: status}),

    setDetectStatus: (status) =>
        set({detectStatus: status}),

    setClassifyStatus: (status) =>
        set({classifyStatus: status}),

    setAnalysisStatus: (status) =>
        set({analysisStatus: status}),

    setGeneratedSamples: (value) =>
        set({generatedSamples: value}),

    setDetectedAnomalies: (value) =>
        set({detectedAnomalies: value}),

    setGeneratedAlerts: (value) =>
        set({generatedAlerts: value}),

}));