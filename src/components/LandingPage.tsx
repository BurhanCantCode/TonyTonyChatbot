"use client";

import React from "react";
import { Typography, Button, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import screenshot from "../app/BOT.png"; // Import your image

interface LandingPageProps {
  formData?: {
    primaryColor?: string;
  };
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ formData = {}, onNext }) => {
  const primaryColor = formData.primaryColor || "#000000"; // Default to black if formData.primaryColor is not set
  const highlightColor = "#00FF00"; // Green color for highlighting

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff", // White background
        paddingTop: { xs: "60px", md: "0" }, // Add padding from top on smaller screens
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  color: primaryColor,
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  textAlign: { xs: "center", md: "left" }, // Center text on mobile, left on larger screens
                  fontSize: { xs: "3rem", md: "3.5rem" }, // Slightly larger text on larger screens
                }}
              >
                WingMan Ai
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: "text.primary",
                  fontFamily: "Roboto, sans-serif",
                  textAlign: { xs: "center", md: "left" }, // Center text on mobile, left on larger screens
                  fontSize: { xs: "1rem", md: "1.75rem" }, // Slightly larger text on larger screens
                }}
              >
                Create your personalized AI-powered Customer Support chatbot in{" "}
                <span style={{ color: highlightColor, fontWeight: "bold" }}>
                  60
                </span>{" "}
                seconds
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", md: "block" }, // Flexbox for smaller screens, block for larger screens
                  justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens, left align on larger screens
                  mt: 2, // Margin top to separate from other elements
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={onNext}
                  sx={{
                    backgroundColor: primaryColor,
                    color: "#fff", // White text
                    fontSize: { xs: "0.875rem", md: "1rem" }, // Smaller font size on mobile
                    "&:hover": {
                      backgroundColor: `${primaryColor}CC`, // Slightly transparent color on hover
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={screenshot.src} // Use the imported image
                alt="Chatbot Screenshot"
                style={{
                  width: "100%",
                  maxWidth: "400px", // Reduce the width on larger screens
                  borderRadius: "8px",
                  padding: "20px",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
