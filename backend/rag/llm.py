import google.generativeai as genai

from config import(GEMINI_API_KEY,GEMINI_MODEL)

class LLM:

  def __init__(self):

    genai.configure(api_key=GEMINI_API_KEY)

    self.model= genai.GenerativeModel(GEMINI_MODEL)

  def generate_response(self,prompt):

    try:
      response=self.model.generate_content(prompt)

      return response.text
    
    except Exception as e:
      return f"Gemini Error: {e}"
  