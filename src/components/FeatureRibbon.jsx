import React from 'react';

export default function FeatureRibbon() {
  return (
    <section className="bottom-ribbon-section">
      <div className="ribbon-container">
        <div className="ribbon-card card-border-gold">
          <div className="ribbon-icon-box box-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </div>
          <div className="ribbon-card-content">
            <h3 className="ribbon-card-title">₹15,000 Aid</h3>
            <p className="ribbon-card-sub">Direct Early Scholarship</p>
          </div>
        </div>

        <div className="ribbon-card card-border-teal">
          <div className="ribbon-icon-box box-teal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="ribbon-card-content">
            <h3 className="ribbon-card-title">100% Approved</h3>
            <p className="ribbon-card-sub">NCTE & UGC Recognized</p>
          </div>
        </div>

        <div className="ribbon-card card-border-purple">
          <div className="ribbon-icon-box box-purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div className="ribbon-card-content">
            <h3 className="ribbon-card-title">Free Books Kit</h3>
            <p className="ribbon-card-sub">Worth ₹5,000 Delivered</p>
          </div>
        </div>

        <div className="ribbon-card card-border-blue">
          <div className="ribbon-icon-box box-blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <div className="ribbon-card-content">
            <h3 className="ribbon-card-title">Flexible EMI</h3>
            <p className="ribbon-card-sub">Zero Interest Installments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
