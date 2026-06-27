# Run Commands

## Install Packages

```powershell 
#from root of the repo

pip install -r backend\requirements.txt
```

---

## Generate Telemetry + CSV + Alerts

```powershell
#from root of the repo

python backend/main.py
```

---

## Test RAG + Gemini

```powershell
cd backend

python -m rag.test_rag
```