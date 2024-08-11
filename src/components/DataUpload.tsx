"use client";

import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"; // Import CloudDownloadIcon
import { parseCSV } from "../utils/csvParser";
import { motion } from "framer-motion";

interface DataUploadProps {
  formData: any;
  onUploadComplete: (data: any, files: File[]) => void;
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
  const [uploadComplete, setUploadComplete] = useState(false); // State to track if upload is complete

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUploadComplete(false); // Reset upload complete state when a new file is selected
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const data = await parseCSV(file);
      setLoading(false);
      setUploadComplete(true); // Set upload complete state to true
      onUploadComplete(data, [file]);
    } catch (error) {
      console.error("Error parsing CSV file:", error);
      setLoading(false);
    }
  };

  const handleDownloadSample = () => {
    const zipUrl = "https://drive.google.com/uc?export=download&id=14xVVm6qDusbmpDnYBW3R2RRYM5oR26sM"; // Replace with your Google Drive ZIP file ID
    const link = document.createElement("a");
    link.href = zipUrl;
    link.setAttribute("download", "sample-data.zip"); // Name the downloaded file as "sample-data.zip"
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
        <Paper
          sx={{
            width: "100%",
            maxWidth: "500px",
            bgcolor: "white",
            padding: 4,
            borderRadius: 4, // Increased border radius for more curved edges
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)", // Increased shadow
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mb: 4, color: "black", fontWeight: 600 }} // Slightly bold
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginBottom: 4,
            }}
          >
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
                width: "120px",
                fontWeight: 600, // Slightly bold
              }}
            >
              {loading ? "Uploading..." : "Upload"}
            </Button>
            <Button
              onClick={handleDownloadSample}
              variant="contained" // Use contained variant to match the style
              startIcon={<CloudDownloadIcon />} // Add the CloudDownloadIcon here
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "#333333CC" },
                borderRadius: "16px",
                width: "180px",
                fontWeight: 600, // Slightly bold
              }}
            >
              Sample Data
            </Button>
          </Box>
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
                fontWeight: 600, // Slightly bold
              }}
            >
              Back
            </Button>
            <Button
              onClick={onNext}
              variant="contained"
              disabled={!uploadComplete || loading} // Disable Next button until upload is complete
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": { bgcolor: "#333333CC" },
                borderRadius: "16px",
                width: "80px",
                ml: 1,
                fontWeight: 600, // Slightly bold
              }}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default DataUpload;
