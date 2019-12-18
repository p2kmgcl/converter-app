import './Amount.css';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ConverterContext from '../contexts/ConverterContext';
import useFocusOnMount from '../hooks/useFocusOnMount';

export default function Amount({
  label,
  readOnly,
  focusOnMount = false,
  onChange,
  value,
}) {
  const { premium } = useContext(ConverterContext);
  const negative = Number.isNaN(value) ? false : value < 0;
  const focusOnMountRef = useFocusOnMount();

  const handleChange = event => {
    const value = parseFloat(event.target.value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label
      className={`
        Amount
        ${negative ? 'Amount--negative' : ''}
        ${premium ? 'Amount--premium' : ''}
        `}
    >
      <span className="Amount__label">{label}</span>

      <input
        className="Amount__input"
        onChange={handleChange}
        placeholder="0"
        readOnly={readOnly}
        step="0.1"
        type="number"
        value={value}
        ref={focusOnMount ? focusOnMountRef : null}
      />
    </label>
  );
}

Amount.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,

  focusOnMount: PropTypes.bool,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};
