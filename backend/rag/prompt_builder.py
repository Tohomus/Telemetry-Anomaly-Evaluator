#This is the code which is used to make the prompt for the RAG. 
# it will include the anomal alert and knowledge base text and format 
# it into a big prompt.#

class PromptBuilder:

  def build_prompt(self,alert,knowledge):

    return f"""
You are an aerospace telemetry diagnostic assistant.

Your task is to analyze telemetry anomalies generated from a spacecraft telemetry monitoring system.

Follow these rules carefully:

- Answer professionally.
- Use ONLY the telemetry values and knowledge base provided below.
- Do NOT invent information that is not present.
- If confidence is low, mention that the prediction may require further verification.
- Keep the explanation concise and technically accurate.
- Use the severity provided in the knowledge base. Do not assign a different severity.

Respond using the following structure:

## Summary

## Possible Causes

## Recommended Actions

## Severity Assessment

--------------------------------------------------

ANOMALY DETAILS

Anomaly Type:
{alert["predicted_anomaly_type"]}

Confidence:
{alert["confidence"]}

Telemetry Values:

Battery Voltage:
{alert["telemetry"]["battery_voltage"]} V

Temperature:
{alert["telemetry"]["temperature"]} °C

Current Draw:
{alert["telemetry"]["current_draw"]} A

Power:
{alert["telemetry"]["power"]} W

--------------------------------------------------

KNOWLEDGE BASE

{knowledge}
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