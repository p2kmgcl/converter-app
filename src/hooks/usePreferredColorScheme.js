import { useEffect, useState } from 'react';

export default function usePreferredColorScheme() {
  const [preferredColorScheme, setPreferredColorscheme] = useState('light');

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = () => {
      setPreferredColorscheme(mediaQueryList.matches ? 'light' : 'dark');
    };

    mediaQueryList.addEventListener('change', handleChange);
    handleChange();

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return preferredColorScheme;
}
