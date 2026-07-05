import MainLayout from "../layouts/MainLayout";
import PageContainer from "../components/layout/PageContainer";

import PipelineSection from "../components/pipeline/PipelineSection";
import StatsSection from "../components/stats/StatsSection";
import AlertExplorer from "../components/alerts/AlertExplorer";
import AnalysisSection from "../components/analysis/AnalysisSection";
import SystemStatus from "../components/status/SystemStatus";

function Dashboard() {
  return (
    <MainLayout>
      <PageContainer>
        <PipelineSection />

        <StatsSection />
        <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

    <div className="xl:col-span-2">
        <AlertExplorer />
    </div>

    <div>
        <AnalysisSection />
    </div>

</div>
        <SystemStatus />
      </PageContainer>
    </MainLayout>
  );
}

export default Dashboard;