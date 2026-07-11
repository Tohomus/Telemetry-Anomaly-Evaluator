import PipelineCard from "./PipelineCard";
import PipelineConnector from "./PipelineConnector";
import { usePipeline} from "../../hooks/usePipeline";
import { useTelemetryStore} from "../../store/telemetryStore";

import { PIPELINE_STAGES } from "../../constants/pipeline";

function PipelineSection() {

  const { generateStatus, detectStatus, classifyStatus, analysisStatus } = useTelemetryStore();
  const { handleGenerateDataset, handleDetectAnomalies, handleClassification } = usePipeline();
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-xl font-heading">
        Processing Pipeline
      </h2>

      <div className="flex items-center">
        {PIPELINE_STAGES.map((stage, index) => (
          <div
            key={stage.id}
            className="flex items-center flex-1"
          >
            <PipelineCard
              title={stage.title}
              buttonText={stage.button}
              onClick={
                stage.id === 1
                ?handleGenerateDataset
                : stage.id === 2
                ? handleDetectAnomalies
                : stage.id === 3
                ? handleClassification
                : undefined
              }
              status={
                stage.id === 1
                ? generateStatus
                : stage.id === 2
                ? detectStatus
                : stage.id === 3
                ? classifyStatus
                : analysisStatus
              }
            />

            {index <
              PIPELINE_STAGES.length - 1 && (
              <PipelineConnector />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PipelineSection;