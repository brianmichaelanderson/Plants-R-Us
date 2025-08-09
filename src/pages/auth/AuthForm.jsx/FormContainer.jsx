const FormContainer = ({ children }) => {
  return (
    <div className='flex'>
      <div className='hidden md:flex relative'>
        <img
          className='h-screen object-cover'
          src='https://static-task-assets.react-formula.com/capstone_sign_in_scene.png'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/10'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-emerald-600/15'></div>
      </div>
      <div className='flex flex-col items-center justify-center bg-emerald-50 h-screen flex-1'>
        <img
          className='w-24 m-2'
          src='https://static-task-assets.react-formula.com/capstone_logo_dark.png
        '
        />
        <div className='text-emerald-700 font-playfair text-2xl'>
          Rica's Plants
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
