import os from "os";
import { Bot } from "lucide-react";

export default function ChatBot() {
  const handleClick = async () => {};

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div
        className={`flex items-center justify-center w-12 h-12 mb-5 mr-5 shadow text-primary transition-all duration-300 ease-in-out bg-gray-900 rounded-full cursor-pointer `}
      >
        <Bot size={24} onClick={() => handleClick()} />
      </div>
    </div>
  );
}
