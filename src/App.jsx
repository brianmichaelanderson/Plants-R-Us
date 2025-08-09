import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import SessionContext from 'contexts/SessionContext';
import * as userService from 'services/user';

const App = () => {
  //looks in local storage to return a token or return null for the initial sessionToken state.
  const [sessionToken, setSessionToken] = useState(() =>
    userService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider
      value={{
        //decode sessionToken then pull the username from it
        username: jwtDecode(sessionToken).username,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage()
        }
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
