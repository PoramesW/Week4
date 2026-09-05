import React from 'react';
import { ARTIST_LIST } from '../data/artistsData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

/**
 * Home Page Component
 * Clean, minimal, and focused presentation featuring 4 Bootstrap cards for the selected J-Pop artists.
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-page-container">
      {/* 1. Hero / Introduction Section */}
      <section className="hero-section py-5 px-3 border-bottom bg-white" id="home-hero">
        <div className="container py-3">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              {/* Subtle J-Pop badge */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-dark text-white small shadow-sm">
                <i className="bi bi-headphones text-warning"></i>
                <span className="fw-semibold">Personal J-Pop Recommendation</span>
              </div>

              {/* Main Headline */}
              <h1 className="display-5 fw-bold text-dark mb-3 tracking-tight">
                My Interest Website <span className="text-primary">| J-Pop</span>
              </h1>

              {/* Japanese Subtitle */}
              <p className="fs-5 text-secondary fw-normal mb-3 jp-font">
                私のおすすめJ-POPアーティスト4選
              </p>

              {/* Short Intro Description */}
              <p className="lead text-muted fs-6 mb-0 px-lg-4">
                ยินดีต้อนรับสู่เว็บไซต์แนะนำศิลปินเพลงญี่ปุ่น (J-Pop) ที่ฉันชื่นชอบและฟังจริง นำเสนอประวัติ เอกลักษณ์ทางดนตรี และบทเพลงยอดนิยมของ 4 ศิลปินแถวหน้าแห่งแดนอาทิตย์อุทัย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Artists Section with Bootstrap 5 Responsive Grid Cards */}
      <section className="py-5 bg-light" id="featured-artists">
        <div className="container py-2">
          {/* Section Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 pb-2 border-bottom">
            <div>
              <span className="text-primary fw-bold text-uppercase small tracking-wide">Featured Artists</span>
              <h2 className="h3 fw-bold text-dark mb-1">ศิลปินที่แนะนำ (Recommended Artists)</h2>
              <p className="text-muted small mb-0">คลิกที่การ์ดเพื่อดูข้อมูลประวัติ สมาชิก และรายชื่อเพลงของแต่ละศิลปิน</p>
            </div>
            <div className="text-muted small mt-2 mt-md-0">
              <i className="bi bi-music-player me-1"></i> ทั้งหมด 4 ศิลปิน
            </div>
          </div>

          {/* 4 Bootstrap Cards Responsive Grid (2 columns on mobile -> 2x2 layout) */}
          <div className="row row-cols-2 row-cols-md-2 row-cols-xl-4 g-2 g-sm-3 g-xl-4" id="artist-cards-grid">
            {ARTIST_LIST.map((artist) => (
              <div key={artist.id} className="col">
                <article className={`card h-100 artist-card shadow-sm accent-border-${artist.id}`}>
                  {/* Card Image Wrapper */}
                  <div className="artist-img-wrapper position-relative">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="card-img-top"
                      loading="lazy"
                    />
                    {/* Dark gradient overlay for badge readability */}
                    <div 
                      className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 text-white"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
                    >
                      <span className="badge bg-dark bg-opacity-75 text-white border border-light border-opacity-25" style={{ fontSize: '0.68rem' }}>
                        {artist.origin}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column p-2 p-sm-3 p-xl-4">
                    {/* Japanese name & English name */}
                    <div className="mb-2">
                      <small className="text-muted jp-font d-block" style={{ fontSize: '0.75rem' }}>
                        {artist.nameJp}
                      </small>
                      <h3 className="h5 h4-md card-title fw-bold text-dark mb-1 fs-6 fs-sm-5">
                        {artist.name}
                      </h3>
                    </div>

                    {/* Tag / Role badge */}
                    <div className="mb-2 mb-sm-3">
                      <span className={`badge ${artist.accentBadgeClass} px-2 py-1 text-truncate max-w-100`} style={{ fontSize: '0.7rem' }}>
                        {artist.genre.slice(0, 2).join(' • ')}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="card-text text-secondary small flex-grow-1 line-clamp-2 line-clamp-md-3 mb-3 mb-md-4 lh-base" style={{ fontSize: '0.8rem' }}>
                      {artist.shortBio}
                    </p>

                    {/* Button to navigate to Artist Profile */}
                    <button
                      type="button"
                      className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-1 gap-sm-2 fw-semibold py-1 py-sm-2 btn-sm"
                      onClick={() => onNavigate(artist.id)}
                      id={`btn-view-${artist.id}`}
                    >
                      <span className="small">ดูโปรไฟล์</span>
                      <i className="bi bi-arrow-right small"></i>
                    </button>
                  </div>

                  {/* Card Footer: Popular Track Teaser */}
                  <div className="card-footer bg-white border-top-0 pt-0 pb-2 pb-sm-3 px-2 px-sm-3 px-xl-4">
                    <div className="p-1 p-sm-2 rounded bg-light border small d-flex align-items-center justify-content-between">
                      <span className="text-muted text-nowrap" style={{ fontSize: '0.7rem' }}>เพลงเด่น:</span>
                      <span className="fw-semibold text-dark text-truncate ms-1 ms-sm-2" style={{ fontSize: '0.7rem' }}>
                        {artist.songs[0]?.title}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About the Website & Motivation (Minimal Personal Touch) */}
      <section className="py-5 bg-white border-top" id="about-personal-interest">
        <div className="container py-2">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-4 text-center text-md-start">
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle mb-2 px-3 py-1">
                Personal Perspective
              </span>
              <h3 className="fw-bold text-dark">ทำไมถึงเลือก 4 ศิลปินนี้?</h3>
              <p className="text-muted small mb-0">
                บทความสั้นเกี่ยวกับความชอบส่วนตัวและดนตรี J-Pop
              </p>
            </div>

            <div className="col-12 col-md-8">
              <div className="card border-0 bg-light p-4 rounded-4">
                <div className="d-flex gap-3">
                  <div className="text-primary fs-3">
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                  <div>
                    <p className="text-secondary small mb-2 lh-base">
                      "ศิลปินทั้ง 4 คน/วงนี้เป็นตัวแทนของแนวเพลง J-Pop ที่มีความหลากหลาย ทั้งการเล่าเรื่องผ่านดนตรีอิเล็กทรอนิกส์ของ <strong>YOASOBI</strong>, พลังเสียงร็อกอันหนักแน่นของ <strong>LiSA</strong>, ความอบอุ่นและซื่อตรงของ <strong>back number</strong>, และความสดใสชวนฝันของ <strong>Luna Haruna</strong> ซึ่งเป็นเพลงที่ผู้จัดทำเปิดฟังเป็นประจำในชีวิตประจำวัน"
                    </p>
                    <div className="text-muted small fw-semibold">
                      — My Interest Website Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
