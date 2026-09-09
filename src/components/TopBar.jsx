import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <span className="alert-badge">
            <svg className="icon-lightning" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            URGENT ALERT
          </span>
          <span className="announcement-text">
            Limited Seats Open for 2025–26 Session <span className="bullet">•</span> Early Bird Scholarship Concession Active
          </span>
        </div>
      </div>
    </div>
  );
}
