import React from 'react';
import { Container, Grid, Typography, Box, Select, MenuItem, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, name: 'Organic Cotton Tee', price: '$45.00', image: 'https://placehold.co/400x500/F0F0F0/333?text=Organic+Tee&font=Inter' },
  { id: 2, name: 'Relaxed Fit Hoodie', price: '$90.00', image: 'https://placehold.co/400x500/EAEAEA/333?text=Relaxed+Hoodie&font=Inter' },
  { id: 3, name: 'Linen Blend Shirt', price: '$75.00', image: 'https://placehold.co/400x500/F5F5F5/333?text=Linen+Shirt&font=Inter' },
  { id: 4, name: 'Everyday Canvas Tote', price: '$50.00', image: 'https://placehold.co/400x500/E0E0E0/333?text=Canvas+Tote&font=Inter' },
  { id: 5, name: 'Slim Tapered Chinos', price: '$85.00', image: 'https://placehold.co/400x500/DBDBDB/333?text=Slim+Chinos&font=Inter' },
  { id: 6, name: 'Merino Wool Scarf', price: '$60.00', image: 'https://placehold.co/400x500/D1D1D1/333?text=Wool+Scarf&font=Inter' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

const NewArrivals = () => {
  return (
    <Box py={5}>
      <Container maxWidth="xl">
        <Box mb={4}>
          <Typography variant="h2" fontWeight={600} paddingTop={5} align='center'>New Arrivals</Typography>
          <Box mt={1} color="text.secondary">
            <Typography variant="body2" component="span"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a> &gt; </Typography>
            <Typography variant="body2" component="span">New Arrivals</Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" mb={4} rowGap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Filter by:</Typography>
            <Select size="small" defaultValue="All">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Tops">Tops</MenuItem>
              <MenuItem value="Bottoms">Bottoms</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Select>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Sort by:</Typography>
            <Select size="small" defaultValue="Newest">
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="PriceLow">Price: Low to High</MenuItem>
              <MenuItem value="PriceHigh">Price: High to Low</MenuItem>
            </Select>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {PRODUCTS.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    boxShadow: 'none',
                    borderRadius: 0,
                    '&:hover img': {
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  <Box overflow="hidden">
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        width: '354px',
                        aspectRatio: '4 / 5',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ px: 0, pt: 1, pb: 2 }}>
                    <Typography variant="body1" fontWeight={500}>{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{product.price}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewArrivals;
