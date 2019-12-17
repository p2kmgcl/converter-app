import './PremiumLabel.css';
import React, { useContext } from 'react';
import ConverterContext from '../contexts/ConverterContext';

export default function PremiumLabel() {
  const { theme } = useContext(ConverterContext);

  return (
    <p className={`PremiumLabel PremiumLabel--${theme}`}>
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
