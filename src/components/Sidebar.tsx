import { useState } from 'react';

// MUI Components
import { Drawer, Box, Typography, Divider, Toolbar } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// ICONS
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// REACT ROUTER
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';

const drawerWidth = 230;
const classes = {
  drawer: {
    padding: '50px',
    width: drawerWidth,
    '.MuiDrawer-paper': {
      width: drawerWidth,
      py: 3,
    },
  },
};

type Link = {
  name: string;
  icon: JSX.Element;
  path: string;
};
const links: Link[][] = [
  [
    {
      name: 'Sent',
      icon: <ScheduleSendOutlinedIcon color='primary' />,
      path: 'sent',
    },
    {
      name: 'Response',
      icon: <MarkEmailReadOutlinedIcon color='primary' />,
      path: 'response',
    },
    {
      name: 'Archived',
      icon: <Inventory2OutlinedIcon color='primary' />,
      path: 'archived',
    },
  ],
  [
    {
      name: 'Profile',
      icon: <AccountBoxOutlinedIcon color='primary' />,
      path: 'profile',
    },
    {
      name: 'Settings',
      icon: <SettingsOutlinedIcon color='primary' />,
      path: 'settings',
    },
  ],
];
function Sidebar(props: any) {
  const history = useNavigate();
  const signOut = useSignOut();

  const handleDrawerToggle = () => {
    props.mobileDrawer.modalOpenClose(!props.mobileDrawer.modalState);
  };

  const logout = () => {
    signOut();
    history('/signin');
  };

  const navLinks = (
    <div>
      {links[0].map((link, index): JSX.Element => {
        return (
          <ListItem
            onClick={() => {
              history(link.path);
            }}
            button
            key={index}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        );
      })}
    </div>
  );
  const settingsLinks = (
    <div>
      <Divider variant='middle' />
      {links[1].map((link, index): JSX.Element => {
        return (
          <ListItem
            onClick={() => {
              history(link.path);
            }}
            button
            key={index}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        );
      })}
      <ListItem onClick={logout} button>
        <ListItemIcon>
          <LogoutOutlinedIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Logout' />
      </ListItem>
    </div>
  );

  return (
    <div>
      <Drawer sx={[classes.drawer, { display: { xs: 'none', md: 'block' } }]} anchor='left' variant='permanent'>
        <Toolbar>
          <Typography variant='h6'>Hi, {props.user.name}!</Typography>
        </Toolbar>
        <Box>{navLinks}</Box>
        <Box sx={{ marginTop: 'auto' }}>{settingsLinks}</Box>
      </Drawer>
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        open={props.mobileDrawer.modalState}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6'>Hi, {props.user.name}!</Typography>
        </Toolbar>
        <Box>{navLinks}</Box>
        <Box sx={{ marginTop: 'auto' }}>{settingsLinks}</Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;
