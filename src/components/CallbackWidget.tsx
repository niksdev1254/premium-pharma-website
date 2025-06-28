import React, { useState, memo } from 'react';
import { Phone, X } from 'lucide-react';

const CallbackWidget = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', preferredTime: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-xl border border-neutral-200 p-4 w-72 max-w-[calc(100vw-2rem)] z-50 animate-fade-in">
        <div className="text-center">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Phone className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-semibold text-neutral-800 mb-1 text-sm">Request Received!</h3>
          <p className="text-xs text-neutral-600">
            We'll call you back within 30 minutes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-16 left-4 bg-white rounded-lg shadow-xl border border-neutral-200 w-72 max-w-[calc(100vw-2rem)] z-50 animate-slide-up">
          <div className="bg-primary-600 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <div>
                <h3 className="font-semibold text-xs">Request a Call Back</h3>
                <p className="text-xs opacity-90">We'll call within 30 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-700 rounded transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            >
              <option value="">Preferred Time</option>
              <option value="morning">Morning (9-12 PM)</option>
              <option value="afternoon">Afternoon (12-5 PM)</option>
              <option value="evening">Evening (5-8 PM)</option>
              <option value="anytime">Anytime</option>
            </select>
            
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Request Call Back
            </button>
          </form>
        </div>
      )}

      <div className="fixed bottom-16 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 text-white px-3 py-2 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-150 text-xs font-medium flex items-center space-x-1"
          aria-label="Request a call back"
        >
          <Phone className="w-3 h-3" />
          <span>Call Me</span>
        </button>
      </div>
    </>
  );
});

CallbackWidget.displayName = 'CallbackWidget';

export default CallbackWidget;