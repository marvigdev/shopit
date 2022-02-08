import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineLoading } from 'react-icons/ai';

interface ModalProps {
  title: string;
  toggleModal: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}

const body = document.querySelector('html')!;

const Modal = (props: ModalProps) => {
  useEffect(() => {
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black/70 flex justify-center items-center p-2'>
      {props.loading ? (
        <div className='flex items-center gap-4 text-white'>
          <AiOutlineLoading size='30px' className='animate-spin' />
          <span>Carregando informações...</span>
        </div>
      ) : (
        <div className='w-full max-h-full md:w-3/5 xl:w-1/4 bg-white shadow-2xl overflow-y-scroll'>
          <div className='flex justify-between items-center bg-primary p-2 text-white'>
            <span className='font-bold'>{props.title}</span>
            <AiOutlineClose
              onClick={props.toggleModal}
              size='20px'
              className='hover:cursor-pointer'
            />
          </div>
          <div className='p-2'>{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
