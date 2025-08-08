'use client';

import React, { useState } from 'react';

const SendIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11L12 6L17 11M12 18V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Send message on Enter, but allow new lines with Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full items-center rounded-b-xl border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
    >
      <textarea
        className="flex-1 resize-none border-0 bg-transparent p-2 text-slate-900 placeholder-slate-400 focus:ring-0 dark:text-white"
        placeholder="Type your message..."
        rows="1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="flex h-10 w-10 items-center ml-5 justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatInput;