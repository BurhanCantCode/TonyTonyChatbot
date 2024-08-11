import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { generateChatbotResponse } from "../utils/azureOpenAI";

const Chatbot: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      businessName: "Your Business Name",
      businessInfo: "Your Business Info",
      salesDataContent: "Your Sales Data Content",
    };

    const chatbotResponse = await generateChatbotResponse(prompt, formData);
    setResponse(chatbotResponse);
    setLoading(false);
  };

  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: "#F5F5F5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        label="Ask a question"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        InputProps={{
          style: { color: "black" },
        }}
        InputLabelProps={{
          style: { color: "black" },
        }}
        sx={{ mb: 2 }}
      />
      <Button
        onClick={handleSubmit}
        disabled={loading}
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "#FFFFFF",
          borderRadius: 0, // Square corners
          "&:hover": { bgcolor: "#333333CC" },
        }}
      >
        {loading ? "Loading..." : "Submit"}
      </Button>
      {response && (
        <Paper sx={{ padding: 2, marginTop: 2 }}>
          <Typography>{response}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Chatbot;
