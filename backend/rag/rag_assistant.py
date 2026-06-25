from rag.retriever import (KnowledgeRetriever)
from rag.prompt_builder import (PromptBuilder)
from rag.llm import LLM


class RagAssistant:

  def __init__(self):
    self.retriever = (KnowledgeRetriever())
    self.prompt_builder=(PromptBuilder())
    self.llm=LLM()

  def process_alert(self,alert):
    knowledge=(self.retriever.retrieve(alert["predicted_anomaly_type"]))
    prompt = (self.prompt_builder.build_prompt(alert,knowledge))
    response=self.llm.generate_response(prompt)

    return response
#This is actually the RAG orchestrator.#