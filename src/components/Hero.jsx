import React, { useState, useEffect } from 'react';
import CounsellingForm from './CounsellingForm';

export default function Hero({ onSubmitSuccess, desiredCourse, setDesiredCourse }) {
  const [counselorCount, setCounselorCount] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      const delta = Math.floor(Math.random() * 3) - 1;
      setCounselorCount(prev => Math.min(16, Math.max(10, prev + delta)));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-ambient-glow glow-1"></div>
      <div className="hero-ambient-glow glow-2"></div>
      
      <div className="hero-container">
        
        {/* HERO LEFT COLUMN */}
        <div className="hero-left-col">
          <div className="badge-row">
            <div className="hero-pill pill-gold">
              <svg className="icon-shield-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <svg className="icon-bolt" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>2026–27 BATCH COUNSELING OPEN</span>
            </div>
            
            <div className="hero-pill pill-teal">
              <span className="status-dot green-dot"></span>
              <span>48 Hours Left for Scholarship</span>
            </div>
          </div>

          <h1 className="hero-headline">
            Secure Your{' '}
            <span className="wavy-text">B.Ed / M.Ed / JBT</span>{' '}
            <br />Admission in Top NCTE Approved Colleges
          </h1>

          <p className="hero-subtext">
            100% genuine admission assistance, direct university counselling, flexible installment options, and complete degree guidance across Delhi NCR, Haryana (MDU/CRSU/KUK) & Top State Universities.
          </p>

          <div className="hero-features-grid">
            <div className="feature-card">
              <div className="card-icon-wrapper bg-icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="feature-card-text">Zero Donation / Direct University Fees</span>
            </div>

            <div className="feature-card">
              <div className="card-icon-wrapper bg-icon-teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="feature-card-text">Recognized by UGC & NCTE (Govt)</span>
            </div>

            <div className="feature-card">
              <div className="card-icon-wrapper bg-icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="feature-card-text">Free Study Books, Kits & Online Classes</span>
            </div>

            <div className="feature-card">
              <div className="card-icon-wrapper bg-icon-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="feature-card-text">Guaranteed Degree Completion Support</span>
            </div>
          </div>

          <div className="hero-cta-row">
            <a href="tel:+919990612020" className="btn-orange-call">
              <svg className="icon-phone-fill" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-1 .45-1 .99 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.54-.45-.99-.99-.99z" />
              </svg>
              Call: +919990612020
            </a>
            
            <div className="counselors-online-pill">
              <span className="status-dot pulsing-green"></span>
              <span><strong>{counselorCount}</strong> Senior Admission Counselors Online</span>
            </div>
          </div>
        </div>

        {/* HERO RIGHT COLUMN */}
        <div className="hero-right-col">
          <CounsellingForm
            onSubmitSuccess={onSubmitSuccess}
            desiredCourse={desiredCourse}
            setDesiredCourse={setDesiredCourse}
          />
        </div>

      </div>
    </section>
  );
}
