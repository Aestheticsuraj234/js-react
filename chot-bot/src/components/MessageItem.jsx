import React from "react";

import { Bot, User } from "lucide-react";


const MessageItem = ({ message }) => {
  const isAI = message.role === "ai";

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(message.timestamp);

  return (
    <div
      className={`flex gap-3 p-4 ${
        isAI
          ? "bg-indigo-50 dark:bg-indigo-950/30"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex-shrink-0">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isAI
              ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-200"
              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-800 dark:text-emerald-200"
          }`}
        >
          {isAI ? <Bot size={18} /> : <User size={18} />}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
            {isAI ? "AI Assistant" : "You"}{" "}
          </span>
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            {formattedTime}
          </span>
        </div>
         <div className="prose prose-sm dark:prose-invert max-w-none">
          {message.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-2 last:mb-0 text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
