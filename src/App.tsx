import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallbackWidget from './components/CallbackWidget';
import SecurityProvider from './components/SecurityProvider';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const WholesaleOrder = React.lazy(() => import('./pages/WholesaleOrder'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Licensing = React.lazy(() => import('./pages/Licensing'));

// Enhanced loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-neutral-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
    <div className="text-center p-8 max-w-md">
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Oops! Something went wrong</h2>
      <p className="text-neutral-600 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
      <button 
        onClick={resetErrorBoundary}
        className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <SecurityProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          <Header />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wholesale-order" element={<WholesaleOrder />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/licensing" element={<Licensing />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          
          {/* Floating Widgets */}
          <div className="no-print">
            <WhatsAppButton />
            <CallbackWidget />
          </div>
          
          {/* Status Indicator */}
          <div className="fixed top-20 right-4 z-30 max-w-sm hidden xl:block no-print">
            <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-neutral-800">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </SecurityProvider>
  );
}

export default App;