import { Box, Paper } from '@mui/material';
import Summary from './Summary';
import { classes } from '../styles/classes';
function ApplSent() {
  return (
    <Box sx={[classes.gridColTwo, classes.fullRelatSize, { p: 3 }]}>
      <Summary />
      <Paper elevation={3} sx={{ m: 1, p: 3 }}>
        hehe
      </Paper>
    </Box>
  );
}

export default ApplSent;
