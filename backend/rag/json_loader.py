import json 

class JSONLoader:

  def load_alerts(self,file_path):

    with open(file_path, "r") as file:
      return json.load(file) 