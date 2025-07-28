import { GoogleGenerativeAI } from "@google/generative-ai";

//
const API_KEY = "AIzaSyCuZWL4dgJh6qKVrQguSVPOIfaURk7sYcw";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({model:"gemini-2.0-flash"});


export const getChatResponse = async (message)=>{
    try {
           const history = message
      .filter((msg) => msg.role !== "system")
      .map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      const chatHistory =history.slice(0 ,  -1);

      const latestUserMessage = history[history.length - 1];

    //   start a chat session with the chat history
     const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(latestUserMessage.parts[0].text);

    const response = result.response;

    return response.text()
    } catch (error) {
          console.error("Error fetching chat response:", error);
    throw new Error("Failed to fetch chat response");
    }
}

export const checkApiKey = () => {
  if (!API_KEY || API_KEY === "") {
    return false;
  }
  return true;
};