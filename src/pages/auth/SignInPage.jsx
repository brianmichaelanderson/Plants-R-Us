import { Link, useLocation } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';

const SignInPage = () => {
    const location = useLocation();

  return (
      <FormContainer>
        {/* use the 'optional chaining operator' to return undefined instead of throwing a run-time error if location.state is undefined or null. */}
        {location.state?.accountCreated && <div className="border border-emerald-700 rounded-md flex justify-center m-4 text-emerald-800 bg-emerald-100 p-2">Account created! Please sign in.</div>}
        <AuthForm
          fields={[
            { label: 'username', type: 'text' },
            { label: 'password', type: 'password' },
          ]}
          submitButtonLabel='Sign In'
        />
        <Link className='flex justify-center text-emerald-500 underline' to="/signup">
          create an account
        </Link>
      </FormContainer>
  );
};

export default SignInPage;
