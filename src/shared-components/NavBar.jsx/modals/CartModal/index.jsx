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
    <RemoveScroll>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/30 flex justify-end backdrop-blur-sm'>
        <div className='flex flex-col w-full max-w-xl h-screen bg-emerald-50 text-white'>
          <div className='text-center py-4 bg-emerald-700 text-2xl relative'>
            <button
              className='absolute right-0 top-0 p-1 text-emerald-400 text-3xl'
              onClick={() => setCartModalOpen(false)}
            >
              <i className='fa-solid fa-circle-xmark hover:text-emerald-500'></i>
            </button>
            {username}'s Cart
          </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
              <div className='flex-1 overflow-y-scroll'>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    {/* put a border under each cart item */}
                    <div className='mx-6 my-10 border-b-2 border-slate-200'>
                      <CartItem item={item} fetchCart={fetchCart} />
                    </div>
                  </div>
                ))}
          </div>
            <div className='flex flex-col border-t-2 border-slate-300 mx-4 my-10 '>
              <div className='text-slate-400 flex justify-between items-center mx-8 my-4'>
                <div>{totalItems} items</div>
                <div>
                  subtotal:
                  <span className='text-slate-600 pl-2 text-lg'>${subTotal}</span>
                </div>
              </div>
              <button className='bg-emerald-600 flex justify-center py-4 mx-8 rounded-full items-center'>
                Checkout
                <i className='fa-solid fa-arrow-right-long p-2 text-xl'></i>
              </button>
            </div>
            </>
            )}
          </div>
        </div>
       
        </RemoveScroll>
      );
};

export default CartModal;

