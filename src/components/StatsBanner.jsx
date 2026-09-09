import React from 'react';

export default function StatsBanner() {
  return (
    <div class="stats-banner-grid">
      <div class="stat-box">
        <h4 class="stat-number number-blue">35,000+</h4>
        <p class="stat-label">B.Ed Enrolled</p>
      </div>

      <div class="stat-box">
        <h4 class="stat-number number-purple">20,000+</h4>
        <p class="stat-label">M.Ed Scholars</p>
      </div>

      <div class="stat-box">
        <h4 class="stat-number number-teal">13,000+</h4>
        <p class="stat-label">JBT Certified</p>
      </div>

      <div class="stat-box">
        <h4 class="stat-number number-orange">46,000+</h4>
        <p class="stat-label">Other Programs</p>
      </div>
    </div>
  );
}
