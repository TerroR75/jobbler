import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function SignIn() {
  const [loginForm, setLoginForm] = useState(true);

  return <div>{loginForm ? <Login changeForm={setLoginForm} /> : <Register changeForm={setLoginForm} />}</div>;
}

export default SignIn;
