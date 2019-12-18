import { useLayoutEffect, useRef } from 'react';

export default function useFocusOnMount() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    // We really want to do this just on first mount,
    // messing with user's focus is dangerous.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
