import { Box, IconButton, Typography } from '@mui/material';
import { useAuthUser } from 'react-auth-kit';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { classes } from '../styles/classes';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Dashboard() {
  const auth = useAuthUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={[classes.flexRow, { position: 'relative' }]}>
      <IconButton
        onClick={handleDrawerToggle}
        color='inherit'
        aria-label='open drawer'
        edge='start'
        sx={{ mr: 2, display: { md: 'none' }, position: 'absolute', top: 0, left: '16px' }}
      >
        <MenuIcon />
      </IconButton>
      <Sidebar user={{ name: auth()?.name }} mobileDrawer={{ modalState: mobileOpen, modalOpenClose: setMobileOpen }} />
      <Box sx={[classes.fullViewSize, { marginLeft: { md: 0, xs: '24px' } }]}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
