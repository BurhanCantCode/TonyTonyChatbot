'use client';

import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import BusinessInfo from './BusinessInfo';
import ChatbotCustomization from './ChatbotCustomization';
import DataUpload from './DataUpload';
import Review from './Review';
import ChatbotPreview from './ChatbotPreview';

interface FormData {
  businessInfo: string;
  businessName?: string;
  industry?: string;
  chatbotName?: string;
  salesDataContent?: any;
  files?: File[];
  language?: string;
  [key: string]: any; // For other dynamic fields
}

const ChatbotCreator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ businessInfo: '' });
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleUploadComplete = (data: any, files: File[]) => {
    setFormData((prevData) => ({
      ...prevData,
      salesDataContent: data, // Store the parsed data in formData
      files: files, // Store the uploaded files in formData
    }));
    handleNext();
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
        {step === 0 && <LandingPage onNext={handleNext} />}
        {step === 1 && <LoginPage onNext={handleNext} onBack={handleBack} />}
        {step === 2 && <BusinessInfo formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <ChatbotCustomization formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />}
        {step === 4 && <DataUpload formData={formData} onUploadComplete={handleUploadComplete} onNext={handleNext} onBack={handleBack} />}
        {step === 5 && <Review formData={formData} onNext={handleNext} onBack={handleBack} />}
        {step === 6 && <ChatbotPreview formData={formData} onBack={handleBack} />}
      </Box>
    </ThemeProvider>
  );
};

export default ChatbotCreator;