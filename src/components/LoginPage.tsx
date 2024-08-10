"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Link,
  Paper,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";

interface LoginPageProps {
  formData?: {
    primaryColor?: string;
  };
  onNext: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  formData = {},
  onNext,
  onBack,
}) => {
  const [tabValue, setTabValue] = useState(0);
  const primaryColor = formData.primaryColor || "#000000";

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onNext();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Centers the content horizontally and vertically
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ mb: 3, color: primaryColor }}
        >
          WingMan Ai
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{ mb: 3 }}
        >
          <Tab
            label="SIGN IN"
            sx={{
              color: primaryColor,
              "&.Mui-selected": { color: primaryColor },
            }}
          />
          <Tab
            label="SIGN UP"
            sx={{
              color: primaryColor,
              "&.Mui-selected": { color: primaryColor },
            }}
          />
        </Tabs>
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              margin="normal"
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
