import Header from './components/Header/Header';
import ProductList from './components/Product/ProductList';
import QueryInput from './components/QueryInput';
import { CartStateProvider } from './context/CartContext';
import { SearchStateProvider } from './context/SearchContext';

function App() {
  return (
    <CartStateProvider>
      <Header />
      <div className='p-2 md:w-3/5 xl:w-3/5 m-auto'>
        <SearchStateProvider>
          <QueryInput />
          <ProductList />
        </SearchStateProvider>
      </div>
    </CartStateProvider>
  );
}

export default App;
