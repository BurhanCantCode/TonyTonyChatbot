import React from "react";
import { TextField, Box, Typography, Grid, Button } from "@mui/material";
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
  const primaryColor = formData.primaryColor || "#4C5FD5";

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          bgcolor: "white",
          padding: 4,
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
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
            }}
          >
            Business Information
          </Typography>
        </motion.div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Business Name"
              value={formData.businessName || ""}
              onChange={(e) => onChange("businessName", e.target.value)}
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Business Info"
            value={formData.businessInfo || ''}
            onChange={(e) => onChange('businessInfo', e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>

            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              borderRadius: "16px",
            }}
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
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessInfo;
