'use client';

import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface ReviewProps {
  formData: any;
  onNext: () => void;
  onBack: () => void;
}

const Review: React.FC<ReviewProps> = ({ formData = {}, onNext, onBack }) => {
  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: formData.primaryColor || '#4C5FD5', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Review Your Chatbot
        </Typography>
      </motion.div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Business Information</Typography>
            <Typography>Name: {formData.businessName || 'N/A'}</Typography>
            <Typography>Industry: {formData.industry || 'N/A'}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Chatbot Customization</Typography>
            <Typography>Name: {formData.chatbotName || 'N/A'}</Typography>
            <Typography>Primary Color: {formData.primaryColor || 'N/A'}</Typography>
            <Typography>Welcome Message: {formData.welcomeMessage || 'N/A'}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Uploaded Data</Typography>
            {formData.files && formData.files.length > 0 ? (
              <ul>
                {formData.files.map((file: File, index: number) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <Typography>No file uploaded</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button onClick={onBack} variant="outlined" sx={{ color: formData.primaryColor || '#4C5FD5', borderColor: formData.primaryColor || '#4C5FD5' }}>
          Back
        </Button>
        <Button onClick={onNext} variant="contained" sx={{ bgcolor: formData.primaryColor || '#4C5FD5', '&:hover': { bgcolor: (formData.primaryColor ? `${formData.primaryColor}CC` : '#3A4CB1') } }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
