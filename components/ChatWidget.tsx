"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ApiError, sendChatMessage } from "@/lib/api-client";

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

const BUBBLE = "max-w-[80%] rounded-[14px] px-3.5 py-2.5 text-[0.9rem] leading-[1.4]";
const USER_BUBBLE = `${BUBBLE} rounded-br-sm bg-accent text-white`;
const MODEL_BUBBLE = `${BUBBLE} rounded-bl-sm border border-line bg-surface text-ink`;

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "model", text: "Hi there! I'm David's AI clone. Ask me anything you'd like to know!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scrolls the window down when a new bubble appears
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const reply = await sendChatMessage(userMessage);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      const text =
        error instanceof ApiError
          ? error.message
          : "Couldn't reach David's server. Make sure the backend is running!";
      setMessages((prev) => [...prev, { role: "model", text }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[1000] max-[480px]:bottom-5 max-[480px]:right-5">
      {!isOpen && (
        <button
          className="rounded-[30px] bg-accent px-6 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(99,102,241,0.3)] transition-all duration-[250ms] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(99,102,241,0.45)]"
          onClick={() => setIsOpen(true)}
        >
          💬 Chat with David AI
        </button>
      )}

      {isOpen && (
        <div className="flex h-[480px] w-[360px] animate-slide-up-fade flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-[480px]:w-[calc(100vw-40px)]">
          <div className="flex items-center justify-between border-b border-line bg-surface p-4">
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <div>
                <h4 className="text-[0.95rem] font-semibold text-ink">David AI Clone</h4>
                <span className="text-xs text-muted">AI Powered</span>
              </div>
            </div>
            <button
              className="text-2xl text-muted"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-bg p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={message.role === "user" ? USER_BUBBLE : MODEL_BUBBLE}>
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex w-full justify-start">
                <div className={`${MODEL_BUBBLE} font-bold`}>
                  <span className="animate-blink">.</span>
                  <span className="animate-blink [animation-delay:0.2s]">.</span>
                  <span className="animate-blink [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex border-t border-line bg-surface p-2.5">
            <input
              id="chat-message-input"
              name="message"
              type="text"
              placeholder="Ask about my projects..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isLoading}
              className="flex-1 rounded-[10px] border border-line bg-bg px-3.5 py-2.5 text-[0.9rem] text-ink outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-3.5 font-semibold text-accent disabled:cursor-default disabled:text-muted"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
