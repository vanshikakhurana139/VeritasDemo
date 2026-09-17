import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { initialChatMessages, quickPromptChips, cannedResponses, ChatMessage } from '../mockData/messages';
import {
  Mic,
  Send,
  Bot,
  User,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Volume2
} from 'lucide-react';

export const Screen15_MedicalChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: '07:46 PM'
    };

    const reply = cannedResponses[query] ||
      'Ensure the victim is in a safe environment. Check airway, breathing, and pulse. Call 108 for emergency paramedical support immediately.';

    const botMsg: ChatMessage = {
      id: `msg-${Date.now() + 1}`,
      sender: 'bot',
      text: reply,
      timestamp: '07:46 PM'
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue('');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      {/* Top Bar: Medical Assistant + Offline Badge */}
      <div className="p-3.5 pb-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#1B5E20] text-white flex items-center justify-center shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900 leading-tight">
              Pocket Medical Assistant
            </h2>
            <p className="text-[10px] text-gray-500">Edge AI Trauma Responder</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Offline</span>
        </span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-3.5 space-y-3 overflow-y-auto">
        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';
          return (
            <div
              key={msg.id}
              className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                  isBot
                    ? 'bg-gray-100 text-gray-800 rounded-tl-xs border border-gray-200/70'
                    : 'bg-[#1B5E20] text-white rounded-tr-xs shadow-xs'
                }`}
              >
                <p className="whitespace-pre-line font-medium">{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 font-mono ${
                    isBot ? 'text-gray-400' : 'text-emerald-200'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Question Chips */}
      <div className="px-3 pt-1 pb-2 border-t border-gray-100 bg-white">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
          Quick First-Aid Queries:
        </span>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {quickPromptChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleSend(chip)}
              className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E8F5E9] hover:bg-[#d4edd6] text-[#1B5E20] border border-green-200 whitespace-nowrap transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar with Mic Icon */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-1.5 shadow-2xs">
          <button className="p-2 text-gray-400 hover:text-emerald-700 transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask first-aid questions offline..."
            className="flex-1 text-xs bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
          />
          <button
            onClick={() => handleSend()}
            className="p-2 rounded-xl bg-[#1B5E20] text-white hover:bg-[#154a19] transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="alerts" />
    </div>
  );
};
