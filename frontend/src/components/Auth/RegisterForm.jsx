import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Theme for red asterisks
const redAsteriskTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          color: "#d32f2f",
        },
      },
    },
  },
});

const RegisterForm = ({ onToggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Register submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={redAsteriskTheme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1, // Reduced from 1.5
          p: 1.5, // Reduced from 2
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        {/* AEROLINK Logo */}
        <Typography
          variant="h5" // Reduced from h4
          sx={{
            fontWeight: "bold",
            color: "#0077B6",
            mb: 0.3, // Reduced from 0.5
            textAlign: "center",
          }}
        >
          AEROLINK
        </Typography>

        <Typography
          variant="body2" // Reduced from subtitle1
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            mb: 0.5, // Reduced from 1
            textAlign: "center",
          }}
        >
          Join our travel community!
        </Typography>

        {/* Name Field */}
        <TextField
          fullWidth
          name="name"
          type="text"
          label="Full Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          size="small" // Added size small
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: 2,
              "&.Mui-focused fieldset": {
                borderColor: "#0077B6",
              },
            },
          }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
          size="small" // Added size small
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: 2,
              "&.Mui-focused fieldset": {
                borderColor: "#0077B6",
              },
            },
          }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          required
          size="small" // Added size small
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="toggle password visibility"
                  size="small" // Added size small
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: 2,
              "&.Mui-focused fieldset": {
                borderColor: "#0077B6",
              },
            },
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          size="small" // Added size small
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  aria-label="toggle confirm password visibility"
                  size="small" // Added size small
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: 2,
              "&.Mui-focused fieldset": {
                borderColor: "#0077B6",
              },
            },
          }}
        />

        {/* Register Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small" // Added size small
          sx={{
            backgroundColor: "#0077B6",
            py: 1, // Reduced from 1.5
            borderRadius: 2,
            fontSize: "0.9rem", // Reduced from 1rem
            fontWeight: 600,
            textTransform: "none",
            mt: 0.5, // Reduced from 1
            "&:hover": {
              backgroundColor: "#00B4D8",
              transform: "translateY(-1px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Create Account
        </Button>

        {/* Toggle to Login */}
        <Typography
          variant="caption" // Reduced from body2
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            textAlign: "center",
            mt: 0.5, // Reduced from 1
          }}
        >
          Already have an account?{" "}
          <Link
            component="button"
            type="button"
            onClick={onToggleForm}
            sx={{
              color: "#0077B6",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.75rem", // Added smaller font size
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Sign in here
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterForm;
