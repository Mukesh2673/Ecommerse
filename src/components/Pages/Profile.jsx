import React from 'react';
import { Typography, Box } from '@mui/material';

const Profile = () => (
  <Box sx={{ textAlign: 'center', mb: 3 }}>
    <Typography variant="h4" gutterBottom>
      Your Profile
    </Typography>
    <Typography variant="body1">
      This is where you can view and edit your profile information.
    </Typography>
  </Box>
);

export default Profile;