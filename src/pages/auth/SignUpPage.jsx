import AuthForm from './AuthForm.jsx';

const SignUpPage = () => {
  return (
    <div className='font-playfair text-slate-800 font-medium border border-red-500 flex justify-center items-center'>
      <AuthForm 
        fields={
          ([
            { label: 'username', type: 'text' },
            { label: 'password', type: 'password' },
            { label: 'confirm password',  type: 'password' },
          ])
        }
      />
    </div>
  );
};

export default SignUpPage;
