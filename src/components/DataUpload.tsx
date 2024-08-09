'use client';
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { parseCSV } from '../utils/csvParser';

interface DataUploadProps {
  formData: any;
  onUploadComplete: (data: any) => void; // Pass the parsed data to the parent component
  onNext: () => void;
  onBack: () => void;
}

const DataUpload: React.FC<DataUploadProps> = ({ formData, onUploadComplete, onNext, onBack }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const data = await parseCSV(file);
      setLoading(false);
      onUploadComplete(data); // Pass the parsed data to the parent component
      onNext(); // Move to the next step
    } catch (error) {
      console.error('Error parsing CSV file:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Upload Data
      </Typography>
      <input type="file" onChange={handleFileChange} />
      <Button
        onClick={handleUpload}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} /> : <CloudUploadIcon />}
        variant="contained"
        sx={{ mt: 2 }}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button onClick={onBack} variant="outlined">
          Back
        </Button>
        <Button onClick={onNext} variant="contained" disabled={loading}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DataUpload;