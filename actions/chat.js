"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function getChatReply(userMessage) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  if (typeof userMessage !== "string" || userMessage.trim() === "") {
    throw new Error("Invalid request: Missing message content.");
  }


  
  // Get Gemini reply
  const result = await model.generateContent(userMessage);
  const geminiReply = result.response.text().trim();
  
  // Store bot reply
  await db.chatMessage.create({
    data: {
      userId,
      sender: "BOT",
      content: geminiReply,
    },
  });
  
  // Store user message
  await db.chatMessage.create({
    data: {
      userId,
      sender: "USER",
      content: userMessage,
    },
  });
  return geminiReply;
}

export async function getPreviousMessages() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const messages = await db.chatMessage.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });

  return messages;
}
