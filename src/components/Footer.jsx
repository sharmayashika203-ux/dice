import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Footer Left: Logo, Badge & Address */}
        <div className="footer-left">
          <div className="footer-brand">
            <div className="footer-logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="footer-brand-name">DICE ADMISSION</span>
          </div>
          <p className="footer-address">
            Basement 14–477 Sunder Vihar, Paschim Vihar, New Delhi 110087
          </p>
        </div>

        {/* Footer Right: Contact Info & Copyright */}
        <div className="footer-right">
          <a href="tel:+919990612020" className="footer-contact-item">
            <svg className="footer-icon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+919990612020</span>
          </a>

          <a href="mailto:dicecareercounseling@gmail.com" className="footer-contact-item">
            <svg className="footer-icon-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>dicecareercounseling@gmail.com</span>
          </a>

          <span className="footer-divider">|</span>
          <span className="footer-copyright">© 2026 DICE Guidance</span>
        </div>

      </div>
    </footer>
  );
}

