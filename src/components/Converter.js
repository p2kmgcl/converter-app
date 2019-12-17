import './Converter.css';
import React from 'react';
import PropTypes from 'prop-types';
import Amount from './Amount';
import ConverterContext from '../contexts/ConverterContext';
import PremiumLabel from './PremiumLabel';

export default class Converter extends React.Component {
  static contextType = ConverterContext;

  constructor(props) {
    super(props);

    this.state = {
      eurosValue: 0,
    };
  }

  handleChange = eurosValue => {
    this.setState({ eurosValue }, this.props.onConvert);
  };

  render() {
    const { cryptoLabel, cryptoShortLabel, exchangeRate } = this.props;
    const { eurosValue } = this.state;
    const { premium } = this.context;
    const cryptoValue = eurosValue * exchangeRate;

    return (
      <form className="Converter">
        <header className="Converter__header">
          <h1 className="Converter__title">Euros to {cryptoLabel}</h1>
          {premium && <PremiumLabel />}
        </header>

        <Amount label="EUR" onChange={this.handleChange} value={eurosValue} />
        <Amount label={cryptoShortLabel} value={cryptoValue} readOnly />
      </form>
    );
  }
}

Converter.propTypes = {
  cryptoLabel: PropTypes.string.isRequired,
  cryptoShortLabel: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,

  onConvert: PropTypes.func,
};
