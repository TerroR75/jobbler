import { useEffect, useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function SignIn() {
  const [loginForm, setLoginForm] = useState(true);
  const navigate = useNavigate();

  const auth = useAuthUser();

  useEffect(() => {
    if (auth()) {
      navigate('/dashboard');
    }
  }, []);

  return <div>{loginForm ? <Login changeForm={setLoginForm} /> : <Register changeForm={setLoginForm} />}</div>;
}

export default SignIn;
