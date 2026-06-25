#This is the code which is used to make the prompt for the RAG. 
# it will include the anomal alert and knowledge base text and format 
# it into a big prompt.#

class PromptBuilder:

  def build_prompt(self,alert,knowledge):

    return f"""
    
    An anomaly has been detected.

    ANOMALY TYPE:
    {alert["predicted_anomaly_type"]}

    CONFIDENCE:
    {alert["confidence"]}

    TELEMETRY:

    Voltage:
    {alert["telemetry"]["battery_voltage"]}

    Temperature:
    {alert["telemetry"]["temperature"]}

    Current:
    {alert["telemetry"]["current_draw"]}

    KNOWLEDGE BASE:

    {knowledge}

    Please explain:

    1. What happened?
    2. Possible causes?
    3. Recommended actions?
    """

#Note:
#Alert is a dictionary, it holds data in key-value pairs.


#in {alert["predicted_anomaly_type"]}, it tells Python to look at the 
#alert dictionary and find the key name "predicted_anomaly_type" and replace
#this with whatever the value is for the key.

#{alert["telemetry"]["battery_voltage"]}, this line tells python to Go inside alert, find the 
# telemetry sub-dictionary, and inside that sub-dictionary, grab the value for "battery_voltage"#


#SUMMARY#
#1) The sensor system detects a problem and packs the details into a dictionary named alert#
#2) The Database finds a relevant troubleshooting article and saves it as a text string named knowledge.
#3) The build_prompt function takes both alert(the dictionary) and knowledge(the text), then unpacks the specific dictionary
#keys it needs and weave them into a neat paragruph of instructions for the AI RAG.