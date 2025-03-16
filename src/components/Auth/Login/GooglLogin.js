// src/components/GoogleLoginButton.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from '../../services/firebase';
import axios from 'axios';
import {
  Button,
  styled,
  CircularProgress,
} from '@mui/material';
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#4285F4"
      d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9.18v3.4809h4.8436c-.2091 1.125-.8427 2.0782-1.7964 2.7173v2.2582h2.9082c1.7018-1.5664 2.6818-3.8745 2.6818-6.6155z"
    />
    <path
      fill="#34A853"
      d="M9.18 18c2.43 0 4.4673-.8064 5.9564-2.1809l-2.9082-2.2582c-.8064.54-1.8373.8591-3.0482.8591-2.34 0-4.3282-1.5773-5.0364-3.6955H1.0818v2.3318C2.5618 15.7955 5.49 18 9.18 18z"
    />
    <path
      fill="#FBBC05"
      d="M4.1436 10.7955c-.18-.54-.2836-1.1136-.2836-1.7045s.1036-1.1645.2836-1.7045V5.0545H1.0818C.3918 6.4136 0 7.9455 0 9.5455s.3918 3.1318 1.0818 4.4909l3.0618-2.2409z"
    />
    <path
      fill="#EA4335"
      d="M9.18 3.6c1.32 0 2.5055.4545 3.4364 1.3455l2.58-2.58C13.6464.9818 11.61 0 9.18 0 5.49 0 2.5618 2.2045 1.0818 5.0545l3.0618 2.3318C4.8518 5.2773 6.84 3.6 9.18 3.6z"
    />
  </svg>
);
const StyledGoogleButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 20px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  borderColor: '#4285F4',
  color: '#4285F4',
  '&:hover': {
    borderColor: '#357AE8',
    backgroundColor: 'rgba(66, 133, 244, 0.04)',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
  '&:disabled': {
    borderColor: theme.palette.grey[400],
    color: theme.palette.grey[400],
  },
}));

const GoogleLoginButton = ({ onSuccess, onError, disabled }) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const token = await user.getIdToken();
        const response = await axios.post('http://localhost:5000/auth/google-signin', {
          token,
      });
      if (onSuccess) {
        onSuccess(response.data);
      }
     
    } catch (err) {
      console.error('Google sign-in error:', err);
      const errorMessage = 
        err.response?.data?.error || 
        err.message || 
        'Google sign-in failed. Please try again.';
      
      // Call error callback if provided
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledGoogleButton
      variant="outlined"
      fullWidth
      onClick={handleGoogleSignIn}
      startIcon={
        loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <GoogleIcon />
        )
      }
      disabled={disabled || loading}
    >
      {loading ? 'Processing...' : 'Sign in with Google'}
    </StyledGoogleButton>
  );
};

export default GoogleLoginButton;