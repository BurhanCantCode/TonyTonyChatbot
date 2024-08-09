'use client';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { generateChatbotResponse } from '../utils/azureOpenAI';

const Chatbot: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      businessName: 'Your Business Name',
      businessInfo: 'Your Business Info',
      salesDataContent: 'Your Sales Data Content',
    };

    const chatbotResponse = await generateChatbotResponse(prompt, formData); // Pass both arguments
    setResponse(chatbotResponse);
    setLoading(false);
  };

  return (
    <Box>
      <TextField
        label="Ask a question"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        InputProps={{
          style: { color: 'black' }, // Ensure text color is black
        }}
        InputLabelProps={{
          style: { color: 'black' }, // Ensure label color is black
        }}
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </Button>
      {response && (
        <Paper>
          <Typography>{response}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Chatbot;