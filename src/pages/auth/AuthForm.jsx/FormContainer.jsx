const FormContainer = ({ children }) => {
  return (
    <div className='flex'>
      <div className='border border-purple-500'>
        {/* <img
          className=''
          src='https://static-task-assets.react-formula.com/capstone_sign_in_scene.png'
        /> */}
      </div>
      <div className='flex flex-col items-center justify-center bg-emerald-50 h-screen'>
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
