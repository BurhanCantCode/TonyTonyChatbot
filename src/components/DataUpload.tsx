"use client";

import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { parseCSV } from "../utils/csvParser";

interface DataUploadProps {
  formData: any;
  onUploadComplete: (data: any, files: File[]) => void; // Pass the parsed data and files to the parent component
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
      onUploadComplete(data, [file]); // Pass the parsed data and files to the parent component
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
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 4, color: "black", fontWeight: "bold" }}
        >
          Upload Data
        </Typography>
        <input
          type="file"
          onChange={handleFileChange}
          style={{
            marginBottom: 16,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            width: "100%",
          }}
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
            mb: 2,
            width: "100%",
            maxWidth: "120px",
          }}
        >
          {loading ? "Uploading..." : "Upload"}
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
              width: "80px",
              mr: 1,
            }}
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            variant="contained"
            disabled={loading}
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": { bgcolor: "#333333CC" },
              borderRadius: "16px",
              width: "80px",
              ml: 1,
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DataUpload;