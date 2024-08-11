'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Box, Typography, Grid, Button, Paper, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
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
  const primaryColor = formData.primaryColor || "black"; // Default to black if formData.primaryColor is not set
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    const isValid = formData.chatbotName && formData.primaryColor && formData.welcomeMessage && formData.language;
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box sx={{ maxWidth: "600px", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: primaryColor, fontWeight: 'bold', mb: 4, textAlign: 'center' }}
            >
              Customize Your Chatbot
            </Typography>
          </motion.div>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 4, // Increased border radius for more curved edges
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)", // Increased shadow
              backgroundColor: "#ffffff",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Primary Color"
                  type="color"
                  value={formData.primaryColor || '#000000'} // Default color
                  onChange={(e) => onChange('primaryColor', e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: <ColorLensIcon sx={{ mr: 1, color: "black" }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Welcome Message"
                  value={formData.welcomeMessage || ''} // Use empty string if undefined
                  onChange={(e) => onChange('welcomeMessage', e.target.value)}
                  variant="outlined"
                  multiline
                  rows={4}
                  InputProps={{
                    startAdornment: <MessageIcon sx={{ mr: 1, color: "black" }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="language-select-label">Language</InputLabel>
                  <Select
                    labelId="language-select-label"
                    value={formData.language || ''}
                    onChange={(e) => onChange('language', e.target.value)}
                    label="Language"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                    <MenuItem value="zh">Chinese</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button onClick={onBack} variant="outlined" sx={{ color: "black", borderColor: "black", borderRadius: '16px', fontWeight: 700 }}>
                Back
              </Button>
              <Button onClick={onNext} variant="contained" sx={{ bgcolor: "black", '&:hover': { bgcolor: `${"black"}CC` }, borderRadius: '16px', fontWeight: 700 }} disabled={!isFormValid}>
                Next
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ChatbotCustomization;
