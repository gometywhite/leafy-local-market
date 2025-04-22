
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const dummyBotReplies = [
  "Hi there! Looking for fresh produce?",
  "I'm GreenThumb Bot 🌱. How can I help?",
  "Check out the map to find local sellers!",
  "We're here to help you connect with gardeners.",
  "Try searching for your favorite veggies."
];

export const Chatbox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome to GreenThumb! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages([...messages, { from: "user", text: trimmed }]);
    setInput("");
    // Simulate bot reply
    setTimeout(() => {
      const reply = dummyBotReplies[Math.floor(Math.random() * dummyBotReplies.length)];
      setMessages(m => [...m, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end">
      {open && (
        <Card className="w-80 shadow-xl animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between p-3 bg-green-DEFAULT rounded-t-lg">
            <div className="flex items-center space-x-2 text-white">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold font-sans text-base">Chat with GreenThumb</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-green-light hover:text-green-DEFAULT"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </Button>
          </CardHeader>
          <CardContent className="p-3 h-72 max-h-72 overflow-y-auto bg-white">
            <div className="flex flex-col gap-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      px-3 py-2 rounded-lg 
                      ${msg.from === "user" 
                        ? "bg-green-light text-green-DEFAULT self-end" 
                        : "bg-gray-100 text-gray-700 self-start"
                      } 
                      max-w-[70%] text-sm shadow
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t bg-gray-50">
            <form className="flex w-full gap-2" onSubmit={sendMessage}>
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-grow bg-white"
                placeholder="Type your message…"
                autoComplete="off"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-green-DEFAULT hover:bg-green-light text-white"
                disabled={!input.trim()}
              >
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
      {!open && (
        <Button
          className="rounded-full bg-green-DEFAULT hover:bg-green-light w-14 h-14 shadow-lg flex items-center justify-center animate-fade-in"
          aria-label="Open Chatbox"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>
      )}
    </div>
  );
}
