import './Amount.css';
import React from 'react';
import PropTypes from 'prop-types';
import ConverterContext from '../contexts/ConverterContext';

export default class Amount extends React.Component {
  static contextType = ConverterContext;

  render() {
    const { label, readOnly, onChange, value } = this.props;
    const { premium } = this.context;
    const negative = Number.isNaN(value) ? false : value < 0;

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
        />
      </label>
    );
  }
}

Amount.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,

  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};
