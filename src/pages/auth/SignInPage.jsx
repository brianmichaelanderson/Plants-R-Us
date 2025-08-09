import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from './AuthForm.jsx';
import FormContainer from './AuthForm.jsx/FormContainer.jsx';
import * as userService from 'services/user.js';

const SignInPage = () => {
  const [error, setError] = useState('');
  const location = useLocation();

  return (
    <FormContainer>
      {error && <div className='text-center text-red-600 font-lato mt-4 mb-3'>{error}</div>}
      {/* use the 'optional chaining operator' to return undefined instead of throwing a run-time error if location.state is undefined or null. */}
      {location.state?.accountCreated && (
        <div className='border border-emerald-700 rounded-md flex justify-center m-4 text-emerald-800 bg-emerald-100 p-2'>
          Account created! Please sign in.
        </div>
      )}
      <AuthForm
        fields={[
          { label: 'username', type: 'text' },
          { label: 'password', type: 'password' },
        ]}
        submitButtonLabel='Sign In'
        onSubmit={async (values) => {
          // console.log(values)
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          if (response.status === 201) {
            console.log('Signed in');
            setError('')
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link
        className='flex justify-center text-emerald-500 underline'
        to='/signup'
      >
        create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
