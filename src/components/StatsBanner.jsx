import React from 'react';

export default function StatsBanner() {
  return (
    <div className="stats-banner-grid">
      <div className="stat-box">
        <h4 className="stat-number number-blue">35,000+</h4>
        <p className="stat-label">B.Ed Enrolled</p>
      </div>

      <div className="stat-box">
        <h4 className="stat-number number-purple">20,000+</h4>
        <p className="stat-label">M.Ed Scholars</p>
      </div>

      <div className="stat-box">
        <h4 className="stat-number number-teal">13,000+</h4>
        <p className="stat-label">JBT Certified</p>
      </div>

      <div className="stat-box">
        <h4 className="stat-number number-orange">46,000+</h4>
        <p className="stat-label">Other Programs</p>
      </div>
    </div>
  );
}
