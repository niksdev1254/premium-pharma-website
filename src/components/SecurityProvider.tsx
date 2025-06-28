import React, { createContext, useContext, useEffect, useState } from 'react';

interface SecurityContextType {
  isSecure: boolean;
  csrfToken: string;
  sanitizeInput: (input: string) => string;
  validateEmail: (email: string) => boolean;
  validatePhone: (phone: string) => boolean;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Generate CSRF token
    const token = generateCSRFToken();
    setCsrfToken(token);
    
    // Check if connection is secure
    setIsSecure(window.location.protocol === 'https:' || window.location.hostname === 'localhost');
    
    // Security headers check
    checkSecurityHeaders();
    
    // Disable right-click and F12 in production only
    if (process.env.NODE_ENV === 'production') {
      const handleContextMenu = (e: MouseEvent) => e.preventDefault();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault();
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  const generateCSRFToken = (): string => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    // Fallback for environments without crypto API
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const checkSecurityHeaders = () => {
    // Basic security checks with error handling
    try {
      if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Crypto API not available - using fallback for token generation');
        }
      }
    } catch (error) {
      // Silent error handling in production
      if (process.env.NODE_ENV === 'development') {
        console.warn('Security check failed:', error);
      }
    }
  };

  const sanitizeInput = (input: string): string => {
    if (typeof input !== 'string') return '';
    
    // Enhanced XSS prevention
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '')
      .trim();
  };

  const validateEmail = (email: string): boolean => {
    if (typeof email !== 'string') return false;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  const validatePhone = (phone: string): boolean => {
    if (typeof phone !== 'string') return false;
    
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const value: SecurityContextType = {
    isSecure,
    csrfToken,
    sanitizeInput,
    validateEmail,
    validatePhone,
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;