import { RemoveScroll } from 'react-remove-scroll';
import { useState, useEffect, useContext, useCallback } from 'react';
import CartItem from './CartItem';
import * as cartService from 'services/cart.js';
import SessionContext from 'contexts/SessionContext';
import LoadingSpinner from 'shared-components/LoadingSpinner';

export const CartModal = (props) => {
  const { setCartModalOpen } = props;
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(SessionContext);

  //useCallback meoizes the function so its reference stays stable across re-renders (unless dependencies change). Useful when passing the function to useEffect. It prevents unnecessary re-renders caused by a new function reference - can cause infinite loops in useEffect.
  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    console.log('getCart response.status', response.status);
    const data = await response.json();
    console.log('CartModal.jsx data from response.json() = ', data);
    setCartItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

 
    let totalItems = 0;
    let subTotal =0;
    for (let item of cartItems) {
      totalItems += item.quantity;
      subTotal += item.quantity * item.price_per_unit
    }

  
  return (
        <div className='flex flex-col w-full max-w-xl h-screen bg-white'>
          <div className='text-center py-7 text-white bg-emerald-700 text-2xl'>
            {username}'s Cart
          </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
              <div className='flex-1 overflow-y-scroll'>
                {cartItems.map((item) => (
                  <div key={item.id} className='mx-6 my-10 border-b-2 border-slate-200' >
                    {/* put a border under each cart item */}
                      <CartItem item={item} fetchCart={fetchCart} />
                  </div>
                ))}
          </div>
            <div className='flex flex-col border-t-2 border-slate-300 mx-4 my-10 '>
              <div className='text-slate-400 flex justify-between mx-8 my-4'>
                <div>{totalItems} items</div>
                <div>
                  subtotal:
                  <span className='text-slate-600 pl-2 text-lg'>${subTotal}</span>
                </div>
              </div>
              <button className='bg-emerald-600 text-white flex justify-center py-4 mx-8 rounded-full items-center'>
                Checkout
                <i className='fa-solid fa-arrow-right-long p-2 text-xl'></i>
              </button>
            </div>
            </>
            )}
          </div>

      );
};

export default CartModal;

