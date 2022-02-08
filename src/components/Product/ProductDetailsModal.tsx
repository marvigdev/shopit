import { ProductDetailsResponse } from '../../DTO/productDetails';
import useRequest from '../../hooks/useRequest';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Generic/Button';
import Modal from '../Generic/Modal';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

interface ProductDetailsModalInterface {
  sku: string;
  toggleModal: () => void;
}

const endpoint = `https://api.mercadolibre.com/items/`;
const ProductDetailsModal = (props: ProductDetailsModalInterface) => {
  const { addItem } = useContext(CartContext);
  const [data, loading] = useRequest<ProductDetailsResponse>({
    endpoint: endpoint + props.sku,
  });

  const addToCart = () => {
    addItem(props.sku);
    props.toggleModal();
  };

  return (
    <Modal
      title='Detalhes do produto'
      toggleModal={props.toggleModal}
      loading={loading}
    >
      {data ? (
        <>
          <img
            src={data.pictures[0].url}
            alt={data.title}
            className='w-full max-w-xs m-auto'
          />
          <p className='text-sm mb-2'>{data.title}</p>
          <Button primary icon={<AiOutlinePlus />} onClick={addToCart}>
            Adicionar ao carrinho - {formatCurrency(data.price)}
          </Button>
          <div className='mt-2' />
          <a href={data.permalink} target='_blank' rel='noreferrer'>
            <Button icon={<BiLinkExternal />}>Ver no Mercado Livre</Button>
          </a>

          <hr className='my-3' />

          {data.attributes.map((attribute) => (
            <div className='my-2' key={attribute.id}>
              <p className='font-bold text-sm'>{attribute.name}</p>
              <p className='text-sm'>
                {attribute.value_name || 'Sem informação'}
              </p>
            </div>
          ))}
        </>
      ) : (
        <p>Não conseguimos carregar este produto :(</p>
      )}
    </Modal>
  );
};

export default ProductDetailsModal;
