import './BecomePremiumButton.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function BecomePremiumButton({ onClick }) {
  return (
    <button className="BecomePremiumButton" type="button" onClick={onClick}>
      Become premium
    </button>
  );
}

BecomePremiumButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
