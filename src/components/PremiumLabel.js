import './PremiumLabel.css';
import React from 'react';

export default function PremiumLabel() {
  return (
    <p className="PremiumLabel">
      with{' '}
      <strong>
        <span aria-label="Premium user icon" role="img">
          💎
        </span>{' '}
        premium
      </strong>{' '}
      conversions
    </p>
  );
}
