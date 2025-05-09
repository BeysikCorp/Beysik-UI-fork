import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Link,
  IconButton
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './LandingPage.css';
import HLogo from '../assets/Logo/hLogo.png'; // Import the logo

const categories = [
  {
    id: 1,
    name: 'JEANS',
    description: 'Soft comfortable jeans, made from organic cotton and produced responsibly in Europe.',
    image: 'https://placehold.co/600x800/e0e0e0/333?text=Jeans&font=Inter', // Replace with your actual image
  },
  {
    id: 2,
    name: 'OUTERWEAR',
    description: 'High quality and easy to style. All jackets are made from 100% recycled polyester or organic cotton.',
    image: 'https://placehold.co/600x800/e0e0e0/333?text=Outerwear&font=Inter', // Replace with your actual image
  },
  {
    id: 3,
    name: 'KNITWEAR',
    description: 'Soft responsible wool from Italy and organic cotton produced in Europe.',
    image: 'https://placehold.co/600x800/e0e0e0/333?text=Knitwear&font=Inter', // Replace with your actual image
  },
  {
    id: 4,
    name: 'SHIRTS',
    description: 'Airy and lightweight shirts made from GOTS-certified organic cotton.',
    image: 'https://placehold.co/600x800/e0e0e0/333?text=Shirts&font=Inter', // Replace with your actual image
  },
];

function LandingPage() {
  return (
      <Box className="main-box"> 
        {/* Navigation Bar */}
        <AppBar position="fixed" className="app-bar"> {/* Change position="sticky" to position="fixed" */}
          <Container maxWidth="xl">
            <Toolbar className="toolbar" disableGutters> 
              
            <Box className="header-icons-container"> 
                <IconButton size="large" color="inherit" aria-label="search">
                  <SearchOutlinedIcon />
                </IconButton>
                </Box>

              <Box className="nav-links-container"> 
                <Button className="nav-link-button">New Arrivals</Button> 
                <Button className="nav-link-button">Basics</Button> 
              </Box>

              <Link href="#" className="brand-logo" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                <img src={HLogo} alt="Beysik Logo" style={{ height: '30px' }} /> {/* Adjust height as needed */}
              </Link>

              <Box className="nav-links-container"> 
                <Button className="nav-link-button">Shop</Button> 
                <Button className="nav-link-button">About us</Button> 
              </Box>


                <Box className="header-icons-container"> 
                <IconButton size="large" color="inherit" aria-label="shopping bag">
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box className="hero-section"> 
          <Box className="hero-overlay">
          </Box> 
          <Container maxWidth="md" className="hero-content"> 
            <Typography variant="h1" component="h1" gutterBottom className="hero-title"> 
              Effortless Style
            </Typography>
            <Typography variant="body1" component="p" paragraph className="hero-subtitle"> 
              Discover curated collections of timeless pieces, designed for modern living.
            </Typography>
            <Button variant="contained" size="large" className="hero-button"> 
              Shop New Arrivals
            </Button>
          </Container>
        </Box>


       {/* vision statement */}
        <Box className="vision-statement">
          <Container maxWidth="md" className="vision-content">
            <Typography variant="h2" component="h2" align="center" className="vision-title">
              Our Vision
            </Typography>
            <Typography variant="body3" component="p" paragraph className="vision-text">
            To redefine everyday wear by blending minimalist design with bold individuality—empowering people to feel confident, comfortable, and unapologetically themselves in every thread.
            </Typography>
          </Container>
        </Box>

      {/* Category Showcase Section */}
      <Box className="category-showcase">
        <Container maxWidth="lg" className="category-container">
          <Typography variant="h2" component="h2" align="center" className="section-title">
            Our Collections
          </Typography>
          
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid item key={category.id} xs={12} sm={6} md={3}>
                <Box className="category-card">
                  <Box 
                    className="category-image-container"
                    sx={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    <Box className="category-overlay">
                      <Typography variant="h3" className="category-title">
                        {category.name}
                      </Typography>
                      <Typography variant="body2" className="category-description">
                        {category.description}
                      </Typography>
                      <Button className="category-button">See more</Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

        {/* Footer */}
        <Box component="footer" className="footer"> 
          <Container maxWidth="lg">
            <Box className="footer-links-container"> 
                <Link href="#" className="footer-link">Customer Care</Link> 
                <Link href="#" className="footer-link">Shipping & Returns</Link> 
                <Link href="#" className="footer-link">FAQ</Link> 
                <Link href="#" className="footer-link">About Us</Link> 
                <Link href="#" className="footer-link">Stockists</Link> 
            </Box>
            <Box className="social-icons-container"> 
                <Typography variant="body2" color="text.secondary">Follow Us: [Social Icons Here]</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              BASIC &copy; {new Date().getFullYear()} - Minimalist Fashion
            </Typography>
            <Typography variant="caption" display="block" color="text.secondary" sx={{mt:1}}>
              <Link href="#" className="footer-link" sx={{fontSize: '0.8rem'}}>Privacy Policy</Link> {/* Use className, sx for small override */}
              {' | '}
              <Link href="#" className="footer-link" sx={{fontSize: '0.8rem'}}>Terms of Service</Link> {/* Use className, sx for small override */}
            </Typography>
          </Container>
        </Box>
      </Box>
  );
}

export default LandingPage;
