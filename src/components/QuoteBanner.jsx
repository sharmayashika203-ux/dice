import React from 'react';

export default function QuoteBanner() {
  return (
    <div class="quote-banner">
      <div class="quote-badge-box">
        <span class="quote-symbol">99</span>
      </div>
      <div class="quote-text-content">
        <p class="quote-body">
          <strong>Poonam Solanki</strong> (Head Counsellor, DICE): <em>"Every teacher we guide shapes hundreds of future minds. 100% verified colleges & hassle-free admission."</em>
        </p>
      </div>
      <a href="tel:+919990612020" class="btn-quote-direct-call">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-1 .45-1 .99 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.54-.45-.99-.99-.99z" />
        </svg>
        <span>Direct Call</span>
      </a>
    </div>
  );
}
