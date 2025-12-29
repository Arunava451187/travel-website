
import { GoogleGenAI } from "@google/genai";

// Use a getter to initialize AI only when called, preventing crashes if key is missing during startup
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const chatWithAssistant = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  try {
    const ai = getAI();
    if (!ai) return "Hello! I am ready to help you plan your Digha, Puri, or Darjeeling trip. Please contact our human concierge at +91 8597504298 for immediate assistance.";

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are an elite travel concierge for DreamTrips, specializing EXCLUSIVELY in five destinations: Digha, Puri, Mandarmani, Darjeeling, and Purulia. You are knowledgeable about local traditions and hidden gems. Always mention the special family and friends offers. Your manager is available at birbhumboy28@gmail.com or WhatsApp +91 8597504298.',
      }
    });
    
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having a little trouble thinking right now. Please message us on WhatsApp at 8597504298 for expert travel advice!";
  }
};
