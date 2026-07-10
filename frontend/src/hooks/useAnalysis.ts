import { useTelemetryStore } from "../store/telemetryStore";
import { analyzeAlert } from "../services/ragService";

export function useAnalysis() {

    const {
        setAnalysis,
        setSelectedAlert,
        setLoading,
    } = useTelemetryStore();

    const handleAnalyze = async (alert: any) => {

        try {

            setLoading(true);

            setSelectedAlert(alert);

            const response = await analyzeAlert(alert);

            console.log(response);

            setAnalysis(response);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return {
        handleAnalyze,
    };

}