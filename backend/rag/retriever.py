#This is the file which will let the RAG to retrieve 
# necessary knowledge of the occured anomaly from existing
# anomaly information given in the knowledge base.#


from pathlib import Path # -> Here, I haven't installed any package as pathlib is inbuilt in python.#

class KnowledgeRetriever:

  def __init__(self):
    self.kb_path = Path("knowledge_base")

  def retrieve(self,anomaly_type):
    #a dictionary is initialised as we can find the anomaly and the file it's knowledge belongs to#
    mapping = {
      "Voltage Drop": "voltage_drop.md",

      "Temp Spike": "temp_spike.md",

      "Current Surge": "current_surge.md",

      "Multi-Variable Fault": "multi_variable_fault.md",

      "Battery Degradation": "battery_degradation.md",

      "Cooling Failure": "cooling_failure.md",

      "Sensor Noise": "sensor_noise.md",

      "Mixed Fault": "mixed_fault.md"
    }

    filename = mapping.get(anomaly_type)

    if not filename:
      return "No knowledge found."
    
    file_path = (self.kb_path/filename)

    #This will read the whole .md file corresponding to the anomaly.
    # and it returns as a string#
    return file_path.read_text(encoding="utf-8")