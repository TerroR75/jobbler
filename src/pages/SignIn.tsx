import { useEffect, useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import '../styles/background.css';

function SignIn(props: any) {
  const [loginForm, setLoginForm] = useState(true);
  const navigate = useNavigate();

  const auth = useAuthUser();

  useEffect(() => {
    if (auth()) {
      navigate('/dashboard');
    }
    console.log(props.darkModeEnabled);
  }, []);

  return (
    <div className={props.darkModeEnabled ? 'blob signInDark' : 'blob signInLight'}>
      {loginForm ? <Login changeForm={setLoginForm} /> : <Register changeForm={setLoginForm} />}
    </div>
  );
}

export default SignIn;
