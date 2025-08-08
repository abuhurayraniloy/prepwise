'use client';

import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const MessageList = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="typing-indicator">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;