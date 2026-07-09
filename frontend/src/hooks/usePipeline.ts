import { useTelemetryStore } from "../store/telemetryStore";

import {
  generateDataset,
} from "../services/telemetryService";

export function usePipeline() {

  const {
    setLoading,
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

  return {

    handleGenerateDataset,

  };

}