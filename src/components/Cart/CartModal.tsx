import { useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import { MultigetItemsResponse } from '../../DTO/multigetItems';
import useRequest from '../../hooks/useRequest';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Generic/Button';
import Modal from '../Generic/Modal';
import CartItem from './CartItem';

interface CartModalProps {
  toggleModal: () => void;
}

const endpoint = 'https://api.mercadolibre.com/items?ids=';
const CartModal = (props: CartModalProps) => {
  const { state } = useContext(CartContext);
  const [data, loading, setEndpoint] = useRequest<MultigetItemsResponse>({
    endpoint: endpoint + state.idList.join(','),
  });

  useEffect(() => {
    setEndpoint(endpoint + state.idList.join(','));
  }, [setEndpoint, state.idList]);

  const sum = data?.reduce((prev, curr) => prev + curr.body.price, 0);

  const copyCart = () => {
    let result = 'Minhas compras na shopit:\n\n';
    data?.forEach(
      (item) =>
        (result += `- ${item.body.title} - ${formatCurrency(
          item.body.price
        )}\n`)
    );
    result += `\nValor total da minha compra: ${formatCurrency(sum || 0)}`;

    navigator.clipboard.writeText(result).then(() => {
      alert('Compra copiada para a sua área de transferência.');
    });
  };

  return (
    <Modal
      toggleModal={props.toggleModal}
      title='Seu carrinho'
      loading={loading}
    >
      {state.idList.length ? (
        <>
          {data?.map((item) => (
            <CartItem item={item.body} />
          ))}
          <hr />
          <p className='my-3 text-xl font-bold text-center'>
            Valor total: {formatCurrency(sum || 0)}
          </p>
          <Button primary onClick={copyCart}>
            Copiar carrinho
          </Button>
        </>
      ) : (
        <>
          <p className='text-center my-4'>
            Você não tem nenhum item no carrinho!
          </p>
          <Button primary onClick={props.toggleModal}>
            Voltar para os produtos
          </Button>
        </>
      )}
    </Modal>
  );
};

export default CartModal;
