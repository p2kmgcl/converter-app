import './App.css';
import React from 'react';
import Converter from './Converter';
import ConverterContext from '../contexts/ConverterContext';
import PremiumLabel from './PremiumLabel';
import ThemeSelector from './ThemeSelector';
import BecomePremiumButton from './BecomePremiumButton';

const MAX_CONVERSION_COUNT = 5;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      conversionCount: 0,
      premium: false,
    };
  }

  componentDidUpdate() {
    const { conversionCount, premium } = this.state;

    if (!premium && conversionCount > MAX_CONVERSION_COUNT) {
      alert('Convert without limits with out Premium Package');
      this.setState({ conversionCount: 0 });
    }
  }

  handleBecomePremiumButtonClick = () => {
    this.setState({ premium: true });
  };

  handleConvert = () => {
    this.setState(({ conversionCount }) => ({
      conversionCount: conversionCount + 1,
    }));
  };

  handleThemeChange = theme => {
    this.setState({
      theme,
    });
  };

  render() {
    const { theme, premium } = this.state;

    return (
      <ConverterContext.Provider value={{ theme, premium }}>
        <main className={`App App--${theme}`}>
          <header className="App__header">
            <ThemeSelector theme={theme} onChange={this.handleThemeChange} />

            {premium ? (
              <PremiumLabel />
            ) : (
              <BecomePremiumButton
                onClick={this.handleBecomePremiumButtonClick}
              />
            )}
          </header>

          <section className="App__section">
            <Converter
              cryptoLabel="Bitcoins"
              cryptoShortLabel="BTC"
              exchangeRate={0.5}
              onConvert={this.handleConvert}
            />

            <Converter
              cryptoLabel="Ethereum"
              cryptoShortLabel="ETH"
              exchangeRate={1.2}
              onConvert={this.handleConvert}
            />
          </section>
        </main>
      </ConverterContext.Provider>
    );
  }
}
