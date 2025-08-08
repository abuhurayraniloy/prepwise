// app/(main)/chat-bot/ChatPage.jsx

"use client";

import { useState, useEffect } from "react";
import ChatInput from "./_components/ChatInput";
import MessageList from "./_components/MessageList";
import { getChatReply, getPreviousMessages } from "@/actions/chat";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load previous messages for the logged-in user
  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const initialMessages = await getPreviousMessages(); // No chatId passed
        const formattedMessages = initialMessages.map((msg) => ({
          id: msg.id,
          text: msg.content,
          sender: msg.sender === "BOT" ? "bot" : "user",
        }));
        setMessages(formattedMessages);
      } catch (err) {
        console.error("Failed to load previous messages:", err);
        setError("Could not load chat history. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, []);

  const handleSendMessage = async (input) => {
    if (!input.trim()) return;

    const newUserMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const geminiReply = await getChatReply( input); // No chatId passed
      const botMessage = {
        id: Date.now() + 1,
        text: geminiReply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Gemini error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="flex h-full w-full max-w-4xl flex-col rounded-xl bg-white shadow-xl dark:bg-slate-950">
        <div className="p-4 text-center text-lg font-semibold text-slate-800 border-b border-slate-300 dark:text-white dark:border-slate-700">
          Chat with Gemini
        </div>
        {messages.length === 0 && !isLoading ? (
          <div className="p-4 text-center text-slate-500 h-full">
            No messages yet. Start the conversation!
          </div>
        ) : (
          <MessageList messages={messages} isLoading={isLoading} />
        )}

        {error && (
          <div className="p-4 text-center text-red-500">{error}</div>
        )}

        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </main>
  );
}
