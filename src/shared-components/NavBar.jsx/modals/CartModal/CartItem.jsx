import * as cartService from 'services/cart.js';

const CartItem = (props) => {
  const { item, fetchCart } = props;

  return (
    <div className='flex m-4 mb-8'>
      <img className='w-28 rounded-md' src={item.image_src} />
      <div className='mx-4 flex justify-between flex-1'>
        <div>
          <div className='text-emerald-700 font-playfair'>
            <div className=''>{item.plant_name}</div>
          </div>
          <div className='flex text-slate-500'>
            <div className='w-12 text-slate-400'>qty:</div>
            <div>{item.quantity}</div>
          </div>
          <div className='flex text-slate-500'>
            <div className='w-12 text-slate-400'>color: </div>
            <div>{item.pot_color}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end  mr-4'>
        <div className='text-slate-500'>
          ${item.price_per_unit * item.quantity}
        </div>
        <button
          className='text-slate-400 hover:text-red-500'
          onClick={async () => {
            const response = await cartService.removeItemFromCart({
              cartItemId: item.id,
            });
            console.log('removeItemFromCart response.status = ', response.status)
            // fetch cart items to refresh after deletion completes
            fetchCart();
          }}
        >
          <i className='fa-solid fa-trash pr-2 '></i>
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
