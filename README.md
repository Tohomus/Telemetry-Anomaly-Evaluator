# 🚀 Telemetry Anomaly Evaluator

An AI-powered satellite telemetry anomaly evaluation system built using **FastAPI**, **React**, **Random Forest**, **Mahalanobis Distance**, and **Gemini RAG**.

This project simulates spacecraft telemetry, detects anomalies using statistical methods, classifies them using Machine Learning, and generates AI-assisted engineering explanations using Retrieval-Augmented Generation (RAG).

---

# 📌 Project Overview

The Telemetry Anomaly Evaluator is inspired by modern aerospace mission control software used in organizations such as ISRO, NASA, ESA, and commercial satellite companies.

Instead of visualizing telemetry through business-style dashboards, the application focuses on an engineering workflow:

1. Generate telemetry
2. Detect anomalies
3. Classify anomalies
4. Review anomaly alerts
5. Ask an AI assistant to explain the anomaly

The objective is to demonstrate how AI can assist spacecraft operators in understanding abnormal satellite behavior.

---

# 🛠 Technology Stack

## Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Axios

---

## Backend

- FastAPI
- Python
- Pandas
- NumPy
- Scikit-Learn
- Gemini API

---

## AI Components

- Mahalanobis Distance
- Random Forest Classifier
- Retrieval-Augmented Generation (RAG)
- Gemini LLM

---

# 📁 Project Structure

```
Telemetry-Anomaly-Evaluation
│
├── backend
│   ├── anomaly_engine
│   ├── simulator
│   ├── ml_engine
│   ├── rag
│   ├── sample_data
│   ├── config.py
│   └── app.py
│
├── frontend
│   ├── src
│   │
│   ├── components
│   │   ├── alerts
│   │   ├── analysis
│   │   ├── common
│   │   ├── layout
│   │   ├── pipeline
│   │   ├── stats
│   │   ├── status
│   │   └── ui
│   │
│   ├── constants
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── store
│   ├── styles
│   ├── types
│   └── main.tsx
│
└── README.md
```

---

# ⚙ Backend Pipeline

The backend follows a sequential processing pipeline.

```
Telemetry Simulator
        │
        ▼
Mahalanobis Distance Detector
        │
        ▼
Random Forest Classifier
        │
        ▼
alerts.json
        │
        ▼
Gemini RAG
```

---

# 🛰 Workflow

## Step 1 — Generate Dataset

The telemetry simulator generates synthetic satellite telemetry containing:

- Battery Voltage
- Temperature
- Current Draw
- Power

Small random variations are introduced to simulate realistic spacecraft behavior.

The dataset is stored as:

```
backend/sample_data/telemetry_stream.csv
```

---

## Step 2 — Detect Anomalies

The Mahalanobis Distance engine analyses the generated telemetry.

It calculates the multivariate distance of every telemetry point from the normal operating distribution.

Each record is marked as:

- Normal
- Anomaly

The updated dataset is written back to:

```
telemetry_stream.csv
```

---

## Step 3 — Classify Anomalies

Only detected anomalies are passed into the Random Forest model.

The classifier predicts the anomaly type, such as:

- Voltage Drop
- Current Surge
- Cooling Failure
- Battery Degradation
- Sensor Noise
- Mixed Fault
- Multi Variable Fault

The generated alerts are stored in:

```
backend/sample_data/alerts.json
```

---

## Step 4 — Load Alerts

The frontend fetches alerts from:

```
GET /alerts
```

The latest alerts are displayed inside the Alert Explorer table.

Each alert displays:

- Timestamp
- Anomaly Type
- Confidence
- Voltage
- Temperature
- Current
- Power

---

## Step 5 — AI Analysis

Clicking **Analyze** sends the selected alert to:

```
POST /ask-rag
```

The backend performs the following sequence:

```
Alert
    │
    ▼
Knowledge Retrieval
    │
    ▼
Prompt Builder
    │
    ▼
Gemini
    │
    ▼
Engineering Explanation
```

The generated explanation is displayed inside the AI Analysis panel.

