# Telemetry Anomaly Evaluation System

An AI-powered telemetry anomaly detection and diagnostic assistant built using:

- Telemetry Simulator
- Mahalanobis Distance Detector
- Random Forest Classifier
- Retrieval-Augmented Generation (RAG)
- Google Gemini

---

# Project Structure

```
Telemetry-Anomaly-Evaluation/

backend/
│
├── simulator/
├── anomaly_engine/
├── ml_engine/
├── knowledge_base/
├── rag/
├── sample_data/
├── config.py
└── main.py
```

---

# Setup

## 1. Activate Virtual Environment

From the project root:

```powershell
cd D:\PROJECTS\Telemetry-Anomaly-Evaluation

.\.venv\Scripts\activate
```

---

## 2. Install Dependencies

From the project root:

```powershell
pip install -r backend\requirements.txt
```

---

## 3. Configure Gemini API

Create

```
backend/.env
```

Add:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

# Running the Project

## Step 1 — Generate Telemetry Dataset + Run ML Pipeline

Run from the project root:

```powershell
python backend/main.py
```

This performs:

- Generates telemetry data
- Runs Mahalanobis Distance Detection
- Runs Random Forest Classifier
- Generates telemetry_stream.csv
- Generates alerts.json

Generated files:

```
backend/sample_data/

├── telemetry_stream.csv
└── alerts.json
```

---

## Step 2 — Run the RAG Pipeline

Navigate to backend:

```powershell
cd backend
```

Run:

```powershell
python -m rag.test_rag
```

This performs:

- Loads alerts.json
- Retrieves corresponding knowledge
- Builds the AI prompt
- Sends the prompt to Gemini
- Returns the AI-generated diagnostic report

---

# Complete Workflow

```
Telemetry Simulator
        │
        ▼
Telemetry CSV
        │
        ▼
Mahalanobis Detector
        │
        ▼
Random Forest Classifier
        │
        ▼
alerts.json
        │
        ▼
JSON Loader
        │
        ▼
Knowledge Retriever
        │
        ▼
Prompt Builder
        │
        ▼
Gemini API
        │
        ▼
AI Diagnostic Report
```

---

# Important Files

## Generate telemetry

```
backend/main.py
```

---

## Knowledge Base

```
backend/knowledge_base/
```

---

## RAG

```
backend/rag/
```

Contains:

- json_loader.py
- retriever.py
- prompt_builder.py
- llm.py
- rag_assistant.py
- test_rag.py

---

## Generated Files

```
backend/sample_data/

telemetry_stream.csv

alerts.json
```

These files are automatically regenerated every time:

```powershell
python backend/main.py
```

---

# Development Workflow

Whenever simulator or classifier code changes:

Run

```powershell
python backend/main.py
```

to regenerate:

- telemetry_stream.csv
- alerts.json

Then test the RAG:

```powershell
cd backend

python -m rag.test_rag
```

---

# Current Project Status

## Phase 1

- Telemetry Simulator
- Mahalanobis Detector
- Random Forest Classifier

Completed

---

## Phase 2

- Knowledge Base
- JSON Loader
- Retriever
- Prompt Builder
- Gemini Integration
- RAG Pipeline

Completed

---

Future Work

- FastAPI Backend
- React Dashboard
- Live Telemetry Streaming
- Real-time AI Diagnostics
- LangGraph Agentic Workflow
