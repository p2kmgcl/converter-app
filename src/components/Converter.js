import './Converter.css';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Amount from './Amount';
import ConverterContext from '../contexts/ConverterContext';
import PremiumLabel from './PremiumLabel';

export default function Converter({
  cryptoLabel,
  cryptoShortLabel,
  exchangeRate,
  onConvert,
}) {
  const [eurosValue, setEurosValue] = useState(0);
  const { premium } = useContext(ConverterContext);
  const cryptoValue = eurosValue * exchangeRate;

  const handleChange = nextEurosValue => {
    setEurosValue(nextEurosValue);
    if (onConvert) onConvert(nextEurosValue);
  };

  return (
    <form className="Converter">
      <header className="Converter__header">
        <h1 className="Converter__title">Euros to {cryptoLabel}</h1>
        {premium && <PremiumLabel />}
      </header>

      <Amount label="EUR" onChange={handleChange} value={eurosValue} />
      <Amount label={cryptoShortLabel} value={cryptoValue} readOnly />
    </form>
  );
}

Converter.propTypes = {
  cryptoLabel: PropTypes.string.isRequired,
  cryptoShortLabel: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,

  onConvert: PropTypes.func,
};
