import React from 'react';
import { ARTISTS_DATA, ARTIST_LIST } from '../data/artistsData';
import { PageId } from '../types';

interface ArtistPageProps {
  artistId: 'yoasobi' | 'lisa' | 'back-number' | 'luna-haruna';
  onNavigate: (page: PageId) => void;
}

/**
 * Artist Profile Page Component
 * Unified, consistent design template across all 4 artists with responsive layout,
 * prominent imagery, concise biography, band member breakdown, and recommended song list group.
 */
export const ArtistPage: React.FC<ArtistPageProps> = ({ artistId, onNavigate }) => {
  const artist = ARTISTS_DATA[artistId];

  // If invalid ID, return null
  if (!artist) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">ไม่พบข้อมูลศิลปิน</h2>
        <button className="btn btn-primary mt-3" onClick={() => onNavigate('home')}>
          กลับหน้าหลัก (Home)
        </button>
      </div>
    );
  }

  // Find previous and next artist in cycle for fluid navigation
  const currentIndex = ARTIST_LIST.findIndex((a) => a.id === artist.id);
  const prevArtist = ARTIST_LIST[(currentIndex - 1 + ARTIST_LIST.length) % ARTIST_LIST.length];
  const nextArtist = ARTIST_LIST[(currentIndex + 1) % ARTIST_LIST.length];

  return (
    <article className="artist-page-view" id={`artist-view-${artist.id}`}>
      {/* 1. Header & Breadcrumb Navigation Bar */}
      <section className="bg-white border-bottom py-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted"
                  onClick={() => onNavigate('home')}
                >
                  <i className="bi bi-house-door me-1"></i> Home
                </button>
              </li>
              <li className="breadcrumb-item text-muted">Artists</li>
              <li className="breadcrumb-item active fw-semibold text-dark" aria-current="page">
                {artist.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 2. Artist Profile Hero Header Banner */}
      <section className="py-5 bg-white border-bottom position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left: Prominent Artist Image with decorative badge */}
            <div className="col-12 col-md-5 col-lg-4 text-center">
              <div className="position-relative d-inline-block w-100" style={{ maxWidth: '340px' }}>
                <img
                  src={artist.imageUrl}
                  alt={`${artist.name} Official Photo`}
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ maxHeight: '380px', border: `3px solid ${artist.accentColor}` }}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-n2">
                  <span className={`badge ${artist.accentBadgeClass} px-3 py-2 rounded-pill shadow-sm`} style={{ fontSize: '0.8rem' }}>
                    <i className="bi bi-music-note me-1"></i>
                    {artist.genre[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Artist Identity, Title & Quote */}
            <div className="col-12 col-md-7 col-lg-8">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                <span className="badge bg-dark text-white rounded-pill px-3 py-1 small">
                  J-Pop Artist
                </span>
                <span className="text-muted small">
                  <i className="bi bi-geo-alt me-1"></i>
                  {artist.origin}
                </span>
                <span className="text-muted small">
                  <i className="bi bi-calendar3 me-1"></i>
                  {artist.activeYears}
                </span>
              </div>

              {/* Japanese Name */}
              <p className="text-secondary fw-semibold jp-font mb-1" style={{ fontSize: '1.1rem' }}>
                {artist.nameJp}
              </p>

              {/* Main Artist Name */}
              <h1 className="display-4 fw-bold text-dark mb-2 tracking-tight">
                {artist.name}
              </h1>

              {/* Title Tagline */}
              <h2 className="h5 fw-normal text-muted mb-3">
                {artist.titleTag}
              </h2>

              {/* Quote */}
              <div className="p-3 bg-light rounded-3 border-start border-4 border-dark mb-4 fst-italic text-secondary small">
                {artist.quote}
              </div>

              {/* Genres Tag Cloud */}
              <div className="d-flex flex-wrap gap-2">
                {artist.genre.map((g, idx) => (
                  <span key={idx} className="badge bg-light text-secondary border px-3 py-2">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content: Biography & Recommended Songs Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            
            {/* Left Column: Biography & Key Facts */}
            <div className="col-12 col-lg-7">
              {/* Biography Card */}
              <div className="card border-0 shadow-sm rounded-3 mb-4">
                <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2">
                  <i className="bi bi-person-lines-fill text-primary fs-5"></i>
                  <h3 className="h5 mb-0 fw-bold text-dark">ประวัติและข้อมูลศิลปิน (Biography / About)</h3>
                </div>
                <div className="card-body p-4">
                  {artist.biography.map((paragraph, idx) => (
                    <p key={idx} className="text-secondary lh-base mb-3" style={{ fontSize: '0.975rem' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Members Section (if band / duo) */}
              {artist.members && artist.members.length > 0 && (
                <div className="card border-0 shadow-sm rounded-3 mb-4">
                  <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2">
                    <i className="bi bi-people-fill text-primary fs-5"></i>
                    <h3 className="h5 mb-0 fw-bold text-dark">สมาชิกสำคัญ (Key Members)</h3>
                  </div>
                  <div className="card-body p-4">
                    <div className="row g-3">
                      {artist.members.map((member, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                          <div className="p-3 bg-light rounded-3 border h-100">
                            <div className="fw-bold text-dark mb-1">{member.name}</div>
                            <div className="text-muted jp-font small mb-1">{member.nameJp}</div>
                            <div className="badge bg-white text-dark border mb-2 small">{member.role}</div>
                            {member.bioSnippet && (
                              <p className="text-secondary small mb-0 lh-sm">
                                {member.bioSnippet}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Info Summary Table */}
              <div className="card border-0 shadow-sm rounded-3">
                <div className="card-header bg-white py-3 border-bottom d-flex align-items-center gap-2">
                  <i className="bi bi-info-circle-fill text-primary fs-5"></i>
                  <h3 className="h5 mb-0 fw-bold text-dark">ข้อมูลพื้นฐาน (Key Facts)</h3>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0 align-middle">
                      <tbody>
                        {artist.keyFacts.map((fact, idx) => (
                          <tr key={idx}>
                            <th scope="row" className="text-secondary ps-4 py-3 fw-semibold small" style={{ width: '35%' }}>
                              {fact.label}
                            </th>
                            <td className="text-dark pe-4 py-3 small">
                              {fact.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Songs (Songs List) */}
            <div className="col-12 col-lg-5">
              <div className="card border-0 shadow-sm rounded-3 sticky-top" style={{ top: '80px', zIndex: 10 }}>
                {/* Card Header */}
                <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-music-note-list text-primary fs-5"></i>
                    <h3 className="h5 mb-0 fw-bold text-dark">รายชื่อเพลงแนะนำ (Recommended Songs)</h3>
                  </div>
                  <span className="badge bg-secondary-subtle text-dark border small">
                    {artist.songs.length} Tracks
                  </span>
                </div>

                {/* Subtitle Note */}
                <div className="px-4 pt-3 pb-2 bg-light border-bottom">
                  <small className="text-muted d-block">
                    <i className="bi bi-heart-fill text-danger me-1"></i>
                    เพลงที่ฉันฟังจริงและแนะนำให้ลองฟัง:
                  </small>
                </div>

                {/* Song List Group */}
                <div className="list-group list-group-flush">
                  {artist.songs.map((song, index) => (
                    <div key={song.id} className="list-group-item p-3 song-list-item">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge bg-light text-muted border rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px', fontSize: '0.75rem' }}>
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="fw-bold text-dark mb-0 fs-6">
                              {song.title}
                            </h4>
                            <small className="text-muted jp-font d-block" style={{ fontSize: '0.78rem' }}>
                              {song.titleJp}
                            </small>
                          </div>
                        </div>

                        {/* Release Year & Duration Badge */}
                        <div className="text-end">
                          <span className="badge bg-light text-dark border small">
                            {song.releaseYear}
                          </span>
                          {song.duration && (
                            <small className="text-muted d-block mt-1" style={{ fontSize: '0.7rem' }}>
                              {song.duration}
                            </small>
                          )}
                        </div>
                      </div>

                      {/* Anime / Drama Tie-In if available */}
                      {song.tieIn && (
                        <div className="mt-2 mb-2">
                          <span className="badge bg-primary-subtle text-primary border border-primary-subtle text-wrap text-start lh-sm" style={{ fontSize: '0.75rem' }}>
                            <i className="bi bi-tv me-1"></i>
                            {song.tieIn}
                          </span>
                        </div>
                      )}

                      {/* Personal Recommendation Note */}
                      <p className="text-secondary small mb-0 mt-1 fst-italic lh-sm bg-light p-2 rounded border-start border-2 border-secondary">
                        <i className="bi bi-chat-quote text-muted me-1"></i>
                        {song.personalNote}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Card Footer with Spotify / Music Search Link */}
                <div className="card-footer bg-white p-3 border-top text-center">
                  <a
                    href={`https://open.spotify.com/search/${encodeURIComponent(artist.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-spotify"></i>
                    <span>ค้นหาเพลงของ {artist.name} บน Spotify</span>
                    <i className="bi bi-box-arrow-up-right small"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Pagination / Navigation Between Artists */}
      <section className="py-4 bg-white border-top" id="artist-navigation-footer">
        <div className="container">
          <div className="row align-items-center justify-content-between g-3">
            {/* Previous Artist Button */}
            <div className="col-12 col-md-4 text-start">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm w-100 w-md-auto d-inline-flex align-items-center gap-2"
                onClick={() => onNavigate(prevArtist.id)}
                id="btn-prev-artist"
              >
                <i className="bi bi-arrow-left"></i>
                <div className="text-start">
                  <small className="d-block text-muted" style={{ fontSize: '0.7rem' }}>ศิลปินก่อนหน้า</small>
                  <span className="fw-semibold">{prevArtist.name}</span>
                </div>
              </button>
            </div>

            {/* Back to Home Button */}
            <div className="col-12 col-md-4 text-center">
              <button
                type="button"
                className="btn btn-primary px-4 py-2 shadow-sm fw-semibold"
                onClick={() => onNavigate('home')}
                id="btn-back-to-home"
              >
                <i className="bi bi-grid me-2"></i>
                กลับสู่หน้าหลัก (Home)
              </button>
            </div>

            {/* Next Artist Button */}
            <div className="col-12 col-md-4 text-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm w-100 w-md-auto d-inline-flex align-items-center gap-2 justify-content-end"
                onClick={() => onNavigate(nextArtist.id)}
                id="btn-next-artist"
              >
                <div className="text-end">
                  <small className="d-block text-muted" style={{ fontSize: '0.7rem' }}>ศิลปินถัดไป</small>
                  <span className="fw-semibold">{nextArtist.name}</span>
                </div>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
