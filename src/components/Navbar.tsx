import React, { useState } from 'react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

/**
 * Navigation Bar Component using Bootstrap 5
 * Provides responsive navigation across all 5 pages: Home, YOASOBI, LiSA, back number, and Luna Haruna
 */
export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsNavCollapsed(true); // Auto close mobile menu after clicking
  };

  return (
    <header className="sticky-top">
      <nav 
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-2"
        id="main-navigation"
        aria-label="Main Navigation"
      >
        <div className="container">
          {/* Brand Logo & Title */}
          <button
            type="button"
            className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start"
            onClick={() => handleNavClick('home')}
            id="nav-brand-btn"
          >
            <span className="badge bg-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <i className="bi bi-disc text-white fs-6"></i>
            </span>
            <div>
              <span className="fw-bold text-dark d-block lh-1">My Interest Website</span>
              <small className="text-muted fw-semibold" style={{ fontSize: '0.75rem' }}>
                <i className="bi bi-music-note-beamed me-1 text-primary"></i>
                J-Pop Artist Recommendation
              </small>
            </div>
          </button>

          {/* Mobile Hamburger Toggle Button (Bootstrap 5) */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-controls="navbarNavDropdown"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            id="navbar-toggler-btn"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navigation Links */}
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 py-2 py-lg-0">
              {/* Home Link */}
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 text-start w-100 ${currentPage === 'home' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => handleNavClick('home')}
                  id="nav-link-home"
                >
                  <i className="bi bi-house-door me-1"></i>
                  Home
                </button>
              </li>

              {/* Divider for mobile */}
              <li className="d-lg-none my-1"><hr className="dropdown-divider" /></li>

              {/* Artist 1: YOASOBI */}
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 text-start w-100 ${currentPage === 'yoasobi' ? 'active fw-bold text-primary' : 'text-secondary'}`}
                  onClick={() => handleNavClick('yoasobi')}
                  id="nav-link-yoasobi"
                >
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle me-1" style={{ fontSize: '0.7rem' }}>Duo</span>
                  YOASOBI
                </button>
              </li>

              {/* Artist 2: LiSA */}
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 text-start w-100 ${currentPage === 'lisa' ? 'active fw-bold text-danger' : 'text-secondary'}`}
                  onClick={() => handleNavClick('lisa')}
                  id="nav-link-lisa"
                >
                  <span className="badge bg-danger-subtle text-danger border border-danger-subtle me-1" style={{ fontSize: '0.7rem' }}>Rock</span>
                  LiSA
                </button>
              </li>

              {/* Artist 3: back number */}
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 text-start w-100 ${currentPage === 'back-number' ? 'active fw-bold text-warning-emphasis' : 'text-secondary'}`}
                  onClick={() => handleNavClick('back-number')}
                  id="nav-link-back-number"
                >
                  <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle me-1" style={{ fontSize: '0.7rem' }}>Band</span>
                  back number
                </button>
              </li>

              {/* Artist 4: Luna Haruna */}
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 text-start w-100 ${currentPage === 'luna-haruna' ? 'active fw-bold text-info-emphasis' : 'text-secondary'}`}
                  onClick={() => handleNavClick('luna-haruna')}
                  id="nav-link-luna-haruna"
                >
                  <span className="badge bg-info-subtle text-info-emphasis border border-info-subtle me-1" style={{ fontSize: '0.7rem' }}>Pop</span>
                  Luna Haruna
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
