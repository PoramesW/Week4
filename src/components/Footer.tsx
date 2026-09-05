import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

/**
 * Footer Component using Bootstrap 5
 * Consistent across all 5 pages with website metadata, navigation shortcuts, and copyright
 */
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-secondary-subtle" id="main-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Column 1: Website Info */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <i className="bi bi-music-note-list text-white"></i>
              </span>
              <h5 className="mb-0 fw-bold">My Interest Website | J-Pop</h5>
            </div>
            <p className="text-secondary small mb-3 lh-base">
              เว็บไซต์แนะนำศิลปินเพลงญี่ปุ่น (J-Pop) ที่ชื่นชอบและฟังจริง จัดทำขึ้นเพื่อการศึกษาและการนำเสนอผลงาน โดยประยุกต์ใช้ HTML5, CSS3 และ Bootstrap 5 Responsive Framework
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-secondary-subtle text-dark border">Bootstrap 5.3</span>
              <span className="badge bg-secondary-subtle text-dark border">HTML5 / CSS3</span>
              <span className="badge bg-secondary-subtle text-dark border">Responsive Web Design</span>
            </div>
          </div>

          {/* Column 2: Quick Links to All 5 Pages */}
          <div className="col-6 col-md-3 offset-md-1">
            <h6 className="text-uppercase fw-bold text-light mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
              Quick Navigation
            </h6>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
              <li>
                <button
                  type="button"
                  className="btn btn-link text-secondary text-decoration-none p-0 text-start hover-link"
                  onClick={() => onNavigate('home')}
                >
                  <i className="bi bi-chevron-right me-1 text-primary"></i>
                  Home (หน้าหลัก)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-secondary text-decoration-none p-0 text-start hover-link"
                  onClick={() => onNavigate('yoasobi')}
                >
                  <i className="bi bi-chevron-right me-1 text-primary"></i>
                  YOASOBI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-secondary text-decoration-none p-0 text-start hover-link"
                  onClick={() => onNavigate('lisa')}
                >
                  <i className="bi bi-chevron-right me-1 text-danger"></i>
                  LiSA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-secondary text-decoration-none p-0 text-start hover-link"
                  onClick={() => onNavigate('back-number')}
                >
                  <i className="bi bi-chevron-right me-1 text-warning"></i>
                  back number
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-secondary text-decoration-none p-0 text-start hover-link"
                  onClick={() => onNavigate('luna-haruna')}
                >
                  <i className="bi bi-chevron-right me-1 text-info"></i>
                  Luna Haruna
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Assignment & Academic Notes */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold text-light mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
              Assignment Context
            </h6>
            <div className="card bg-black bg-opacity-25 border-secondary-subtle p-3 text-secondary small">
              <div className="fw-semibold text-light mb-1">
                <i className="bi bi-journal-code me-1 text-info"></i>
                Web Development Project
              </div>
              <div className="small text-white-50">
                หัวข้อ: “My Interest Website with Bootstrap 5”
              </div>
              <div className="small text-white-50 mt-1">
                จำนวนหน้า: 5 หน้าหลัก
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Copyright & Bottom Bar */}
        <div className="row align-items-center small text-secondary">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            © {new Date().getFullYear()} My Interest Website | J-Pop. All rights reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span>Designed with modern J-Pop aesthetics & Bootstrap 5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
