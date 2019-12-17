import './ThemeSelector.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ThemeSelector({ theme, onChange }) {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <form className="ThemeSelector">
      <label>
        <span className="ThemeSelector__label">Theme</span>

        <select
          className="ThemeSelector__input"
          onChange={handleChange}
          value={theme}
        >
          <option value="">(Auto)</option>
          <option value="dark">Dark Theme</option>
          <option value="light">Light Theme</option>
        </select>
      </label>
    </form>
  );
}

ThemeSelector.propTypes = {
  theme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
