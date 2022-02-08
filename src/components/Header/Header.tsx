import CartButton from '../Cart/CartButton';

const Header: React.FC = () => {
  return (
    <div className='w-full bg-primary p-2 flex justify-between'>
      <h1 className='text-white text-2xl font-bold'>
        shop<span className='font-light'>it</span>
      </h1>
      <CartButton />
    </div>
  );
};

export default Header;
