import { RemoveScroll } from 'react-remove-scroll';
import { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem';
import * as cartService from 'services/cart.js';
import SessionContext from 'contexts/SessionContext';
import LoadingSpinner from 'shared-components/LoadingSpinner';

export const CartModal = (props) => {
  const { setCartModalOpen } = props;
  const [cartItems, setCartItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(SessionContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      console.log(response.status);
      const data = await response.json();
      console.log('data from response = ', data);
      setCartItems(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RemoveScroll>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/30 flex justify-end backdrop-blur-sm'>
        <div className='w-full max-w-xl min-h-screen bg-white text-white'>
          <div className='flex justify-center py-4 bg-emerald-700 text-2xl relative'>
            {username}'s Cart
            <button
              className='absolute right-0 top-0 p-1 text-emerald-400 text-3xl'
              onClick={() => setCartModalOpen(false)}
            >
              <i className='fa-solid fa-circle-xmark hover:text-emerald-500'></i>
            </button>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className='text-black'>
              {cartItems.map((item) => 
                <CartItem key={item.id} item={item} />
              )}
            </div>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;

// {!isLoading && cartItems.map((item, idx) => {
// <div key={[0].item.id}>
//   {item.id}
// </div>
// })}
