import { useContext, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import SearchContext from '../../context/SearchContext';
import { itemQueryResponse } from '../../DTO/itemQuery';
import useRequest from '../../hooks/useRequest';
import ProductListItem from './ProductListItem';

const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const ProductList = () => {
  const { state } = useContext(SearchContext);
  const [data, loading, setQuery] = useRequest<itemQueryResponse>({
    endpoint: endpoint + state.query,
  });

  useEffect(() => {
    setQuery(endpoint + state.query);
  }, [setQuery, state.query]);

  return (
    <>
      {loading ? (
        <div className='flex flex-col gap-2 items-center justify-center mt-10'>
          <AiOutlineLoading className='animate-spin' size='30px' />
          <span>Estamos carregando os produtos...</span>
        </div>
      ) : (
        <>
          <p className='text-center my-3'>
            {data?.paging.total} produtos encontrados.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
            {data?.results.map((item) => (
              <ProductListItem item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
