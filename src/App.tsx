import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ArtistPage } from './components/ArtistPage';

/**
 * Main Application Component
 * "My Interest Website | J-Pop"
 * Implements client-side routing across all 5 required pages:
 * 1. Home
 * 2. YOASOBI
 * 3. LiSA
 * 4. back number
 * 5. Luna Haruna
 */
export default function App() {
  // Read initial page from hash if available
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'yoasobi', 'lisa', 'back-number', 'luna-haruna'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Sync state with URL hash for browser history & bookmarks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'yoasobi', 'lisa', 'back-number', 'luna-haruna'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" id="app-root">
      {/* Bootstrap 5 Navbar across all pages */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Semantic Main Content Area */}
      <main id="main-content" className="flex-grow-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'yoasobi' && <ArtistPage artistId="yoasobi" onNavigate={handleNavigate} />}
        {currentPage === 'lisa' && <ArtistPage artistId="lisa" onNavigate={handleNavigate} />}
        {currentPage === 'back-number' && <ArtistPage artistId="back-number" onNavigate={handleNavigate} />}
        {currentPage === 'luna-haruna' && <ArtistPage artistId="luna-haruna" onNavigate={handleNavigate} />}
      </main>

      {/* Bootstrap 5 Footer across all pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
