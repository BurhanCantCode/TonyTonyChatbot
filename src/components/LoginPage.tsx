"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Tabs, Tab, Link, Paper, Alert } from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

interface LoginPageProps {
  formData?: {
    primaryColor?: string;
  };
  onNext: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ formData = {}, onNext, onBack }) => {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to hold error message
  const primaryColor = formData.primaryColor || "#000000";

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setErrorMessage(null); // Clear error message when tab changes
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(null); // Clear any existing error message

    try {
      if (tabValue === 0) {
        // Sign In
        await signInWithEmailAndPassword(auth, email, password);
        onNext();
      } else {
        // Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
        onNext();
      }
    } catch (error:any) {
      // Handle errors and set appropriate error message
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        setErrorMessage("Incorrect email ID or password.");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email format.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error:any) {
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3, color: primaryColor }}>
         Yapper AI
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab label="SIGN IN" sx={{ color: primaryColor, "&.Mui-selected": { color: primaryColor } }} />
          <Tab label="SIGN UP" sx={{ color: primaryColor, "&.Mui-selected": { color: primaryColor } }} />
        </Tabs>
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Email color="action" sx={{ mr: 1, color: primaryColor }} />
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Lock color="action" sx={{ mr: 1, color: primaryColor }} />
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: primaryColor,
                "&:hover": { bgcolor: primaryColor },
              }}
            >
              {tabValue === 0 ? "Sign In" : "Sign Up"}
            </Button>
            {tabValue === 0 && (
              <Link
                href="#"
                variant="body2"
                onClick={handleForgotPassword}
                sx={{
                  display: "block",
                  textAlign: "center",
                  color: primaryColor,
                }}
              >
                Forgot password?
              </Link>
            )}
          </form>
          <Button
            onClick={onBack}
            variant="outlined"
            sx={{ mt: 2, color: primaryColor, borderColor: primaryColor }}
          >
            Back
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
