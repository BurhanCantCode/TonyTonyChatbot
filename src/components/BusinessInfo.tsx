import React from "react";
import { TextField, Box, Typography, Grid, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";

interface BusinessInfoProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  formData = {},
  onChange,
  onNext,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", mb: 4, textAlign: "center" }}
            >
              Business Information
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
                  label="Business Name"
                  value={formData.businessName || ""}
                  onChange={(e) => onChange("businessName", e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Industry"
                  value={formData.industry || ""}
                  onChange={(e) => onChange("industry", e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Business Information"
                  value={formData.businessInfo || ""}
                  onChange={(e) => onChange("businessInfo", e.target.value)}
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button
                onClick={onBack}
                variant="outlined"
                sx={{ color: "black", borderColor: "black", borderRadius: "16px", fontWeight: 700 }}
              >
                Back
              </Button>
              <Button
                onClick={onNext}
                variant="contained"
                sx={{
                  bgcolor: "black",
                  "&:hover": { bgcolor: "#333333CC" },
                  borderRadius: "16px",
                  fontWeight: 700,
                }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default BusinessInfo;