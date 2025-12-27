
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { getAIResponse } from '../geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'سلام! من دستیار هوشمند شما در دیجی مدرن هستم. چطور می‌توانم در مورد استراتژی‌های رشد به شما کمک کنم؟' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="neumorph-btn bg-blue-600 text-white p-5 rounded-[2rem] shadow-2xl hover:bg-blue-700 transition-all group active:scale-90 flex items-center gap-3"
        >
          <span className="font-black text-sm mr-2 hidden md:block">مشاوره هوشمند</span>
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      ) : (
        <div className="glass-card w-[400px] max-w-[calc(100vw-40px)] h-[600px] rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-20 duration-500">
          {/* Header */}
          <div className="bg-slate-900/10 p-6 flex justify-between items-center border-b border-white/20">
            <div className="flex items-center space-x-reverse space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-slate-900">دستیار رشد دیجی مدرن</div>
                <div className="flex items-center gap-1 text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Powered by Gemini 2.0</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white/60 backdrop-blur-sm text-slate-800 border border-white/80 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-end">
                <div className="bg-white/40 backdrop-blur p-4 rounded-3xl animate-pulse flex gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/20">
            <div className="neumorph-inset flex items-center gap-3 p-2 rounded-[2rem] bg-white/20">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="چطور می‌توانم کمک کنم؟"
                className="flex-1 bg-transparent border-none px-6 py-3 text-sm focus:ring-0 outline-none text-slate-800 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-blue-600 disabled:opacity-30 disabled:grayscale transition-all active:scale-90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
