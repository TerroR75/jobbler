import { Box, Typography } from '@mui/material';
import { useAuthUser } from 'react-auth-kit';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { classes } from '../styles/classes';

function Dashboard() {
  const auth = useAuthUser();

  return (
    <Box sx={classes.flexRow}>
      <Sidebar />
      <Box sx={classes.fullViewSize}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