---

# 💻 Frontend Workflow

```
User

↓

Generate Dataset

↓

Detect Anomalies

↓

Classify Anomalies

↓

Alert Table

↓

Select Alert

↓

Analyze

↓

Gemini Response
```

---

# 🧠 RAG Workflow

The AI assistant follows a Retrieval-Augmented Generation architecture.

```
Alert

↓

Knowledge Retriever

↓

Engineering Knowledge

↓

Prompt Builder

↓

Gemini API

↓

AI Response
```

The response includes an engineering explanation of the anomaly rather than simply classifying it.

---

# 🌐 API Endpoints

## Generate Dataset

```
POST /generate-data
```

Generates synthetic telemetry.

---

## Detect Anomalies

```
POST /detect-anomalies
```

Runs Mahalanobis Distance anomaly detection.

---

## Classify Anomalies

```
POST /classify-anomalies
```

Runs the Random Forest classifier.

---

## Fetch Alerts

```
GET /alerts
```

Returns the most recent anomaly alerts.

---

## AI Analysis

```
POST /ask-rag
```

Generates an AI explanation using Gemini.

---

# 🚀 Running the Project

## 1. Clone the repository

```bash
git clone <repository-url>

cd Telemetry-Anomaly-Evaluation
```

---

## 2. Backend Setup

Create a virtual environment.

```bash
python -m venv .venv
```

Activate it.

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Start FastAPI.

```bash
uvicorn backend.app:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## 3. Frontend Setup

Move into the frontend.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start Vite.

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🔑 Gemini API Configuration

Create a `.env` file inside the backend (or wherever your application loads environment variables).

Example:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

The Gemini API key is used by the RAG assistant to generate engineering explanations for detected anomalies.

> **Note:** Never commit your API key to version control. Ensure `.env` is listed in `.gitignore`.

---

# 📊 Machine Learning

The Random Forest classifier is trained using telemetry features:

- Battery Voltage
- Temperature
- Current Draw
- Power

The project also outputs:

- Classification Report
- Confusion Matrix
- Cross Validation Scores
- Feature Importance

during model execution.

---

# 🎨 Dashboard Sections

The dashboard consists of:

## Navigation

- Backend Status
- Current Time
- Theme Toggle

---

## Pipeline

- Generate Dataset
- Detect Anomalies
- Classify Anomalies
- AI Analysis

---

## Dataset Summary

Displays system statistics.

---

## Alert Explorer

Displays anomaly alerts in a searchable table.

---

## AI Analysis

Displays Gemini-generated engineering explanations.

---

## System Status

Displays the status of:

- Telemetry Simulator
- Mahalanobis Engine
- Random Forest Classifier
- Knowledge Base
- Gemini API

---

# 👨‍💻 User Guide

Follow the workflow below:

### Step 1

Click

```
Generate Dataset
```

A synthetic telemetry dataset is created.

---

### Step 2

Click

```
Detect Anomalies
```

The Mahalanobis engine identifies abnormal telemetry points.

---

### Step 3

Click

```
Classify Anomalies
```

The Random Forest classifier predicts anomaly types and generates alerts.

---

### Step 4

The Alert Explorer table is automatically populated.

---

### Step 5

Select any anomaly.

Click

```
Analyze
```

---

### Step 6

The AI assistant generates an engineering explanation describing the detected anomaly.

---

# 🚀 Future Improvements

Potential enhancements include:

- Persistent trained model (avoid retraining on every classification)
- Pagination for alerts
- Authentication
- Real-time telemetry streaming
- WebSocket updates
- Advanced filtering and sorting
- Downloadable reports
- Historical anomaly analysis
- Interactive telemetry charts
- Multi-satellite support

---

# 📜 License

This project is intended for educational and research purposes.

---

# 🙌 Acknowledgements

- FastAPI
- React
- Scikit-Learn
- Google Gemini
- Vite
- Tailwind CSS
- Zustand

---

Developed as part of an AI-powered satellite telemetry anomaly detection and engineering diagnosis system.
