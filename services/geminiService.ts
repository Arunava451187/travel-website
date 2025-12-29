
import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly as a named parameter in the GoogleGenAI constructor.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelRecommendations = async (preferences: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 luxury travel experiences specifically in Digha, Puri, Mandarmani, Darjeeling, or Purulia based on these preferences: ${preferences}. Format the output as a JSON array of objects with 'name', 'description', and 'reasoning' keys.`,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    const jsonStr = response.text || '[]';
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};

export const chatWithAssistant = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are an elite travel concierge for DreamTrips, specializing EXCLUSIVELY in five destinations: Digha, Puri, Mandarmani, Darjeeling, and Purulia. You are knowledgeable about local traditions, best local foods (like Darjeeling momos or Puri khaja), specific travel logistics (like the best time to drive on Mandarmani beach), and hidden gems in the Ajodhya Hills of Purulia. Always be polite, sophisticated, and helpful. If a user asks about other places, gently steer them back to these five fantastic destinations.',
      }
    });
    
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm sorry, I'm having trouble connecting to my local travel database. How else can I assist you with your Digha, Puri, or Darjeeling plans?";
  }
};
