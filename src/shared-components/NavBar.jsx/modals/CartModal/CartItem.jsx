
export const CartModal = (props) => {
    const { username, cartModalOpen, setCartModalOpen } = props;

  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-black/30 flex justify-end backdrop-blur-sm'>
      <div className='w-full max-w-xl min-h-screen bg-white text-white'>
        <div className='flex justify-center py-4 bg-emerald-700 text-2xl relative'>
          {username}'s Cart
          <button className='absolute right-0 top-0 p-1 text-emerald-400 text-3xl'
          onClick={()=> setCartModalOpen(false)}
          >
            <i className='fa-solid fa-circle-xmark hover:text-emerald-500'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
