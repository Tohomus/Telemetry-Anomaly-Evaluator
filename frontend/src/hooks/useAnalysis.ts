import { useTelemetryStore } from "../store/telemetryStore";
import { analyzeAlert } from "../services/ragService";
import type{Alert} from "../types/anomaly";


export function useAnalysis() {

    const {
        setAnalysisStatus,
        setAnalysis,
        setSelectedAlert,
        setLoading,
    } = useTelemetryStore();

    const handleAnalyze = async (alert: Alert) => {

        try {

            setAnalysisStatus("running");

            setLoading(true);

            setSelectedAlert(alert);

            const response = await analyzeAlert(alert);

            console.log(response);

            setAnalysis(response);
            setAnalysisStatus("completed");

        } catch (error) {

            console.error(error);
            setAnalysisStatus("idle");

        } finally {

            setLoading(false);

        }

    };

    return {
        handleAnalyze,
    };

}