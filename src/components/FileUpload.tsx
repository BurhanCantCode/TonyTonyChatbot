'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface DataUploadProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const DataUpload: React.FC<DataUploadProps> = ({ formData, onChange, onNext, onBack }) => {
  const [dragActive, setDragActive] = useState(false);
  const primaryColor = '#FF4081';

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    onChange('files', Array.from(files));
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: primaryColor, fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Upload Your Data
        </Typography>
      </motion.div>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: '16px',
          border: '2px dashed',
          borderColor: dragActive ? primaryColor : 'grey.300',
          bgcolor: dragActive ? 'rgba(255, 64, 129, 0.05)' : 'background.paper',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          onChange={handleChange}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label htmlFor="file-upload" style={{ display: 'block' }}>
          <CloudUploadIcon sx={{ fontSize: 48, color: primaryColor, mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Drag and drop files here or click to upload
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Supported file types: .txt, .pdf, .doc, .docx
          </Typography>
        </label>
      </Paper>
      {formData && formData.files && formData.files.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>Uploaded File:</Typography>
          <Paper elevation={1} sx={{ p: 2, borderRadius: '8px' }}>
            <Typography>{formData.files[0].name}</Typography>
          </Paper>
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button onClick={onBack} variant="outlined" sx={{ color: primaryColor, borderColor: primaryColor }}>
          Back
        </Button>
        <Button onClick={onNext} variant="contained" sx={{ bgcolor: primaryColor, '&:hover': { bgcolor: `${primaryColor}CC` } }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DataUpload;
