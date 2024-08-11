import React from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

interface ReviewProps {
  formData: any;
  onNext: () => void;
  onBack: () => void;
}

const languageMap: { [key: string]: string } = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  zh: "Chinese",
};

const Review: React.FC<ReviewProps> = ({ formData = {}, onNext, onBack }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box sx={{ maxWidth: "800px", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "black",
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
            }}
          >
            Review Your Chatbot
          </Typography>
        </motion.div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Business Information
              </Typography>
              <Typography>Name: {formData.businessName || "N/A"}</Typography>
              <Typography>Industry: {formData.industry || "N/A"}</Typography>
              <Typography>Business Information: {formData.businessInfo || "N/A"}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Chatbot Customization
              </Typography>
              <Typography>Name: {formData.chatbotName || "N/A"}</Typography>
              <Typography>Primary Color: {formData.primaryColor || "N/A"}</Typography>
              <Typography>Welcome Message: {formData.welcomeMessage || "N/A"}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Language
              </Typography>
              <Typography>{languageMap[formData.language] || "N/A"}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Uploaded Data
              </Typography>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            onClick={onBack}
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
            }}
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            variant="contained"
            sx={{
              bgcolor: "black",
              "&:hover": {
                bgcolor: "#333333CC",
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;