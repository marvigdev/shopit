import { createContext, useState } from 'react';

interface CartState {
  idList: string[];
}

interface CartContextProps {
  state: CartState;
  addItem: (sku: string) => void;
  removeItem: (sku: string) => void;
}

const DEFAULT: CartContextProps = {
  state: { idList: [] },
  addItem: () => {},
  removeItem: () => {},
};

const CartContext = createContext<CartContextProps>(DEFAULT);

const CartStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT.state);

  const addItem = (sku: string) => {
    setState({ ...state, idList: [...state.idList, sku] });
  };

  const removeItem = (sku: string) => {
    setState({
      ...state,
      idList: state.idList.filter((id) => id !== sku),
    });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartStateProvider };
export default CartContext;
