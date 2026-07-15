// src/components/ChatWidget.jsx
import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi there! I'm David's AI clone. Ask me anything you'd like to know!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatBottomRef = useRef(null);

  // Automatically scrolls the window down when a new text bubble appears
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // 1. Append user bubble to UI
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // 2. Fetch connection to your custom proxy Express server
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Append Gemini response bubble to UI
        setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
      } else {
        // Handle rate-limits or server issues cleanly
        setMessages((prev) => [...prev, { role: 'model', text: data.error || "Connection error. Please try again." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'model', text: "Couldn't reach David's server. Make sure the backend is running!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-wrapper">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button className="chat-trigger-btn" onClick={() => setIsOpen(true)}>
          💬 Chat with David AI
        </button>
      )}

      {/* Expanded Interactive Window Container */}
      {isOpen && (
        <div className="chat-window animate-popup">
          <div className="chat-header">
            <div className="header-profile">
              <div className="online-indicator"></div>
              <div>
                <h4>David AI Clone</h4>
                <span>Gemini Powered</span>
              </div>
            </div>
            <button className="close-chat-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          {/* Messages Flow Area */}
          <div className="chat-messages-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-bubble-row ${msg.role}`}>
                <div className="bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Loader Indicator */}
            {isLoading && (
              <div className="message-bubble-row model">
                <div className="bubble loading-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* User Input Input Tray Form */}
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder="Ask about my projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
