"use client";
import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { parseCSV } from "../utils/csvParser";

interface DataUploadProps {
  formData: any;
  onUploadComplete: (data: any) => void; // Pass the parsed data to the parent component
  onNext: () => void;
  onBack: () => void;
}

const DataUpload: React.FC<DataUploadProps> = ({
  formData,
  onUploadComplete,
  onNext,
  onBack,
}) => {
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
      console.error("Error parsing CSV file:", error);
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
        bgcolor: "#F5F5F5", // Background color to match the previous styles
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 2, color: "black", fontWeight: "bold" }}
      >
        Upload Data
      </Typography>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ marginBottom: 16 }}
      />
      <Button
        onClick={handleUpload}
        disabled={loading}
        startIcon={
          loading ? <CircularProgress size={20} /> : <CloudUploadIcon />
        }
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "white",
          "&:hover": { bgcolor: "#333333CC" },
          borderRadius: "16px",
        }}
      >
        {loading ? "Uploading..." : "Upload"}
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Button
          onClick={onBack}
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
          onClick={handleUpload}
          variant="contained"
          disabled={loading}
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": { bgcolor: "#333333CC" },
            borderRadius: "16px",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DataUpload;
