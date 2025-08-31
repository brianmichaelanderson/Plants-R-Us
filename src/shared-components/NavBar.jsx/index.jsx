import SessionContext from 'contexts/SessionContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './modals/CartModal';
import ModalWrapper from './modals/ModalWrapper';
import MobileModalMenu from './modals/MobileModalMenu';

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className='bg-emerald-800 flex justify-center font-lato'
        onMouseLeave={() => {
          setUserMenuOpen(false);
        }}
      >
        <div className='text-white font-playfair flex items-center justify-between w-full max-w-5xl mx-8 my-4 text-3xl'>
          <div className='flex items-center p-3'>
            <Link to='/plants'>
              <img
                src='https://static-task-assets.react-formula.com/capstone_logo_light.png'
                className='w-10 mr-3'
              />
            </Link>
            Plants-R-Us
          </div>
          <div className='flex justify-center items-center relative font-lato text-emerald-200 text-xl'>
            <button className='flex sm:hidden'
              onClick={() => {setMobileMenuOpen(true)}}
            >
              <i className='fa-solid fa-bars text-4xl p-4'></i>
            </button>
            <div className='sm:flex hidden'>
              <button
                className='pr-3 flex items-center'
                onClick={() => {
                  setUserMenuOpen(true);
                }}
              >
                <i className='mr-2 text-xl fa-solid fa-user'></i>
                {username}
              </button>
              {userMenuOpen && (
                <button
                  className='absolute -bottom-3 left-0 text-sm bg-white text-slate-600 px-2 rounded-md py-1'
                  onClick={signOut}
                >
                  <i className='fa-solid fa-arrow-right-from-bracket pr-1'></i>
                  Sign-Out
                </button>
              )}
              <button
                className='m-4 flex justify-center items-center hover:text-emerald-500'
                onClick={() => setCartModalOpen(true)}
              >
                <i className='fa-solid fa-cart-shopping p-2 text-xl'></i>
                cart
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => {setMobileMenuOpen(false)}}
        >
        <MobileModalMenu 
        onCartOpenClick={() => {setCartModalOpen(true)}}
        />
      </ModalWrapper>
      <ModalWrapper
        isOpen={cartModalOpen}
        onCloseClick={() => {
          setCartModalOpen(false);
        }}
      >
        <CartModal />
      </ModalWrapper>
    </>
  );
};

export default NavBar;
