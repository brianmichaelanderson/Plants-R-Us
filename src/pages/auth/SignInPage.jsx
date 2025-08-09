import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';

const SignInPage = () => {
  return (
      <FormContainer>
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
