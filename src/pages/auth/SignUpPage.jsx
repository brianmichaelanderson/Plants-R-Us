import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';

const SignUpPage = () => {
  return (
      <div className='font-playfair text-slate-800 font-medium flex justify-center items-center'>
    <FormContainer>
        <AuthForm
          fields={[
            { label: 'username', type: 'text' },
            { label: 'password', type: 'password' },
            { label: 'confirm password', type: 'password' },
          ]}
          submitButtonLabel='Create Account'
        />
    <Link className="flex justify-center text-emerald-500 font-playfair underline" to="/">sign-in</Link>
    </FormContainer>
      </div>
  );
};

export default SignUpPage;
