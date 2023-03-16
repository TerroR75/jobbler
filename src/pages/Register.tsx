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

function Register(props: any) {
  function handleFormChange() {
    props.changeForm(true);
  }
  return (
    <Container sx={[classes.fullViewSize, classes.flexCol, classes.alignFlexCenter]}>
      <Box sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%', height: '100%' }]}>
        <form>
          <Paper elevation={6} sx={[classes.fullRelatSize, { width: 'max(300px, 30vw)', height: 'max(600px, 30vh)', p: 3 }]}>
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
                <TextField margin='normal' type='text' id='login-name' label='Name' />
                <TextField margin='normal' type='email' id='login-email' label='Email' />
                <TextField margin='normal' type='email' id='login-email-confirm' label='Confirm email' />
                <TextField margin='normal' type='password' id='login-password' label='Password' />
                <TextField margin='normal' type='password' id='login-password-confirm' label='Confirm password' />
                <Button sx={{ width: '150px', marginTop: 3 }} variant='contained'>
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
