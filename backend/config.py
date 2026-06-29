from pathlib import Path
import os 
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent

ALERTS_FILE = BASE_DIR/"sample_data"/"alerts.json"

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

GEMINI_MODEL="gemini-2.5-flash"

