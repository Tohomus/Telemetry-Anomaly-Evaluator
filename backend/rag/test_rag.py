from rag.rag_assistant import (RagAssistant)
from rag.rag_assistant import RagAssistant
from rag.json_loader import JSONLoader

#this is just a mock data, later we will include actual data#
loader = JSONLoader()

sample_alert = loader.load_alert("sample_data/sample_alert.json")

assistant = RagAssistant()

response= assistant.process_alert(sample_alert)

print(response)

#Run this script to verify that data flows correctly from the raw alert dictionary all the way
# to the final structured LLM Prompt.#