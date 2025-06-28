/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        // Primary colors
        'from-primary-600',
        'to-primary-700',
        'bg-primary-600',
        'text-primary-600',
        'border-primary-600',
        'bg-primary-50',
        'text-primary-800',
        'bg-primary-100',
        'hover:bg-primary-50',
        'hover:text-primary-600',
        'focus:ring-primary-500',
        'focus:border-primary-500',
        
        // Secondary colors
        'from-secondary-600', 
        'to-secondary-700',
        'bg-secondary-600',
        'text-secondary-600',
        'border-secondary-600',
        'bg-secondary-50',
        'text-secondary-800',
        'bg-secondary-100',
        
        // Accent colors
        'from-accent-600',
        'to-accent-700',
        'bg-accent-600',
        'text-accent-600',
        'border-accent-600',
        'bg-accent-50',
        'text-accent-800',
        'bg-accent-100',
        
        // Color variations for dynamic classes
        'bg-red-100', 'text-red-600', 'text-red-800', 'bg-red-50',
        'bg-blue-100', 'text-blue-600', 'text-blue-800', 'bg-blue-50',
        'bg-green-100', 'text-green-600', 'text-green-800', 'bg-green-50',
        'bg-purple-100', 'text-purple-600', 'text-purple-800', 'bg-purple-50',
        'bg-indigo-100', 'text-indigo-600', 'text-indigo-800', 'bg-indigo-50',
        'bg-orange-100', 'text-orange-600', 'text-orange-800', 'bg-orange-50',
        'bg-yellow-100', 'text-yellow-600', 'text-yellow-800', 'bg-yellow-50',
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'slide-right': 'slideRight 0.2s ease-out',
        'slide-left': 'slideLeft 0.2s ease-out',
        'pulse-soft': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translate3d(-10px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translate3d(10px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      maxWidth: {
        '6xl': '72rem',
      }
    },
  },
  plugins: [],
  // Optimize for production
  corePlugins: {
    preflight: true,
  },
};