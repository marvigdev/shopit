import { useEffect, useState } from 'react';

const useDebounce = <T,>(value: T, delay?: number): T => {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setState(value), delay || 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return state;
};

export default useDebounce;
