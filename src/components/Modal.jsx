import React from 'react';

export default function Modal({ isOpen, onClose, details }) {
  if (!isOpen) return null;

  return (
    <div class="modal-backdrop">
      <div class="modal-content">
        <div class="modal-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3>Counselling Seat Reserved!</h3>
        <p>
          Thank you <strong>{details?.fullName}</strong>! Your <strong>{details?.desiredCourse}</strong> admission counselling request for <strong>{details?.preferredState}</strong> has been registered. An expert counselor will call <strong>+91 {details?.whatsappNum}</strong> shortly.
        </p>
        <button class="modal-close-btn" onClick={onClose}>
          Got it, Thanks!
        </button>
      </div>
    </div>
  );
}
