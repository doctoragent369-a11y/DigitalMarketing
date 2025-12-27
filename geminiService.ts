
import { GoogleGenAI } from "@google/genai";

// Use this function to generate marketing advice using Gemini API
export const getAIResponse = async (prompt: string): Promise<string> => {
  // Always use a named parameter to initialize the client with process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "شما یک کارشناس خبره دیجیتال مارکتینگ هستید. به زبان فارسی صمیمی و حرفه‌ای پاسخ دهید. به سوالات کاربران در مورد سئو، تبلیغات و رشد کسب و کار کمک کنید.",
        temperature: 0.7,
      },
    });
    // Access the .text property directly from the response object
    return response.text || "متأسفانه پاسخی دریافت نشد.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "خطایی در برقراری ارتباط با هوش مصنوعی رخ داده است.";
  }
};