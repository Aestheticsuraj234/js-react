import React from "react";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import { ChatProvider } from "./context/ChatContext";
import MessageInput from "./components/MessageInput";

const App = () => {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-900">
          <Header />
          <main className="flex-1 overflow-hidden flex flex-col max-w-7xl w-full mx-auto">
            <MessageList />
            <MessageInput/>
          </main>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--toaster-bg, #fff)",
                color: "var(--toaster-color, #333)",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              },
            }}
          />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
};

export default App;
