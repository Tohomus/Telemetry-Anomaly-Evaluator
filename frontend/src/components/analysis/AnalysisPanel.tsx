import Card from "../ui/Card";
import { useTelemetryStore } from "../../store/telemetryStore";

function AnalysisPanel() {

    const { analysis, analysisStatus } = useTelemetryStore();

    return (

        <Card>

            <h2 className="mb-6 text-xl font-heading">
                AI Analysis
            </h2>

            {analysisStatus === "running" ? (

                <p className="text-sm text-muted">
                    Generating AI analysis...
                </p>

            ) : (

                <div>

                    <h3 className="mb-3 font-semibold">
                        Response
                    </h3>

                    <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">

                        <p className="whitespace-pre-wrap text-sm leading-7 text-muted">

                            {analysis
                                ? analysis.response
                                : "Select an alert and click Analyze."}

                        </p>

                    </div>

                </div>

            )}

        </Card>

    );

}

export default AnalysisPanel;