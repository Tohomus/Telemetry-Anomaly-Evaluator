# Telemetry Anomaly Evaluator

## Frontend Folder Structure

```
src/
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── logos/
│
├── components/
│   │
│   ├── common/
│   │   ├── StatusBadge.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── LoadingOverlay.tsx
│   │   ├── Toast.tsx
│   │   └── PageTitle.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── PageContainer.tsx
│   │   └── Section.tsx
│   │
│   ├── pipeline/
│   │   ├── PipelineCard.tsx
│   │   ├── PipelineConnector.tsx
│   │   └── PipelineSection.tsx
│   │
│   ├── stats/
│   │   ├── StatCard.tsx
│   │   └── StatsSection.tsx
│   │
│   ├── alerts/
│   │   ├── AlertFilters.tsx
│   │   ├── AlertSearch.tsx
│   │   ├── AlertTable.tsx
│   │   └── AlertRow.tsx
│   │
│   ├── analysis/
│   │   ├── AnalysisPanel.tsx
│   │   ├── SeverityBadge.tsx
│   │   └── TypingAnimation.tsx
│   │
│   ├── status/
│   │   ├── SystemCard.tsx
│   │   └── SystemStatus.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── Select.tsx
│
├── constants/
│   ├── colors.ts
│   ├── endpoints.ts
│   └── pipeline.ts
│
├── hooks/
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   └── Dashboard.tsx
│
├── services/
│   ├── api.ts
│   ├── telemetryService.ts
│   ├── anomalyService.ts
│   └── ragService.ts
│
├── store/
│   └── telemetryStore.ts
│
├── styles/
│   └── globals.css
│
├── types/
│   ├── telemetry.ts
│   ├── anomaly.ts
│   └── api.ts
│
├── utils/
│   ├── formatDate.ts
│   └── calculateSeverity.ts
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## Development Order

### Phase 1

- Global Theme
- Layout
- Navbar

### Phase 2

- Pipeline Section
- Dataset Summary

### Phase 3

- Alert Explorer

### Phase 4

- AI Analysis Panel

### Phase 5

- System Status

### Phase 6

- Connect Backend

### Phase 7

- Final Polish