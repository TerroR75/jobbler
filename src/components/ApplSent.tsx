import { Box, Button, Divider, FormGroup, Paper, TextField, Typography } from '@mui/material';
import Summary from './Summary';
import { classes } from '../styles/classes';
import { useEffect } from 'react';

function ApplSent() {
  return (
    <Box sx={[classes.gridRowTwo, classes.fullRelatSize, { p: 3 }]}>
      <Summary />
      <Paper elevation={3} sx={{ m: 1, p: 3, display: 'grid', gridTemplateColumns: '5fr 10fr' }}>
        <Box sx={{ position: 'relative', py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={classes.alignCenterAbsoluteTop} variant='h4' component='h2'>
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
            <TextField id='cName' name='cName' label='Company Name' margin='dense' />
            <TextField type='date' id='dateSent' name='dateSent' margin='dense' />
          </FormGroup>
          <TextField
            sx={{ width: '100%' }}
            multiline={true}
            rows={5}
            type='text'
            id='dateSent'
            name='dateSent'
            label='Description'
            margin='dense'
          />
          <Box sx={[classes.flexRow, classes.alignFlexCenter]}>
            <Button sx={{ my: 2 }} variant='contained'>
              Add
            </Button>
          </Box>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Typography sx={classes.alignCenterAbsoluteTop} variant='h4' component='h2'>
            List
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ApplSent;
