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
  } = useTelemetryStore();

  const handleGenerateDataset = async () => {

    try {

      setLoading(true);

      const response =
        await generateDataset();

      console.log(response);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDetectAnomalies = async () => {
  try {
    setLoading(true);

    const response = await detectAnomalies();

    console.log(response);

  } catch (error) {
    console.error(error);

  } finally {
    setLoading(false);
  }
};
    const handleClassification = async () => {
  try {
    setLoading(true);

    const response = await classifyAnomalies();

    console.log(response);

    const alerts = await getAlerts();

    console.log(alerts);

    setAlerts(alerts);

  } catch (error) {
    console.error(error);

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