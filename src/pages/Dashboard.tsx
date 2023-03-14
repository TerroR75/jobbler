import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const classes = {
  flex: {
    display: 'flex',
  },
  fullSize: {
    width: '100vw',
    height: '100vh',
  },
};

function Dashboard() {
  return (
    <Box sx={classes.flex}>
      <Sidebar />
      <Box sx={classes.fullSize}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
