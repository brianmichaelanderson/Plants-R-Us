import { useRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        onClick={(e) => {
            //e.target, not e.target.value because it's not capturing values
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
        className='fixed left-0 top-0 w-full h-screen bg-black/30 flex justify-end backdrop-blur-sm '
      >
        <button
          className='absolute right-0 top-0 p-1 text-emerald-400 text-3xl'
          onClick={onCloseClick}
        >
          <i className='fa-solid fa-circle-xmark hover:text-emerald-500 text-4xl'></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
