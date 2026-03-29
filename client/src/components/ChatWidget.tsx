import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chat-widget">
      {open && (
        <div className="mb-4 w-[340px] bg-white rounded-2xl shadow-2xl border overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="hero-gradient p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">Chat with us</h3>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors" data-testid="button-close-chat">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/80 text-sm">We typically reply within a few minutes</p>
          </div>
          {/* Messages area */}
          <div className="p-4 h-[260px] flex flex-col justify-end">
            <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 text-sm mb-3 max-w-[85%]">
              <p className="font-medium text-navy text-xs mb-1">New You Team</p>
              <p>Hi there! 👋 Thanks for visiting New You Surgical Weight Loss. How can we help you today?</p>
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3 text-sm max-w-[85%]">
              <p className="font-medium text-navy text-xs mb-1">New You Team</p>
              <p>Feel free to ask about procedures, insurance, or scheduling a consultation!</p>
            </div>
          </div>
          {/* Input */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-magenta/30 transition-all"
                data-testid="input-chat-message"
              />
              <button className="bg-magenta hover:bg-magenta-light text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0" data-testid="button-send-chat">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 ${open ? "bg-navy" : "bg-magenta hover:bg-magenta-light"}`}
        data-testid="button-toggle-chat"
        aria-label="Chat with us"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
}
