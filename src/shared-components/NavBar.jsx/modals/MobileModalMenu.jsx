import SessionContext from 'contexts/SessionContext';
import { useContext } from 'react';

const MobileModalMenu = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);

  return (
    <div className='flex flex-col items-start pt-12 text-emerald-200 bg-emerald-800 pr-10 pb-6 rounded-bl-lg shadow-md'>
      <div className='px-8 py-4 flex items-center justify-start'>
        <i className='mr-2 text-xl fa-solid fa-user'></i>
        {username}
      </div>
      <button
        className='px-8 py-4 flex items-center justify-start'
        onClick={signOut}
      >
        <i className='fa-solid fa-arrow-right-from-bracket pr-1 text-xl'></i>
        sign out
      </button>
      <button
        className='px-6 py-4 flex items-center justify-start'
        onClick={onCartOpenClick}
      >
        <i className='fa-solid fa-cart-shopping p-2 text-xl mr-2'></i>
        cart
      </button>
    </div>
  );
};
export default MobileModalMenu;
