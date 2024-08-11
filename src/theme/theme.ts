import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333", // Dark grey as primary color
    },
    background: {
      default: "#F5F5F5", // Light grey for background
      paper: "#FFFFFF", // White for paper components
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#666666", // Dark grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "28px",
          padding: "10px 20px",
          fontWeight: 500,
        },
        containedPrimary: {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft black shadow
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", // Light black shadow
        },
      },
    },
  },
});

export default theme;
