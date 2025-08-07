import AuthForm from './AuthForm.jsx';

const SignInPage = () => {
  return (
    <div className='font-lato text-slate-900 font-bold border border-blue-500 flex justify-center items-center'>
      <AuthForm
        fields={[
          { label: 'username', type: 'text' },
          { label: 'password', type: 'password'},
        ]}
                submitButtonLabel="Sign In"

      />
    </div>
  );
};

export default SignInPage;
