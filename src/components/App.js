import './App.css';
import React, { useState, useEffect } from 'react';
import Converter from './Converter';
import ConverterContext from '../contexts/ConverterContext';
import PremiumLabel from './PremiumLabel';
import ThemeSelector from './ThemeSelector';
import BecomePremiumButton from './BecomePremiumButton';
import usePreferredColorScheme from '../hooks/usePreferredColorScheme';

const MAX_CONVERSION_COUNT = 5;

export default function App() {
  const [conversionCount, setConversionCount] = useState(0);
  const preferredColorScheme = usePreferredColorScheme();
  const [selectedTheme, setSelectedTheme] = useState('');
  const [premium, setPremium] = useState(false);

  const theme = selectedTheme || preferredColorScheme;

  const handleConvert = () => {
    setConversionCount(prevConversionCount => prevConversionCount + 1);
  };

  useEffect(() => {
    if (!premium && conversionCount > MAX_CONVERSION_COUNT) {
      alert('Convert without limits with out Premium Package');
      setConversionCount(0);
    }
  }, [conversionCount, premium]);

  return (
    <ConverterContext.Provider value={{ theme, premium }}>
      <main className={`App App--${theme}`}>
        <header className="App__header">
          <ThemeSelector theme={selectedTheme} onChange={setSelectedTheme} />

          {premium ? (
            <PremiumLabel />
          ) : (
            <BecomePremiumButton onClick={() => setPremium(true)} />
          )}
        </header>

        <section className="App__section">
          <Converter
            cryptoLabel="Bitcoins"
            cryptoShortLabel="BTC"
            exchangeRate={0.5}
            onConvert={handleConvert}
          />

          <Converter
            cryptoLabel="Ethereum"
            cryptoShortLabel="ETH"
            exchangeRate={1.2}
            onConvert={handleConvert}
          />
        </section>
      </main>
    </ConverterContext.Provider>
  );
}
