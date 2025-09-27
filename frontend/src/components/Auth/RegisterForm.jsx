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

const RegisterForm = ({ onToggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      console.log("Register submitted:", formData);

      // Mock registration check
      if (formData.name && formData.email && formData.password) {
        // Simulate successful registration
        setTimeout(() => {
          // Store user session (mock)
          localStorage.setItem(
            "aerolink_user",
            JSON.stringify({
              name: formData.name,
              email: formData.email,
              verified: false, // New users start unverified
              rating: 0,
              totalListings: 0,
              activeListings: 0,
              registerTime: new Date().toISOString(),
            })
          );

          // Navigate to profile dashboard
          navigate("/profile");
          setLoading(false);
        }, 1200);
      } else {
        setError("Please fill in all required fields");
        setLoading(false);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
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
          gap: 1,
          p: 1.5,
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        {/* AEROLINK Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#0077B6",
            mb: 0.3,
            textAlign: "center",
          }}
        >
          AEROLINK
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            mb: 0.5,
            textAlign: "center",
          }}
        >
          Join our travel community!
        </Typography>

        {/* Error Alert */}
        {error && (
          <Alert
            severity="error"
            sx={{ width: "100%", mb: 1, fontSize: "0.8rem" }}
          >
            {error}
          </Alert>
        )}

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
          disabled={loading}
          size="small"
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
          disabled={loading}
          size="small"
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
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="toggle password visibility"
                  disabled={loading}
                  size="small"
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
          disabled={loading}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  aria-label="toggle confirm password visibility"
                  disabled={loading}
                  size="small"
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
          disabled={loading}
          size="small"
          sx={{
            backgroundColor: "#0077B6",
            py: 1,
            borderRadius: 2,
            fontSize: "0.9rem",
            fontWeight: 600,
            textTransform: "none",
            mt: 0.5,
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
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        {/* Toggle to Login */}
        <Typography
          variant="caption"
          sx={{
            color: "rgba(0, 0, 0, 0.7)",
            textAlign: "center",
            mt: 0.5,
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
              fontSize: "0.75rem",
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
