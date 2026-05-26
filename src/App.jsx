import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Customers } from './pages/Customers';
import { Company } from './pages/Company';
import { SentrahSplashScreen } from './components/common/SentrahSplashScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  // Prevent scrolling while splash screen is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  // Unified callback to handle tab clicks and auto-reset scrollbars
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showSplash && (
        <SentrahSplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <div className="min-h-screen bg-[#FAF9F6] text-[#0A2540] selection:bg-[#0A2540] selection:text-white antialiased font-sans">
        {/* Sticky B2B Header Navbar */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Dynamic Viewport Mount */}
        <main>
          {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
          {currentPage === 'platform' && <Platform onNavigate={handleNavigate} />}
          {currentPage === 'solutions' && <Solutions onNavigate={handleNavigate} />}
          {currentPage === 'customers' && <Customers onNavigate={handleNavigate} />}
          {currentPage === 'company' && <Company onNavigate={handleNavigate} />}
        </main>

        {/* Structured Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}

export default App;
