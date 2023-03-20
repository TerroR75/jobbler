import { Box, Button, Divider, FormGroup, Paper, TextField, Typography } from '@mui/material';
import Summary from './Summary';
import ApplList from './ApplList';
import { classes } from '../styles/classes';

// New application form validation
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios, { AxiosError } from 'axios';
import { useAuthUser } from 'react-auth-kit';

// Yup schema
const validationSchema = yup.object({
  cName: yup.string().required('Name is required'),
  descr: yup.string(),
  dateSent: yup.date().required('Date is required'),
});

function ApplSent() {
  const auth = useAuthUser();
  const formik = useFormik({
    initialValues: {
      cName: '',
      descr: '',
      dateSent: '',
      userId: auth()?.id,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const response = await axios.post('/api/appl/create', values);
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

  return (
    <Box sx={[classes.gridRowTwo, classes.fullRelatSize, { p: 3 }]}>
      <Summary />
      <form method='POST' onSubmit={formik.handleSubmit}>
        <Paper elevation={3} sx={{ m: 1, p: 3, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          <Box sx={{ position: 'relative', py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography sx={classes.alignCenterAbsoluteTop} variant='h5' component='h2'>
              New
            </Typography>
            <FormGroup
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              <TextField
                onChange={formik.handleChange}
                error={formik.touched.cName && Boolean(formik.errors.cName)}
                helperText={formik.touched.cName && formik.errors.cName}
                name='cName'
                label='Company Name'
                margin='dense'
              />
              <TextField
                margin='dense'
                onChange={formik.handleChange}
                error={formik.touched.dateSent && Boolean(formik.errors.dateSent)}
                helperText={formik.touched.dateSent && formik.errors.dateSent}
                type='date'
                name='dateSent'
              />
            </FormGroup>
            <TextField
              onChange={formik.handleChange}
              helperText={formik.touched.descr && formik.errors.descr}
              sx={{ width: '100%' }}
              multiline={true}
              rows={5}
              type='text'
              name='descr'
              label='Description'
              margin='dense'
            />
            <Box sx={[classes.flexRow, classes.alignFlexCenter]}>
              <Button type='submit' sx={{ my: 2 }} variant='contained'>
                Add
              </Button>
            </Box>
          </Box>

          <Box sx={{ position: 'relative', flexGrow: 1 }}>
            <Typography sx={classes.alignCenterAbsoluteTop} variant='h5' component='h2'>
              List
            </Typography>
            <ApplList user={auth()} />
          </Box>
        </Paper>
      </form>
    </Box>
  );
}

export default ApplSent;
