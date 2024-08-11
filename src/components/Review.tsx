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
        minHeight: "100vh", // Ensure it takes full viewport height
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "white", // Optional: add background color for contrast
      }}
    >
      <Box
        sx={{
          maxWidth: "700px",

          width: "100%",

          padding: "20px", // Added padding inside the container
         
        }}
      >
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
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
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
                p: { xs: 2, sm: 3 },
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Business Information
              </Typography>
              <Typography>Name: {formData.businessName || "N/A"}</Typography>
              <Typography>Industry: {formData.industry || "N/A"}</Typography>
              <Typography>
                Business Information: {formData.businessInfo || "N/A"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Chatbot Customization
              </Typography>
              <Typography>Name: {formData.chatbotName || "N/A"}</Typography>
              <Typography>
                Primary Color: {formData.primaryColor || "N/A"}
              </Typography>
              <Typography>
                Welcome Message: {formData.welcomeMessage || "N/A"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3 },
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
                p: { xs: 2, sm: 3 },
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Changed to space-between for better alignment
            mt: 4,
          }}
        >
          <Button
            onClick={onBack}
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              borderRadius: "16px",
              width: "80px",
              fontWeight: 600, // Slightly bold
            }}
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": { bgcolor: "#333333CC" },
              borderRadius: "16px",
              width: "80px",
              fontWeight: 600, // Slightly bold
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
