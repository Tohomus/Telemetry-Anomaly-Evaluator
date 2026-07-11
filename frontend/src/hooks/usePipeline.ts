import { useTelemetryStore } from "../store/telemetryStore";
import { detectAnomalies} from "../services/anomalyService"
import {classifyAnomalies} from "../services/anomalyService";
import {getAlerts } from "../services/anomalyService";

import {
  generateDataset,
} from "../services/telemetryService";

export function usePipeline() {

  const {
    setLoading,
    setAlerts,
    setGenerateStatus,
    setDetectStatus,
    setClassifyStatus,
    setGeneratedSamples,
    setDetectedAnomalies,
    setGeneratedAlerts,
  } = useTelemetryStore();

  const handleGenerateDataset = async () => {

    try {

      setGenerateStatus("running");

      setLoading(true);

      const response =
        await generateDataset();

        setGeneratedSamples(
          response.rows_generated
        );

      console.log(response);

      setGenerateStatus("completed");

    } catch (error) {

      console.error(error);
      setGenerateStatus("idle");

    } finally {

      setLoading(false);

    }

  };

  const handleDetectAnomalies = async () => {
  try {

    setDetectStatus("running");

    setLoading(true);

    const response = await detectAnomalies();

    setDetectedAnomalies(
      response.anomalies_detected
    );

    console.log(response);
    setDetectStatus("completed");

  } catch (error) {
    console.error(error);
    setDetectStatus("idle");

  } finally {
    setLoading(false);
  }
};
    const handleClassification = async () => {
  try {
    setClassifyStatus("running");

    setLoading(true);

    const response = await classifyAnomalies();

    setGeneratedAlerts(
      response.alerts_generated
    )

    console.log(response);


    const alerts = await getAlerts();

    console.log(alerts);

    setAlerts(alerts);

    setClassifyStatus("completed");

  } catch (error) {
    console.error(error);
    setClassifyStatus("idle");

  } finally {
    setLoading(false);
  }
};

const handleLoadAlerts = async () => {
  try {
    setLoading(true);

    const alerts = await getAlerts();

    console.log("Alerts received:", alerts);

    setAlerts(alerts);

  } catch (error) {
    console.error(error);

  } finally {
    setLoading(false);
  }
};





  return {

    handleGenerateDataset,
    handleDetectAnomalies,
    handleClassification,
    handleLoadAlerts,

  };

}