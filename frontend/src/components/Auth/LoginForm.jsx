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
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const LoginForm = ({ onToggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Login submitted:", formData);

      // Mock authentication check
      if (formData.email && formData.password) {
        // Simulate successful login
        setTimeout(() => {
          // Store user session (mock)
          localStorage.setItem(
            "aerolink_user",
            JSON.stringify({
              name: "Alex Thompson",
              email: formData.email,
              verified: true,
              rating: 4.8,
              totalListings: 12,
              activeListings: 3,
              loginTime: new Date().toISOString(),
            })
          );

          // Navigate to profile dashboard
          navigate("/profile");
          setLoading(false);
        }, 1200); // Slightly longer for better perceived performance
      } else {
        setError("Please enter both email and password");
        setLoading(false);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
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
          gap: 2,
          p: 2,
        }}
      >
        {/* AEROLINK Logo */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#0077B6",
            mb: 1,
            textAlign: "center",
          }}
        >
          AEROLINK
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            mb: 2,
            textAlign: "center",
          }}
        >
          Welcome back, traveler!
        </Typography>

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ width: "100%", mb: 1 }}>
            {error}
          </Alert>
        )}

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
          disabled={loading}
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
          disabled={loading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="toggle password visibility"
                  disabled={loading}
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

        {/* Login Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: "#0077B6",
            py: 1.5,
            borderRadius: 2,
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            mt: 1,
            "&:hover": {
              backgroundColor: "#00B4D8",
              transform: loading ? "none" : "translateY(-1px)",
            },
            "&:disabled": {
              backgroundColor: "rgba(0, 119, 182, 0.6)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        {/* Forgot Password */}
        <Link
          href="#"
          sx={{
            color: "#0077B6",
            textDecoration: "none",
            fontSize: "0.9rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot your password?
        </Link>

        {/* Toggle to Register */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            textAlign: "center",
            mt: 1,
          }}
        >
          New to AEROLINK?{" "}
          <Link
            component="button"
            type="button"
            onClick={onToggleForm}
            sx={{
              color: "#0077B6",
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Create an account
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
