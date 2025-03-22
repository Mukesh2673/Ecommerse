import React from 'react';
import { Typography, Box } from '@mui/material';

const DashboardHome = () => (
  <Box sx={{ textAlign: 'center', mb: 3 }}>
    <Typography variant="h4" gutterBottom>
      Welcome to Your Dashboard
    </Typography>
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="body1" paragraph>
        This is your client dashboard. Here you can:
      </Typography>
      <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
        <li>View and update your profile information</li>
        <li>Access your account details</li>
        <li>Manage your settings</li>
        <li>And more!</li>
      </Typography>
    </Box>
  </Box>
);

export default DashboardHome;