import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#000040',
    color: 'white',
  },
});

const Sidebar = ({ mobileOpen, onDrawerToggle, isMobile }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} />, path: '/dashboard' },
    { text: 'Profile', icon: <AccountCircleIcon sx={{ color: 'white' }} />, path: '/dashboard/profile' },
    { text: 'Logout', icon: <LogoutIcon sx={{ color: 'white' }} />, action: handleLogout },
  ];

  const drawerContent = (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ justifyContent: 'center', backgroundColor: 'inherit' }}>
        <Typography variant="h6" noWrap>
          Client Dashboard
        </Typography>
      </Toolbar>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={item.action || (() => navigate(item.path))}
            sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledDrawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={onDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
      }}
    >
      {drawerContent}
    </StyledDrawer>
  );
};

export default Sidebar;