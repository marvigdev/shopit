import { BiCart } from 'react-icons/bi';
import useToggle from '../../hooks/useToggle';
import CartModal from './CartModal';

const CartButton = () => {
  const [modal, toggleModal] = useToggle();

  return (
    <>
      {modal && <CartModal toggleModal={toggleModal} />}
      <button
        onClick={toggleModal}
        className='px-2 py-1 flex items-center gap-2 text-white border-[1px] border-white/50'
      >
        <span>Ver carrinho</span>
        <BiCart />
      </button>
    </>
  );
};

export default CartButton;
