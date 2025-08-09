import { Link } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';

const SignUpPage = () => {
  return (
    <FormContainer>
        <AuthForm
          fields={[
            { label: 'username', type: 'text' },
            { label: 'password', type: 'password' },
            { label: 'confirm password', type: 'password' },
          ]}
          submitButtonLabel='Create Account'
          onSubmit={(values) => {
            console.log('Submitted values = ', values)
            console.log('values.password', values.password)

          }}
        />
    <Link className="flex justify-center text-emerald-500 font-playfair underline" to="/">sign-in</Link>
    </FormContainer>
  );
};

export default SignUpPage;
