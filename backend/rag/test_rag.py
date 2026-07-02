from backend.rag.rag_assistant import RagAssistant
from backend.rag.json_loader import JSONLoader
from backend.config import ALERTS_FILE

#this is just a mock data, later we will include actual data#
loader = JSONLoader()

alerts = loader.load_alerts(ALERTS_FILE)

if not alerts:
  print("No alerts found.")
  exit()


assistant = RagAssistant()

first_alert = alerts[0]

response= assistant.process_alert(first_alert)

print(response)

#Run this script to verify that data flows correctly from the raw alert dictionary all the way
# to the final structured LLM Prompt.#