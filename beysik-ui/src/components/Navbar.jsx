import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Button, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HLogo from '../assets/Logo/hLogo.png'; // Adjusted path relative to Navbar.jsx

// Reusable navigation link component
const NavLink = ({ children, to }) => (
  <Button 
    component={RouterLink}
    to={to}
    sx={{
      fontSize: '0.9rem',
      color: 'text.primary',
      px: 1.5,
      py: 0.75,
      '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: 'transparent',
      },
      '&:focus, &:active': {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        outline: 'none',
      },
      transition: 'transform 0.2s ease-in-out',
    }}
  >
    {children}
  </Button>
);

// Reusable header icon component
const HeaderIcon = ({ children }) => (
  <IconButton
    sx={{
      color: 'text.primary',
      p: 1,
    }}
  >
    {children}
  </IconButton>
);

function Navbar() {
  return (
    <Box 
      component="header"
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(15px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1.25,
            minHeight: '60px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HeaderIcon>
              <SearchOutlinedIcon />
            </HeaderIcon>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
            <NavLink to="/new-arrivals">New Arrivals</NavLink>
            <NavLink to="/basics">Basics</NavLink>
          </Box>

          <Box 
            component={RouterLink}
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <Box 
              component="img"
              src={HLogo}
              alt="Beysik Logo"
              sx={{ height: '30px', width: 'auto' }}
            />
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About us</NavLink>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HeaderIcon>
              <ShoppingBagOutlinedIcon />
            </HeaderIcon>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;