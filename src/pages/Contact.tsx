import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Users, Award, Shield } from 'lucide-react';
import { useSecurityContext } from '../components/SecurityProvider';

const Contact = () => {
  const { sanitizeInput, validateEmail, validatePhone } = useSecurityContext();
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);

    try {
      const formBody = new FormData();
      
      // Encode contact form data
      const encodedData = {
        name: btoa(contactForm.name),
        email: btoa(contactForm.email),
        phone: btoa(contactForm.phone),
        subject: btoa(contactForm.subject),
        message: btoa(contactForm.message)
      };
      
      formBody.append('entry.2005620554', encodedData.name);
      formBody.append('entry.1045781291', encodedData.email);
      formBody.append('entry.1166974658', encodedData.phone);
      formBody.append('entry.839337160', encodedData.subject);
      formBody.append('entry.579193655', encodedData.message);

      // Obfuscated contact form URL
      const contactFormUrl = atob('aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZVNPbTFINTlvbUtlYTNFVV93RE14ZGNLWjREYUtJSFdsc09xaXQyNjNXeWFTaW5nL2Zvcm1SZXNwb25zZQ==');
      
      await fetch(contactFormUrl, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });

      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 5000);
    } catch (error) {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setContactForm(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold gradient-text-pharma mb-3">Get In Touch</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Connect with our pharmaceutical experts for wholesale inquiries, partnership opportunities, 
            or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-slide-right">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-neutral-800 mb-6 text-center">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-200">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Phone Support</h3>
                    <p className="text-primary-600 font-semibold">+9188248 01254</p>
                    <p className="text-xs text-neutral-500">24/7 Order Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary-50 transition-all duration-200">
                  <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Email Support</h3>
                    <p className="text-secondary-600 font-semibold">nikssaini05@gmail.com</p>
                    <p className="text-xs text-neutral-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent-50 transition-all duration-200">
                  <div className="bg-gradient-to-r from-accent-600 to-accent-700 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Main Office</h3>
                    <p className="text-accent-600 font-semibold">123 Pharma District</p>
                    <p className="text-neutral-600 text-sm">Medical City, MC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-200">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800">Business Hours</h3>
                    <p className="text-neutral-600 text-sm">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-neutral-600 text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 text-center">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 text-left backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <div>
                      <div className="font-semibold text-sm">Call Now</div>
                      <div className="text-xs opacity-90">+9188248 01254</div>
                    </div>
                  </div>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg transition-all duration-200 text-left backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <div>
                      <div className="font-semibold text-sm">Live Chat</div>
                      <div className="text-xs opacity-90">Available 24/7</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-bold text-neutral-800 mb-3 text-center text-sm">Why Choose Us?</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-neutral-700">FDA Licensed & Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-neutral-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-neutral-700">1200+ Pharmacy Partners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-left">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">Message Sent Successfully! 🎉</h3>
                  <p className="text-neutral-600 mb-4">
                    Thank you for contacting Premium Pharma. We'll get back to you within 2-4 hours.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2 text-sm">What happens next?</h4>
                    <ul className="text-xs text-blue-700 space-y-1 text-left max-w-sm mx-auto">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>Team reviews message within 2 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>Detailed response via email</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>Follow-up call if requested</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 secure-input"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 secure-input"
                        placeholder="your.email@pharmacy.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 secure-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="wholesale-inquiry">Wholesale Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Customer Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 secure-input"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 disabled:opacity-50 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-left">
              <div className="p-4">
                <h2 className="text-lg font-bold text-neutral-800 mb-2 text-center">Visit Our Location</h2>
                <p className="text-neutral-600 mb-3 text-center text-sm">
                  Visit our distribution center or use this location for GPS navigation.
                </p>
              </div>
              <div className="h-64 bg-neutral-200 flex items-center justify-center relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0059700!3d40.7128000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Premium Pharma Wholesale Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;