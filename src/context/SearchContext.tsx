import { createContext, useState } from 'react';

interface SearchState {
  query: string;
}

interface SearchContextProps {
  state: SearchState;
  setState: React.Dispatch<React.SetStateAction<SearchState>>;
}

const DEFAULT: SearchContextProps = {
  state: {
    query: 'computador',
  },
  setState: () => {},
};

const SearchContext = createContext<SearchContextProps>(DEFAULT);

const SearchStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT.state);

  return (
    <SearchContext.Provider value={{ state, setState }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchStateProvider };
export default SearchContext;
