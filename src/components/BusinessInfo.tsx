'use client';

import React from 'react';
import { TextField, Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface BusinessInfoProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ formData = {}, onChange, onNext, onBack }) => {
  const primaryColor = formData.primaryColor || '#4C5FD5'; // Default to #4C5FD5 if formData.primaryColor is not set

  return (
    <Box sx={{ padding: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: primaryColor, fontWeight: 'bold', mb: 4 }}>
          Business Information
        </Typography>
      </motion.div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Business Name"
            value={formData.businessName || ''}
            onChange={(e) => onChange('businessName', e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Industry"
            value={formData.industry || ''}
            onChange={(e) => onChange('industry', e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button onClick={onBack} variant="outlined" sx={{ color: primaryColor, borderColor: primaryColor, borderRadius: '16px' }}>
          Back
        </Button>
        <Button onClick={onNext} variant="contained" sx={{ bgcolor: primaryColor, '&:hover': { bgcolor: `${primaryColor}CC` }, borderRadius: '16px' }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default BusinessInfo;