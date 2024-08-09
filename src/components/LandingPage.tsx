'use client';

import React from 'react';
import { Typography, Button, Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface LandingPageProps {
  formData?: {
    primaryColor?: string;
  };
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ formData = {}, onNext }) => {
  const primaryColor = formData.primaryColor || '#000000'; // Default to black if formData.primaryColor is not set
  const highlightColor = '#00FF00'; // Green color for highlighting

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      backgroundColor: '#fff', // White background
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                sx={{ color: primaryColor, fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
              >
                WingMan Ai
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ mb: 4, color: 'text.primary', fontFamily: 'Roboto, sans-serif' }}
              >
                Create your personalized AI-powered Customer Support chatbot in{' '}
                <span style={{ color: highlightColor, fontWeight: 'bold' }}>60</span>{' '}
                seconds
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={onNext}
                sx={{
                  backgroundColor: primaryColor,
                  color: '#fff', // White text
                  '&:hover': {
                    backgroundColor: `${primaryColor}CC`, // Slightly transparent color on hover
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
