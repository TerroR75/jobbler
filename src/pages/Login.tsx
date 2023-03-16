import { Container, Box, Paper, Typography, FormControl, FormLabel, FormGroup, TextField, Button, Link } from '@mui/material';
import { classes } from '../styles/classes';

function Login(props: any) {
  function handleFormChange() {
    props.changeForm(false);
  }
  return (
    <Container sx={[classes.fullViewSize, classes.flexCol, classes.alignFlexCenter]}>
      <Box sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%', height: '100%' }]}>
        <form>
          <Paper elevation={6} sx={[classes.fullRelatSize, { width: 'max(300px, 30vw)', height: 'max(400px, 30vh)', p: 3 }]}>
            <Typography variant='h4' textAlign='center' sx={{ m: 2 }}>
              Sign In
            </Typography>
            <FormControl sx={{ width: '100%' }} variant='filled'>
              <FormGroup sx={[classes.flexCol, classes.alignFlexCenter, { width: '100%' }]}>
                <TextField margin='normal' type='email' id='login-email' label='Email' />
                <TextField margin='normal' type='password' id='login-password' label='Password' />
                <Typography>
                  Don't have an account?{' '}
                  <Link onClick={handleFormChange} sx={{ cursor: 'pointer' }} underline='hover'>
                    Register here!
                  </Link>{' '}
                </Typography>
                <Button sx={{ width: '150px', marginTop: 3 }} variant='contained'>
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
