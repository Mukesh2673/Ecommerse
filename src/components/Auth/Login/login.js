// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  InputAdornment,
  IconButton,
  styled,
  Paper,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleLoginButton from './GooglLogin';
import './style.css';
import { useNavigate } from 'react-router-dom';

// Styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    },
    '&.Mui-focused': {
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 20px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/auth/email-signin', {
        email,
        password,
      });
      setLoading(false);
      localStorage.setItem('jwtToken', response.data.data.jwtToken);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Sign-in failed');
    }
  };

  const handleGoogleSuccess = (data) => {
    if (data.success) {
      const token = data.data.authToken
      localStorage.setItem('jwtToken', token);
      navigate('/dashboard')

    }
  };

  const handleGoogleError = (errorMessage) => {
    setError(errorMessage);
  };




  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: '16px',
            width: '100%',
            background: (theme) =>
              `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Login User
            </Typography>
            {error && (
              <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <form onSubmit={handleEmailSignIn} style={{ width: '100%' }}>
              <StyledTextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
              />
              <StyledTextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ fontSize: '1.2rem' }} />
                        ) : (
                          <Visibility sx={{ fontSize: '1.2rem' }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <StyledButton
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign In
              </StyledButton>
            </form>

            <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
              OR
            </Typography>

            {/* <StyledButton
              variant="outlined"
              fullWidth
              onClick={handleGoogleSignIn}
              startIcon={
                <img
                  src="google-icon.png"
                  alt="Google"
                  style={{ width: '20px', height: '20px' }}
                />
              }
            >
              Sign in with Google
            </StyledButton> */}
            <GoogleLoginButton
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              disabled={loading}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;