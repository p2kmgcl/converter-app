import { useState, useEffect, useMemo } from 'react';

export default function useCachedState(key, defaultValue) {
  const initialValue = useMemo(() => {
    const rawValue = localStorage.getItem(key);

    if (typeof defaultValue === 'boolean') {
      if (rawValue === 'false') {
        return false;
      }

      return !!rawValue;
    } else if (typeof defaultValue === 'string') {
      return rawValue || '';
    }

    return rawValue;
  }, [defaultValue, key]);

  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
