from pathlib import Path
import os 
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent

load_dotenv(BASE_DIR / ".env")

SAMPLE_DATA_DIR = BASE_DIR / "sample_data"

ALERTS_FILE = SAMPLE_DATA_DIR / "alerts.json"
DATA_FILE = SAMPLE_DATA_DIR / "telemetry_stream.csv"
KNOWLEDGE_BASE_DIR = BASE_DIR / "knowledge_base"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_MODEL = "gemini-2.5-flash"