"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, MessageCircle } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome messages
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hi there! I am SpirytBot, your Spiryt virtual assistant. How can we help you today?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, []);

  // Scroll to bottom on message updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const whatsappMessage = encodeURIComponent(
    `Hello Spiryt! I visited your website and would like to get a free consultation for our project.`
  );
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${AGENCY_CONFIG.whatsapp}&text=${whatsappMessage}`;

  const handlePresetClick = (text: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMsg: ChatMessage = { sender: "user", text, time };
    setMessages((prev) => [...prev, userMsg]);

    // Bot responds
    setTimeout(() => {
      let replyText = "";
      if (text.includes("Service Pricing")) {
        replyText = "Our packages start as low as ₹8,000 for standard websites and ₹25,000 for full-fledged MERN stack apps. Let's schedule a call to get you a custom quote!";
      } else if (text.includes("Web Developers in Vizag")) {
        replyText = "Spiryt has MERN Stack developers based directly in Vizag and Rajam! We can build premium Next.js solutions or schedule an in-person meeting.";
      } else {
        replyText = "Absolutely! Our student team specializes in custom web development, SEO and AI integrations. What business are you running?";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = { sender: "user", text: inputText, time };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for reaching out! A representative from our student core team will message you back shortly. For immediate support, please click the floating WhatsApp button.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 select-none font-sans">
      
      {/* Live Chat Panel */}
      {chatOpen && (
        <div className="w-[330px] sm:w-[360px] h-[450px] rounded-3xl glass shadow-2xl border border-border/80 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          
          {/* Chat Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  S
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-primary rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Spiryt Live Help</h4>
                <p className="text-[10px] text-white/80">Active now • Student Entrepreneurs</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] flex flex-col gap-1 ${
                  msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                }`}
              >
                <div
                  className={`px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-slate-100 dark:bg-slate-900 text-foreground rounded-tl-none border border-border/40"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-muted px-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Buttons */}
          <div className="px-4 py-2 border-t border-border/40 flex flex-wrap gap-1.5 bg-slate-50/50 dark:bg-slate-950/20">
            <button
              onClick={() => handlePresetClick("What is your Service Pricing?")}
              className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-white dark:bg-slate-900 text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
            >
              Service Pricing?
            </button>
            <button
              onClick={() => handlePresetClick("Are you Web Developers in Vizag?")}
              className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-white dark:bg-slate-900 text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer"
            >
              Vizag Developers?
            </button>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendCustom} className="p-3 border-t border-border/40 flex items-center gap-2 bg-white dark:bg-slate-950">
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-border bg-slate-50 dark:bg-slate-900 text-foreground focus:outline-none focus:border-primary transition-all"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-primary hover:bg-primary-hover text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Send Message"
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex flex-col gap-2.5 items-end">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} className="fill-white stroke-none" />
          <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-[10px] font-semibold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Live Chat Action Toggle */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Toggle Live Chat"
        >
          <MessageSquare size={20} />
          <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-[10px] font-semibold py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Interactive Live Chat
          </span>
        </button>
      </div>

    </div>
  );
}
