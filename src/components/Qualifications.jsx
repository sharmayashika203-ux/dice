import React from 'react';

export default function Qualifications({ onSelectCourse }) {
  return (
    <section class="qualifications-section" id="programs">
      <div class="qualifications-container">
        
        {/* Section Header */}
        <div class="section-header-row">
          <div class="header-left">
            <div class="section-badge pill-blue-light">
              <svg class="icon-cap-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>RECOGNIZED DEGREES 2026–27</span>
            </div>
            <h2 class="section-title">Choose Your Teaching Qualification</h2>
          </div>
          
          <div class="header-right">
            <div class="rating-pill">
              <svg class="icon-star-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span><strong>4.9/5 Rating</strong> <span class="bullet">•</span> Over 1,14,000+ Enrolled Candidates</span>
            </div>
          </div>
        </div>

        {/* 3 Program Cards Grid */}
        <div class="program-cards-grid">
          
          {/* CARD 1: B.Ed */}
          <div class="program-card card-glow-bed">
            <div class="program-card-header">
              <div class="card-badges-row">
                <span class="badge-pill bg-pill-blue">2 YRS REGULAR</span>
                <span class="badge-pill bg-pill-green">Seats Open</span>
              </div>
              <h3 class="program-card-title">B.Ed</h3>
              <p class="program-card-desc">
                Mandatory degree for TGT & PGT teaching posts in Delhi NCR (KVS, DSSSB, CTET).
              </p>
            </div>

            <div class="program-card-divider"></div>

            <div class="program-card-body">
              <ul class="checklist-list">
                <li class="checklist-item">
                  <div class="check-icon-box check-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in Graduation / PG</span>
                </li>
                <li class="checklist-item">
                  <div class="check-icon-box check-blue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>MDU Rohtak / CRSU / KUK</span>
                </li>
              </ul>

              <button class="btn-program-apply btn-apply-blue" onClick={() => onSelectCourse('B.Ed')}>
                <span>Apply For B.Ed</span>
                <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* CARD 2: M.Ed */}
          <div class="program-card card-glow-med">
            <div class="program-card-header">
              <div class="card-badges-row">
                <span class="badge-pill bg-pill-purple">2 YRS MASTER</span>
                <span class="badge-pill bg-pill-yellow">High Demand</span>
              </div>
              <h3 class="program-card-title">M.Ed</h3>
              <p class="program-card-desc">
                Postgraduate degree for teacher training lectureship, DIETs, and administrative heads.
              </p>
            </div>

            <div class="program-card-divider"></div>

            <div class="program-card-body">
              <ul class="checklist-list">
                <li class="checklist-item">
                  <div class="check-icon-box check-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in B.Ed or B.El.Ed</span>
                </li>
                <li class="checklist-item">
                  <div class="check-icon-box check-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Dissertation & Mentorship Support</span>
                </li>
              </ul>

              <button class="btn-program-apply btn-apply-purple" onClick={() => onSelectCourse('M.Ed')}>
                <span>Apply For M.Ed</span>
                <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* CARD 3: JBT / D.El.Ed */}
          <div class="program-card card-glow-jbt">
            <div class="program-card-header">
              <div class="card-badges-row">
                <span class="badge-pill bg-pill-teal">2 YRS DIPLOMA</span>
                <span class="badge-pill bg-pill-teal-dark">PRT Direct</span>
              </div>
              <h3 class="program-card-title">JBT / D.El.Ed</h3>
              <p class="program-card-desc">
                Primary teacher certification (Classes 1 to 5) for PRT government teaching positions.
              </p>
            </div>

            <div class="program-card-divider"></div>

            <div class="program-card-body">
              <ul class="checklist-list">
                <li class="checklist-item">
                  <div class="check-icon-box check-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Eligibility:</strong> 50% in 10+2 / Senior Sec.</span>
                </li>
                <li class="checklist-item">
                  <div class="check-icon-box check-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Practical Files & School Internship</span>
                </li>
              </ul>

              <button class="btn-program-apply btn-apply-teal" onClick={() => onSelectCourse('JBT/D.El.Ed')}>
                <span>Apply For JBT</span>
                <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
