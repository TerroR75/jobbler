import {
  Container,
  Box,
  Paper,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  TextField,
  Button,
  Link,
  FormHelperText,
} from '@mui/material';
import { classes } from '../styles/classes';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

// VALIDATION ON CLIENT SIDE
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);
const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

function Login(props: any) {
  const [responseError, setResponseError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const response = await axios.post('/api/auth/login', values);
        setResponseError('');

        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { id: response.data.userId, name: response.data.name },
        });

        setIsButtonDisabled(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } catch (error) {
        if (error && error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        } else if (error && error instanceof Error) {
          throw new Error(error.message);
        }

        console.log(error);
      }
    },
  });

  function handleFormChange() {
    props.changeForm(false);
  }

  function handleHelpers(e: any) {
    if (responseError !== '') setResponseError('');
    formik.handleChange(e);
  }
  return (
    <Container sx={[classes.fullViewSize, classes.flexCol, classes.alignFlexCenter]}>
      <Box sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%', height: '100%' }]}>
        <form method='POST' onSubmit={formik.handleSubmit}>
          <Paper elevation={6} sx={[classes.fullRelatSize, { width: 'max(300px, 30vw)', height: 'max(450px, 30vh)', p: 3 }]}>
            <Typography variant='h4' textAlign='center' sx={{ m: 2 }}>
              Sign In
            </Typography>
            <FormControl sx={{ width: '100%' }} variant='filled'>
              <FormGroup sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%' }]}>
                <TextField
                  onChange={handleHelpers}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  margin='normal'
                  type='email'
                  id='login-email'
                  label='Email'
                />
                <TextField
                  onChange={handleHelpers}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  name='password'
                  margin='normal'
                  type='password'
                  id='login-password'
                  label='Password'
                />
                <FormHelperText sx={{ my: 2 }} error={true} id='my-helper-text'>
                  {responseError}
                </FormHelperText>
                <Typography>
                  Don't have an account?{' '}
                  <Link onClick={handleFormChange} sx={{ cursor: 'pointer' }} underline='hover'>
                    Register here!
                  </Link>{' '}
                </Typography>
                <Button type='submit' disabled={isButtonDisabled} sx={{ width: '150px', marginTop: 3 }} variant='contained'>
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </Paper>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
