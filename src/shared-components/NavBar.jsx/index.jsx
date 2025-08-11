import SessionContext from 'contexts/SessionContext';
import { useContext, useState } from 'react';

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
      <nav
        className='bg-emerald-800 flex justify-center font-lato'
        onMouseLeave={() => {
          setUserMenuOpen(false);
        }}
      >
        <div className='text-white font-playfair flex items-center justify-between w-full max-w-5xl mx-8 my-4 text-3xl'>
          <div className='flex items-center p-3'>
            <img
              src='https://static-task-assets.react-formula.com/capstone_logo_light.png'
              className='w-10 mr-3'
            />
            Rica's Plants
          </div>
          <div className='w-32 flex justify-center relative font-lato'>
            <button
              className='text-emerald-200 text-xl pr-3 flex items-center'
              onClick={() => {
                setUserMenuOpen(true);
              }}
            >
              <i className='mr-2 text-xl fa-solid fa-user'></i>
              {username}
            </button>
            {userMenuOpen && (
              <button
                className='absolute top-[32px] text-sm bg-white text-slate-600 px-2 rounded-md py-1'
                onClick={signOut}
              >
                <i className='fa-solid fa-arrow-right-from-bracket pr-1'></i>
                Sign-Out
              </button>
            )}
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
