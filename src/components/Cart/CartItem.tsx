import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { ProductDetailsResponse } from '../../DTO/productDetails';
import formatCurrency from '../../utils/formatCurrency';

interface CartItemProps {
  item: ProductDetailsResponse;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem } = useContext(CartContext);

  const removeFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className='grid grid-cols-4 gap-2 items-center my-3'>
      <img
        className='w-20 h-20 object-contain'
        src={item.pictures[0].url}
        alt={item.title}
      />
      <div className='flex flex-col gap-1 col-span-3'>
        <p className='line-clamp-2 text-sm'>{item.title}</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg'>{formatCurrency(item.price)}</p>
          <button
            className='text-sm underline text-red-400'
            onClick={removeFromCart}
          >
            Remover item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
