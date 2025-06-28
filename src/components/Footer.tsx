import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Pill, Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold">Premium Pharma</h3>
                <p className="text-xs text-neutral-400">Wholesale Solutions</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Your trusted partner for pharmaceutical wholesale distribution. 
              Licensed, reliable, and committed to serving healthcare providers nationwide.
            </p>
            <div className="flex space-x-3">
              <div className="flex items-center space-x-1 text-xs text-neutral-400">
                <Shield className="w-3 h-3" />
                <span>FDA Licensed</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-neutral-400">
                <Award className="w-3 h-3" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Wholesale Order', href: '/wholesale-order' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-base font-semibold mb-3">Legal & Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/licensing" 
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Licensing Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-xs text-neutral-300">Phone</p>
                  <p className="text-sm text-white">+9188248 01254</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-xs text-neutral-300">Email</p>
                  <p className="text-sm text-white">nikssaini05@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-xs text-neutral-300">Address</p>
                  <p className="text-sm text-white">123 Pharma District, Medical City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400" />
                <div>
                  <p className="text-xs text-neutral-300">Business Hours</p>
                  <p className="text-sm text-white">Mon-Fri: 8AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-neutral-800 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm text-neutral-400">
                © {currentYear} Premium Pharma Wholesale Solutions. All rights reserved.
              </p>
              <p className="text-sm text-neutral-400">
                Developed by{' '}
                <a
                  href="https://github.com/niksdev1254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline"
                >
                  Naresh Kumar Saini
                </a>
              </p>
            </div>

            <div className="flex space-x-4 mt-3 sm:mt-0">
              <Link to="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/licensing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Licensing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
