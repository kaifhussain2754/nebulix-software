import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon

const Navbar = ({ toggleColorScheme, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Hook to detect small screens
  const [visible, setVisible] = useState(true); // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar); // Clean up the event listener on unmount
    };
  }, [lastScrollY]);

  return (
    <AppBar position="fixed" style={{ backgroundColor: isDarkMode ? '#000000' : '#fcfbfc', transition: 'top 0.3s', top: visible ? '0' : '-64px' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/src/assets/nebulix.png" // Replace with your logo path
            alt="Nebulix Software Logo"
            style={{ width: '40px', marginRight: '16px' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: isDarkMode ? '#FFFFFF' : '#000000' }}>
            Nebulix Software
          </Typography>
        </Link>

        {/* Responsive Navigation Links */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}> {/* Aligns nav links to the right */}
          {!isSmallScreen && (
            <>
              <Button component={Link} to="/" color={isDarkMode ? 'inherit' : 'primary'}>Home</Button>
              <Button component={Link} to="/services" color={isDarkMode ? 'inherit' : 'primary'}>Services</Button>
              <Button component={Link} to="/about" color={isDarkMode ? 'inherit' : 'primary'}>About</Button>
              <Button component={Link} to="/pricing" color={isDarkMode ? 'inherit' : 'primary'}>Pricing</Button>
              <Button component={Link} to="/portfolio" color={isDarkMode ? 'inherit' : 'primary'}>Our Portfolio</Button>
              <Button component={Link} to="/Career" color={isDarkMode ? 'inherit' : 'primary'}>Career</Button>
              <Button component={Link} to="/contact-us" color={isDarkMode ? 'inherit' : 'primary'}>Contact Us</Button>
            </>
          )}
        </div>

        {/* Hamburger Menu for Small Screens */}
        {isSmallScreen && (
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={handleMenuClick} 
            aria-controls="simple-menu" 
            aria-haspopup="true"
          >
            <MenuIcon /> {/* Use MenuIcon component */}
          </IconButton>
        )}

        {/* Menu Items */}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/services">Services</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/pricing">Pricing</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/portfolio">Our Portfolio</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/Career">Career</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact-us">Contact Us</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
