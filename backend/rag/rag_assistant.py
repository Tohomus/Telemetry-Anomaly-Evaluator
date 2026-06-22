from rag.retriever import (KnowledgeRetriever)
from rag.prompt_builder import (PromptBuilder)

class RagAssistant:

  def __init__(self):
    self.retriever = (KnowledgeRetriever())
    self.prompt_builder=(PromptBuilder())

  def process_alert(self,alert):
    knowledge=(self.retriever.retrieve(alert["predicted_anomaly_type"]))
    prompt = (self.prompt_builder.build_prompt(alert,knowledge))

    return prompt
#This is actually the RAG orchestrator.#