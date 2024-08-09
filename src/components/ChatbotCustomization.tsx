'use client';

import React from 'react';
import { TextField, Box, Typography, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MessageIcon from '@mui/icons-material/Message';

interface ChatbotCustomizationProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const ChatbotCustomization: React.FC<ChatbotCustomizationProps> = ({ formData = {}, onChange, onNext, onBack }) => {
  const primaryColor = formData.primaryColor || '#4C5FD5'; // Default to #4C5FD5 if formData.primaryColor is not set

  return (
    <Box sx={{ padding: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: primaryColor, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Customize Your Chatbot
        </Typography>
      </motion.div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', height: '100%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <TextField
              fullWidth
              label="Chatbot Name"
              value={formData.chatbotName || ''} // Use empty string if undefined
              onChange={(e) => onChange('chatbotName', e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: <ChatBubbleOutlineIcon sx={{ mr: 1, color: primaryColor }} />,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', height: '100%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <TextField
              fullWidth
              label="Primary Color"
              type="color"
              value={formData.primaryColor || '#000000'} // Default color
              onChange={(e) => onChange('primaryColor', e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: <ColorLensIcon sx={{ mr: 1, color: primaryColor }} />,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', height: '100%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <TextField
              fullWidth
              label="Welcome Message"
              value={formData.welcomeMessage || ''} // Use empty string if undefined
              onChange={(e) => onChange('welcomeMessage', e.target.value)}
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                startAdornment: <MessageIcon sx={{ mr: 1, color: primaryColor }} />,
              }}
            />
          </Paper>
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

export default ChatbotCustomization;
