import React from 'react';

export default function Qualifications({ onSelectCourse }) {
  return (
    <section className="qualifications-section" id="programs">
      <div className="qualifications-container">
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="header-left">
            <div className="section-badge pill-blue-light">
              <svg className="icon-cap-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>RECOGNIZED DEGREES 2026–27</span>
            </div>
            <h2 className="section-title">Choose Your Teaching Qualification</h2>
          </div>
          
          <div className="header-right">
            <div className="rating-pill">
              <svg className="icon-star-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span><strong>4.9/5 Rating</strong> <span className="bullet">•</span> Over 1,14,000+ Enrolled Candidates</span>
            </div>
          </div>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="program-cards-grid">
          
          {/* CARD 1: B.Ed */}
          <div className="program-card card-glow-bed">
            <div className="program-card-header">
              <div className="card-badges-row">
                <span className="badge-pill bg-pill-blue">2 YRS REGULAR</span>
                <span className="badge-pill bg-pill-green">Seats Open</span>
              </div>
              <h3 className="program-card-title">B.Ed</h3>
              <p className="program-card-desc">
                Mandatory degree for TGT & PGT teaching posts in Delhi NCR (KVS, DSSSB, CTET).
              </p>
            </div>

            <div className="program-card-divider"></div>

            <div className="program-card-body">
              <ul className="checklist-list">
                <li className="checklist-item">
                  <div className="check-icon-box check-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in Graduation / PG</span>
                </li>
                <li className="checklist-item">
                  <div className="check-icon-box check-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>MDU Rohtak / CRSU / KUK</span>
                </li>
              </ul>

              <button className="btn-program-apply btn-apply-blue" onClick={() => onSelectCourse('B.Ed')}>
                <span>Apply For B.Ed</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* CARD 2: M.Ed */}
          <div className="program-card card-glow-med">
            <div className="program-card-header">
              <div className="card-badges-row">
                <span className="badge-pill bg-pill-purple">2 YRS MASTER</span>
                <span className="badge-pill bg-pill-yellow">High Demand</span>
              </div>
              <h3 className="program-card-title">M.Ed</h3>
              <p className="program-card-desc">
                Postgraduate degree for teacher training lectureship, DIETs, and administrative heads.
              </p>
            </div>

            <div className="program-card-divider"></div>

            <div className="program-card-body">
              <ul className="checklist-list">
                <li className="checklist-item">
                  <div className="check-icon-box check-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in B.Ed or B.El.Ed</span>
                </li>
                <li className="checklist-item">
                  <div className="check-icon-box check-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Dissertation & Mentorship Support</span>
                </li>
              </ul>

              <button className="btn-program-apply btn-apply-purple" onClick={() => onSelectCourse('M.Ed')}>
                <span>Apply For M.Ed</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* CARD 3: JBT / D.El.Ed */}
          <div className="program-card card-glow-jbt">
            <div className="program-card-header">
              <div className="card-badges-row">
                <span className="badge-pill bg-pill-teal">2 YRS DIPLOMA</span>
                <span className="badge-pill bg-pill-teal-dark">PRT Direct</span>
              </div>
              <h3 className="program-card-title">JBT / D.El.Ed</h3>
              <p className="program-card-desc">
                Primary teacher certification (Classes 1 to 5) for PRT government teaching positions.
              </p>
            </div>

            <div className="program-card-divider"></div>

            <div className="program-card-body">
              <ul className="checklist-list">
                <li className="checklist-item">
                  <div className="check-icon-box check-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in 10+2 / Senior Sec.</span>
                </li>
                <li className="checklist-item">
                  <div className="check-icon-box check-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Practical Files & School Internship</span>
                </li>
              </ul>

              <button className="btn-program-apply btn-apply-teal" onClick={() => onSelectCourse('JBT/D.El.Ed')}>
                <span>Apply For JBT</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
