import * as userService from './user';

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      Authorization: 'Bearer ' + VITE_API_KEY,
      'Content-Type': 'application/json',
    },
  };

  //Look for/get session token
  const sessionToken = userService.getSessionTokenStorage();

  //if there's a token, create a key in headers with the session token as the value.
  if (sessionToken) {
    options.headers['Capstone-Session'] = sessionToken;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
