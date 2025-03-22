import React from 'react';
import { Box, Container, Paper } from '@mui/material';

const MainContent = ({ children }) => (
  <Box
    component="main"
    sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3 },
        mt: 8, // Space for the AppBar
        width: '100%', // Full width on all screens
        display: 'flex', // Use flexbox to center content
        justifyContent: 'center', // Center horizontally
        boxSizing: 'border-box',
      }}
  >
    <Container maxWidth="lg" sx={{ mx: 'auto', px: { xs: 1, sm: 2 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, minHeight: '70vh', width: '100%' }}>
        {children}
      </Paper>
    </Container>
  </Box>
);

export default MainContent;