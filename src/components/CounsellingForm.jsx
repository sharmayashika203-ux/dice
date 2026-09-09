import React, { useState } from 'react';

export default function CounsellingForm({ onSubmitSuccess, desiredCourse, setDesiredCourse }) {
  const [fullName, setFullName] = useState('');
  const [whatsappNum, setWhatsappNum] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [preferredState, setPreferredState] = useState('Haryana (MDU / CRSU / KUK)');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !whatsappNum.trim() || !desiredCourse) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    const details = {
      fullName,
      whatsappNum,
      emailAddr,
      desiredCourse,
      preferredState
    };

    onSubmitSuccess(details);
    setFullName('');
    setWhatsappNum('');
    setEmailAddr('');
  };

  return (
    <div className="form-card" id="counselling-form-container">
      {/* Form Header */}
      <div className="form-card-header">
        <div className="scholarship-desk-badge">
          <span className="badge-star">★</span>
          <span>SCHOLARSHIP DESK</span>
        </div>
        <h2 className="form-header-title">Claim Free Counselling</h2>
        <p className="form-header-sub">
          Get instant fee concession voucher up to <strong className="text-gold-highlight">₹15,000</strong> for 2025–26 batch.
        </p>
      </div>

      {/* Form Body */}
      <form className="form-card-body" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="full-name">FULL NAME *</label>
          <div className="input-with-icon">
            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              id="full-name"
              className="form-input"
              placeholder="e.g. Rahul Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* WhatsApp Mobile Number */}
        <div className="form-group">
          <label className="form-label" htmlFor="whatsapp-num">WHATSAPP MOBILE NUMBER *</label>
          <div className="input-with-icon">
            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <input
              type="tel"
              id="whatsapp-num"
              className="form-input"
              placeholder="10–digit mobile number"
              pattern="[0-9]{10}"
              maxLength="10"
              value={whatsappNum}
              onChange={(e) => setWhatsappNum(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label className="form-label" htmlFor="email-addr">EMAIL ADDRESS</label>
          <div className="input-with-icon">
            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input
              type="email"
              id="email-addr"
              className="form-input"
              placeholder="youremail@domain.com"
              value={emailAddr}
              onChange={(e) => setEmailAddr(e.target.value)}
            />
          </div>
        </div>

        {/* Course & Preferred State 2-Column Row */}
        <div className="form-row-2col">
          <div className="form-group">
            <label className="form-label" htmlFor="desired-course">DESIRED COURSE *</label>
            <div className="select-wrapper">
              <select
                id="desired-course"
                className="form-select"
                value={desiredCourse}
                onChange={(e) => setDesiredCourse(e.target.value)}
                required
              >
                <option value="" disabled>Choose Course</option>
                <option value="B.Ed">B.Ed (Bachelor of Education)</option>
                <option value="M.Ed">M.Ed (Master of Education)</option>
                <option value="JBT/D.El.Ed">JBT / D.El.Ed</option>
                <option value="BA B.Ed">Integrated BA B.Ed</option>
                <option value="B.Sc B.Ed">Integrated B.Sc B.Ed</option>
              </select>
              <svg className="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="preferred-state">PREFERRED STATE</label>
            <div className="select-wrapper">
              <select
                id="preferred-state"
                className="form-select state-select"
                value={preferredState}
                onChange={(e) => setPreferredState(e.target.value)}
              >
                <option value="Haryana (MDU / CRSU / KUK)">Haryana (MDU / CRSU / KUK)</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Other State Universities">Other State Universities</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main CTA Submit Button */}
        <button type="submit" className="btn-submit-counselling">
          <span>Book Free Counselling Seat Now</span>
          <svg className="icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Footer Security Note */}
        <div className="form-footer-note">
          <svg className="icon-shield-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>100% Confidential • Direct University Fee • Instant Callback</span>
        </div>
      </form>
    </div>
  );
}
