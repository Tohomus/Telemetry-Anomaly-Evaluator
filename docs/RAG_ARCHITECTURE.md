# Telemetry Anomaly Evaluation - RAG Architecture

## Overview

The Retrieval-Augmented Generation (RAG) module explains detected satellite telemetry anomalies by combining:

- Machine Learning predictions
- Knowledge Base retrieval
- Prompt Engineering
- Large Language Models (LLMs)

---

## Overall Pipeline

Simulator
↓
Mahalanobis Distance Detector
↓
Random Forest Classifier
↓
JSON Alert
↓
JSON Loader
↓
Knowledge Retriever
↓
Prompt Builder
↓
Large Language Model
↓
Natural Language Explanation

---

## Module Responsibilities

### sample_data/

Stores sample JSON alerts for testing the RAG pipeline before integrating with the classifier.

---

### knowledge_base/

Contains markdown files describing each anomaly.

Examples:

- Current Surge
- Voltage Drop
- Temperature Spike
- Multi-Variable Fault

Each document contains:

- Severity
- Description
- Possible Causes
- Recommended Actions

---

### json_loader.py

Reads JSON alerts and converts them into Python dictionaries.

---

### retriever.py

Retrieves the appropriate knowledge document based on the anomaly type.

---

### prompt_builder.py

Combines telemetry information and retrieved knowledge into a structured prompt for the LLM.

---

### llm.py

Responsible for communicating with the selected Large Language Model.

(Currently under development.)

---

### rag_assistant.py

Acts as the orchestrator.

Responsibilities:

1. Load alert
2. Retrieve knowledge
3. Build prompt
4. Send prompt to LLM
5. Return explanation

---

## Future Improvements

- Gemini API Integration
- LangChain
- LangGraph
- Multi-Agent Workflow
- Vector Database