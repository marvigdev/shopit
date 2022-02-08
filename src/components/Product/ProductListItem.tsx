import { simplifiedItemResponse } from '../../DTO/itemQuery';
import useToggle from '../../hooks/useToggle';
import formatCurrency from '../../utils/formatCurrency';
import ProductDetailsModal from './ProductDetailsModal';

interface ProductListItemProps {
  item: simplifiedItemResponse;
}

const ProductListItem = ({ item }: ProductListItemProps) => {
  const [productModal, toggleModal] = useToggle();

  return (
    <>
      {productModal && (
        <ProductDetailsModal sku={item.id} toggleModal={toggleModal} />
      )}

      <div
        onClick={toggleModal}
        className='w-full border-[1px] border-gray-100 p-2 hover:cursor-pointer'
      >
        <img
          className='w-full max-w-xs m-auto'
          src={item.thumbnail}
          alt={item.title}
        />
        <span className='line-clamp-2 text-sm'>{item.title}</span>
        <span className='text-xl font-bold'>{formatCurrency(item.price)}</span>
      </div>
    </>
  );
};

export default ProductListItem;
