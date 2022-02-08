import { useContext, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchContext from '../context/SearchContext';
import useDebounce from '../hooks/useDebounce';

const QueryInput = () => {
  const { setState, state } = useContext(SearchContext);

  const [query, setQuery] = useState<string>(state.query);
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    setState({
      query: debouncedQuery.trim() || 'computador',
    });
  }, [debouncedQuery, setState]);

  return (
    <div className='w-full border-2 border-gray-200 flex items-center gap-1 p-2 rounded-md mt-3'>
      <AiOutlineSearch />
      <input
        value={query}
        placeholder='Procurando por algo?'
        className='w-full outline-none'
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default QueryInput;
