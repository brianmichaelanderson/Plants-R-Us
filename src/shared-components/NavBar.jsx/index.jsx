import SessionContext from 'contexts/SessionContext';
import { useContext } from 'react';

const NavBar = () => {
  const { username } = useContext(SessionContext);

  return (
    <div className='bg-emerald-800 flex justify-center font-lato'>
      <div className='text-white font-playfair flex items-center justify-between w-full max-w-5xl mx-8 my-4 text-3xl border border-red-400'>
        <div className='flex items-center p-3'>
          <img
            src='https://static-task-assets.react-formula.com/capstone_logo_light.png'
            className='w-10 mr-3'
          />
          Rica's Plants
        </div>
        <div className=''>
          <button className="text-emerald-200 text-xl pr-3 flex items-center">
            <i className='mr-2 text-xl fa-solid fa-user'></i>
            {username}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
