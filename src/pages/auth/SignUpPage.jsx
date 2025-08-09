import { Link, useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';
import { useState } from 'react';
import * as userService from 'services/user.js';

const SignUpPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  return (
    <FormContainer>
      {(error && (
        <div className='text-center text-red-600 font-lato mt-4 mb-3'>
          {error}
        </div>
      ))}
      <AuthForm
        fields={[
          { label: 'username', type: 'text' },
          { label: 'password', type: 'password' },
          { label: 'confirm password', type: 'password' },
        ]}
        submitButtonLabel='Create Account'
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError('Username must be > 4 characters');
            return;
          }
          if (values.password.length < 4) {
            setError('password must be > 4 characters');
            return;
          }
          if (values.password !== values['confirm password']) {
            setError('passwords must match.');
            return;
          }
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });
          if (response.status === 201) {
            setError('');
            navigate('/', {state: { accountCreated: "true" }})
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link
        className='flex justify-center text-emerald-500 font-playfair underline'
        to='/'
      >
        sign-in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
