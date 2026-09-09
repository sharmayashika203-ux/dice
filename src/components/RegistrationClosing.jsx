import React from 'react';

export default function RegistrationClosing() {
  return (
    <section class="registration-closing-section">
      <div class="registration-closing-container">
        <div class="closing-badge">
          <svg class="icon-trophy" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H8v2h8v-2h-3v-2.1c2.16-.4 3.86-2.06 4.39-4.24C19.08 11.34 21 9.25 21 6.7V5c0-1.1-.9-2-2-2zM5 7.7V7h2v3.8c-1.2-.42-2-1.5-2-3.1zm14 0c0 1.6-.8 2.68-2 3.1V7h2v.7z" />
          </svg>
          <span>2025 REGISTRATION CLOSING SOON</span>
        </div>

        <h2 class="closing-title">Don’t Miss An Academic Year! Secure Your Seat Today</h2>
        <p class="closing-sub">
          Limited quota seats available for Delhi NCR candidates. Speak with senior admission counselors now.
        </p>

        {/* Action Buttons Row */}
        <div class="closing-actions-row">
          <a href="tel:+919990612020" class="btn-closing-call">
            <svg class="icon-phone-fill" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-1 .45-1 .99 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.54-.45-.99-.99-.99z" />
            </svg>
            <span>Call: +91 9990612020</span>
          </a>

          <a href="https://wa.me/919990612020" target="_blank" rel="noopener noreferrer" class="btn-closing-whatsapp">
            <svg class="icon-whatsapp" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
