import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SessionContext from 'contexts/SessionContext';

const RedirectToSigninIfSignedOut = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  //  console.log('sessionContext from RedirectToSigninIfSignedOut', sessionContext)

  useEffect(() => {
    if (username === null) {
      navigate('/');
    }
  }, [username]);

  return props.children;
};

//If checking sessionContext confirms there is a username/valid session, then useNavigate to plants route.

export default RedirectToSigninIfSignedOut;