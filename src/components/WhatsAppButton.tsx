import React, { useState, memo } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919188248012";
  
  const quickMessages = [
    "Hi, I need help with wholesale pricing",
    "I want to place a bulk order",
    "Can you provide product availability?",
    "I need delivery information",
  ];

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl border border-neutral-200 w-72 max-w-[calc(100vw-2rem)] z-50 animate-slide-up">
          <div className="bg-green-600 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <div>
                <h3 className="font-semibold text-xs">WhatsApp Support</h3>
                <p className="text-xs opacity-90">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-green-700 rounded transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          
          <div className="p-3">
            <p className="text-xs text-neutral-600 mb-3">
              Hi there! 👋 How can we help you with your wholesale pharmacy needs?
            </p>
            
            <div className="space-y-2">
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(message)}
                  className="w-full text-left p-2 text-xs bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors border border-neutral-200"
                >
                  {message}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handleQuickMessage("Hello, I need assistance with my wholesale pharmacy order.")}
              className="w-full mt-3 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-150 z-40"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>
    </>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;