import { useState } from 'react';

const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [state, setState] = useState(defaultValue || false);

  const toggle = () => setState(!state);

  return [state, toggle];
};

export default useToggle;
