import React, { useState, useCallback } from 'react';
import { Box, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header onDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
      <MainContent>
        <Outlet /> 
      </MainContent>
    </Box>
  );
};

export default Dashboard;