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
  Tooltip,
} from '@mui/material';
import { classes } from '../styles/classes';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

// VALIDATION ON CLIENT SIDE
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import axios, { AxiosError } from 'axios';

YupPassword(yup);
const validationSchema = yup.object({
  name: yup.string().min(2, 'Minimum 2 characters length').max(24, 'Maximum 24 characters').required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  emailC: yup
    .string()
    .email('Enter a valid email')
    .oneOf([yup.ref('email'), ''], 'Emails must match')
    .required('Email confirmation is required'),
  password: yup
    .string()
    .password()
    .min(8, 'Minimum 8 characters length')
    .minUppercase(1, 'At least one (A-Z) letter required')
    .minNumbers(1, 'At least one number (0-9) required')
    .minSymbols(1, 'At least one symbol (!@#$%^&*()) required')
    .required('Password is required'),
  passwordC: yup
    .string()
    .password()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Password confirm is required'),
});

// COMPONENT
function Register(props: any) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      emailC: '',
      password: '',
      passwordC: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/auth/register', values);
        handleFormChange();
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
    props.changeForm(true);
  }

  function submitForm(e: any) {
    e.preventDefault();
    alert(e);
  }
  return (
    <Container sx={[classes.fullViewSize, classes.flexCol, classes.alignFlexCenter]}>
      <Box sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%', height: '100%' }]}>
        <form method='POST' onSubmit={formik.handleSubmit}>
          <Paper elevation={6} sx={[classes.fullRelatSize, { width: 'max(300px, 30vw)', height: 'max(700px, 30vh)', p: 3 }]}>
            <Tooltip placement='top' arrow title='Login Page'>
              <Button onClick={handleFormChange} sx={{ position: 'absolute', borderRadius: '50px' }}>
                <ArrowBackOutlinedIcon />
              </Button>
            </Tooltip>

            <Typography variant='h4' textAlign='center' sx={{ m: 2 }}>
              Register
            </Typography>
            <FormControl sx={{ width: '100%' }} variant='filled'>
              <FormGroup sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%' }]}>
                <TextField
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  margin='normal'
                  type='text'
                  id='login-name'
                  name='name'
                  label='Name'
                />
                <TextField
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  margin='normal'
                  type='email'
                  id='login-email'
                  name='email'
                  label='Email'
                />
                <TextField
                  onChange={formik.handleChange}
                  error={formik.touched.emailC && Boolean(formik.errors.emailC)}
                  helperText={formik.touched.emailC && formik.errors.emailC}
                  margin='normal'
                  type='email'
                  id='login-email-confirm'
                  name='emailC'
                  label='Confirm email'
                />
                <TextField
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  margin='normal'
                  type='password'
                  id='login-password'
                  name='password'
                  label='Password'
                />
                <TextField
                  onChange={formik.handleChange}
                  error={formik.touched.passwordC && Boolean(formik.errors.passwordC)}
                  helperText={formik.touched.passwordC && formik.errors.passwordC}
                  margin='normal'
                  type='password'
                  id='login-password-confirm'
                  name='passwordC'
                  label='Confirm password'
                />
                <Button type='submit' sx={{ width: '150px', marginTop: 3 }} variant='contained'>
                  register
                </Button>
              </FormGroup>
            </FormControl>
          </Paper>
        </form>
      </Box>
    </Container>
  );
}

export default Register;
