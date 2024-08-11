"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { motion } from "framer-motion";
import { generateChatbotResponse } from "../utils/azureOpenAI";
import StarRating from "./star_rating"; // Import your StarRating component

interface ChatbotPreviewProps {
  formData: any;
  onBack: () => void;
}

const ChatbotPreview: React.FC<ChatbotPreviewProps> = ({ formData, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showPrompts, setShowPrompts] = useState(true);
  const [samplePrompts, setSamplePrompts] = useState(["Hello", "Help", "Info"]);
  const [ratingPopupOpen, setRatingPopupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSend = async () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    const response = await generateChatbotResponse(input);
    setMessages([...newMessages, { sender: "bot", text: response }]);
  };

  const handleFeedbackClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFeedbackClose = () => {
    setAnchorEl(null);
  };

  const primaryColor = formData.primaryColor || "#333333"; // Default to dark grey if not set

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FFFFFF", // White background
        position: "relative",
      }}
    >
      <Paper
        elevation={0} // Removed shadow
        sx={{
          width: "100%",
          maxWidth: "400px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            bgcolor: primaryColor, // Dynamic color for header
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#FFFFFF", // White avatar background
              color: primaryColor, // Dynamic text color for avatar
              mr: 2,
            }}
          >
            {formData.chatbotName ? formData.chatbotName[0].toUpperCase() : "C"}
          </Avatar>
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            {formData.chatbotName || "Chatbot"}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p: 2,
            bgcolor: "#FFFFFF", // White background for chat area
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  mb: 2,
                }}
              >
                <Paper
                  elevation={0} // Removed shadow
                  sx={{
                    p: 2,
                    maxWidth: "70%",
                    borderRadius:
                      message.sender === "user"
                        ? "20px 20px 0 20px"
                        : "20px 20px 20px 0",
                    bgcolor:
                      message.sender === "user" ? primaryColor : "#F0F0F0", // Light grey background for bot messages
                    color: message.sender === "user" ? "#FFFFFF" : "#000000", // White text for user, black for bot
                  }}
                >
                  <Typography>{message.text}</Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: "#FFFFFF", // White background for input area
          }}
        >
          {showPrompts && (
            <Box sx={{ display: "flex", mb: 1 }}>
              {samplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => setInput(prompt)}
                  sx={{ mr: 1, mb: 1 }}
                >
                  {prompt}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              sx={{ mr: 1 }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              sx={{
                bgcolor: primaryColor, // Dynamic button background
                color: "#FFFFFF", // White text
                "&:hover": { bgcolor: `${primaryColor}CC` }, // Slightly lighter on hover
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
      <StarRating
        open={ratingPopupOpen}
        onClose={() => setRatingPopupOpen(false)}
        onSubmit={(rating) => console.log("User rating:", rating)}
      />
      <IconButton
        onClick={handleFeedbackClick}
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          bgcolor: primaryColor, // Dynamic button color
          color: "#FFFFFF", // White icon color
          "&:hover": { bgcolor: `${primaryColor}CC` }, // Slightly lighter on hover
        }}
      >
        <FeedbackIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFeedbackClose}
      >
        <MenuItem onClick={() => setRatingPopupOpen(true)}>
          Give Feedback
        </MenuItem>
      </Menu>
      <Box sx={{ mt: 2 }}>
        <Button
          onClick={onBack}
          variant="outlined"
          sx={{
            color: primaryColor, // Dynamic text color
            borderColor: primaryColor, // Dynamic border color
            "&:hover": { bgcolor: "#F0F0F0" }, // Light grey on hover
          }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default ChatbotPreview;