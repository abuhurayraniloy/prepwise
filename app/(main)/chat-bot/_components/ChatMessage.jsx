import React from 'react';
import clsx from 'clsx';
import Image from 'next/image'; // For user/bot avatars

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div
      className={clsx('flex items-start gap-3', {
        'justify-end': isUser,
      })}
    >
      {!isUser && (
        <Image
          src="/bot-avatar.png" // Replace with your bot's avatar
          alt="Bot Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <div
        className={clsx(
          'max-w-md rounded-2xl px-4 py-3 text-white',
          {
            'bg-blue-600 rounded-br-none': isUser,
            'bg-gray-700 rounded-bl-none': !isUser,
          }
        )}
      >
        <p className="text-sm">{message.text}</p>
      </div>
      {isUser && (
        <Image
          src="/user-avatar.jpg" // Replace with your user's avatar
          alt="User Avatar"
          width={70}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default ChatMessage;