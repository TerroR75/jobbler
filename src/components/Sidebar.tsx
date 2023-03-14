// MUI Components
import { Drawer, Box, Typography, Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// ICONS
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// REACT ROUTER
import { useNavigate } from 'react-router-dom';

const drawerWidth = 250;
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

function Sidebar() {
  const history = useNavigate();
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

  return (
    <Drawer sx={classes.drawer} anchor='left' variant='permanent'>
      <Box>
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
      </Box>
      <Box sx={{ marginTop: 'auto' }}>
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
      </Box>
    </Drawer>
  );
}

export default Sidebar;
