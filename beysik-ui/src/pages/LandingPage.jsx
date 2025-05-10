import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material'; 
import HeroBannerImage from '../assets/HeroBanner.jpg'; 

// Moved categories to a separate constant to improve readability
const CATEGORIES = [
  {
    id: 1,
    name: 'SHIRTS',
    description: 'Airy and lightweight shirts made from GOTS-certified organic cotton.',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2024/09/menswhitetees-2048px-02728.jpg?auto=webp&quality=75&width=1024', 
  },
  {
    id: 2,
    name: 'HOODIES',
    description: 'Cozy and sustainable hoodies made from recycled and organic fabrics.',
    image: 'https://zellbury.com/cdn/shop/files/MBH25001_-_NAVY_1.jpg?v=1731320050',
  },
  {
    id: 3,
    name: 'OUTERWEAR',
    description: 'High quality and easy to style. All jackets are made from 100% recycled polyester or organic cotton.',
    image: 'https://www.luciclothing.com/cdn/shop/products/basickimonojacket_2048x2048.jpg?v=1697793548',
  },
  {
    id: 4,
    name: 'PANTS',
    description: 'Comfortable and durable pants made from eco-friendly fabrics.',
    image: 'https://www.italiancolony.com/cdn/shop/files/0A0A9065.jpg?v=1696587359',
  },
];

function LandingPage() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Hero Section */}
      <Box 
        component="section"
        sx={{
          position: 'relative',
          height: '100vh',
          maxHeight: '900px',
          mb: 12.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${HeroBannerImage})`, // Use the imported image variable
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0, 0, 0, 0.3)',
            }
          }}
        />
        <Container 
          sx={{
            position: 'relative',
            zIndex: 2,
            p: 4,
            pt: 'calc(64px + 32px)',
          }}
        >
          <Typography 
            variant="h1" 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
              mb: 2,
            }}
          >
            Effortless Style
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              mb: 3,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Discover curated collections of timeless pieces, designed for modern living.
          </Typography>
          <Button 
            variant="contained"
            sx={{
              px: { xs: 3, md: 4 },
              py: 1.5,
              fontSize: '1rem',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 0.5,
              '&:hover': {
                bgcolor: '#444444',
              },
            }}
          >
            Shop New Arrivals
          </Button>
        </Container>
      </Box>

      {/* Vision Statement */}
      <Box 
        component="section" 
        sx={{ 
          py: 10,
          textAlign: 'center',
          bgcolor: '#f9f9f9',
        }}
      >
        <Container sx={{ maxWidth: '800px' }}>
          <Typography 
            variant="h2" 
            sx={{
              mb: 3,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                bgcolor: 'primary.main',
              }
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              mb: 2.5,
              color: '#444444',
              lineHeight: 1.6,
            }}
          >
            To redefine everyday wear by blending minimalist design with bold individuality—empowering 
            people to feel confident, comfortable, and unapologetically themselves in every thread.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              mb: 2.5,
              color: '#444444',
              lineHeight: 1.6,
            }}
          >
            Beysik Apparel is built on a dream of creating a brand that focuses on everyday life, on high-quality 
            natural materials, and on the people who make our clothes.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              mb: 2.5,
              color: '#444444',
              lineHeight: 1.6,
            }}
          >
            We believe that it is possible to make clothes that are infused with positive energy all around.
          </Typography>
        </Container>
      </Box>

      {/* Category Showcase Section */}
      <Box 
        component="section" 
        sx={{ 
          py: 10,
          bgcolor: '#fafafa',
        }}
      >
        <Container>
          <Box sx={{ width: '100%' }}>
            <Typography 
              variant="h2" 
              sx={{
                mb: 5,
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  bgcolor: 'primary.main',
                }
              }}
            >
              Our Collections
            </Typography>

            <Box 
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 3,
              }}
            >
              {CATEGORIES.map((category) => (
                <Box key={category.id}>
                  <Box 
                    sx={{
                      transition: 'all 0.3s ease',
                      borderRadius: 1,
                      overflow: 'hidden',
                      height: '100%',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Box 
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '350px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 1,
                        overflow: 'hidden',
                        backgroundImage: `url(${category.image})`,
                      }}
                    >
                      <Box 
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 3,
                          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
                          color: 'white',
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                          '.MuiBox-root:hover &': {
                            pb: 4,
                          },
                        }}
                      >
                        <Typography 
                          variant="h3" 
                          sx={{
                            fontSize: '1.4rem',
                            fontWeight: 600,
                            mb: 1,
                            letterSpacing: '1px',
                          }}
                        >
                          {category.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{
                            fontSize: '0.9rem',
                            mb: 2,
                            opacity: 0.9,
                            lineHeight: 1.4,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {category.description}
                        </Typography>
                        <Button 
                          variant="outlined"
                          sx={{
                            px: 3,
                            py: 1,
                            bgcolor: 'transparent',
                            color: 'white',
                            border: '1px solid white',
                            borderRadius: 0.5,
                            fontSize: '0.9rem',
                            '&:hover': {
                              bgcolor: 'rgba(255, 255, 255, 0.2)',
                              border: '1px solid white',
                            },
                          }}
                        >
                          Shop Now
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          pt: 7.5,
          pb: 3.75,
          bgcolor: '#f5f5f5',
          color: 'text.primary',
          textAlign: 'center',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Container>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 3 },
              mb: 3.75,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: 'text.secondary', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'text.primary',
                }
              }}
            >
              Customer Care
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: 'text.secondary', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'text.primary',
                }
              }}
            >
              Shipping & Returns
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: 'text.secondary', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'text.primary',
                }
              }}
            >
              FAQ
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: 'text.secondary', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'text.primary',
                }
              }}
            >
              About Us
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: 'text.secondary', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'text.primary',
                }
              }}
            >
              Stockists
            </Box>
          </Box>
          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="body2"
              sx={{
                color: '#777777',
                fontSize: '0.95rem',
              }}
            >
              Follow Us: [Social Icons Here]
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#777777',
              fontSize: '0.9rem',
              mb: 1.25,
            }}
          >
            BASIC &copy; {new Date().getFullYear()} - Minimalist Fashion
          </Typography>
          <Box sx={{ mt: 1.875 }}>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: '#777777', 
                textDecoration: 'none',
                fontSize: '0.8rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#444444',
                }
              }}
            >
              Privacy Policy
            </Box>
            <Box 
              component="span" 
              sx={{ 
                color: '#999999',
                mx: 1,
              }}
            >
              |
            </Box>
            <Box 
              component="a" 
              href="#" 
              sx={{ 
                color: '#777777', 
                textDecoration: 'none',
                fontSize: '0.8rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#444444',
                }
              }}
            >
              Terms of Service
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;