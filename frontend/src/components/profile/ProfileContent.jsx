import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  Chip,
  Button,
  TextField,
  Divider,
  Alert,
} from "@mui/material";
import {
  Edit,
  LocationOn,
  Email,
  Phone,
  CalendarToday,
  Flight,
  Star,
  Person,
} from "@mui/icons-material";

const ProfileContent = ({ userData }) => {
  const [editing, setEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name || "",
    email: userData.email || "",
    phone: userData.phone || "",
    location: userData.location || "",
  });

  // Update formData when userData changes
  useEffect(() => {
    setFormData({
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
      location: userData.location || "",
    });
  }, [userData]);

  const handleEdit = () => setEditing(!editing);

  const handleSave = () => {
    // Get current user data from localStorage
    const currentUser = JSON.parse(
      localStorage.getItem("aerolink_user") || "{}"
    );

    // Update user data with new form data
    const updatedUser = {
      ...currentUser,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      lastUpdated: new Date().toISOString(),
    };

    // Save back to localStorage
    localStorage.setItem("aerolink_user", JSON.stringify(updatedUser));

    setEditing(false);
    setSaveSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#0a2540",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          textAlign: "center",
        }}
      >
        My Profile
      </Typography>

      {/* Success Alert */}
      {saveSuccess && (
        <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
          <Alert severity="success" sx={{ width: "fit-content" }}>
            Profile updated successfully! Changes saved.
          </Alert>
        </Box>
      )}

      <Grid container spacing={3} justifyContent="center">
        {/* Profile Header */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 3,
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  width: "100%",
                }}
              >
                <Avatar
                  src={userData.avatar}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "4px solid #0077B6",
                    boxShadow: "0 8px 24px rgba(0, 119, 182, 0.3)",
                  }}
                />
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#0a2540", mb: 1 }}
                  >
                    {formData.name || "Traveler"}
                    {userData.verified && (
                      <Chip
                        label="Verified"
                        size="small"
                        color="success"
                        sx={{ ml: 1, fontSize: "0.7rem" }}
                      />
                    )}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Star sx={{ color: "#FFD700", fontSize: "1.2rem" }} />
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      {userData.rating || "New"} rating •{" "}
                      {userData.totalListings || 0} total listings
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)" }}>
                    Member since March 2024
                  </Typography>
                </Box>
              </Box>
              <Button
                variant={editing ? "contained" : "outlined"}
                startIcon={<Edit />}
                onClick={editing ? handleSave : handleEdit}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  backgroundColor: editing ? "#0077B6" : "transparent",
                  borderColor: "#0077B6",
                  color: editing ? "white" : "#0077B6",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: editing
                      ? "#00B4D8"
                      : "rgba(0, 119, 182, 0.1)",
                  },
                }}
              >
                {editing ? "Save Changes" : "Edit Profile"}
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Contact Information */}
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#0077B6", textAlign: "center" }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Name Field */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Person sx={{ color: "#0077B6" }} />
                    {editing ? (
                      <TextField
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your full name"
                        sx={{
                          "& .MuiOutlinedInput-input": {
                            textAlign: "center",
                          },
                        }}
                      />
                    ) : (
                      <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                        {formData.name || "Please add your name"}
                      </Typography>
                    )}
                  </Box>

                  {/* Email Field */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Email sx={{ color: "#0077B6" }} />
                    <Typography sx={{ textAlign: "center" }}>
                      {formData.email}
                    </Typography>
                  </Box>

                  {/* Phone Field */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Phone sx={{ color: "#0077B6" }} />
                    {editing ? (
                      <TextField
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your phone number"
                        sx={{
                          "& .MuiOutlinedInput-input": {
                            textAlign: "center",
                          },
                        }}
                      />
                    ) : (
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: formData.phone ? "inherit" : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {formData.phone || "Please add your phone number"}
                      </Typography>
                    )}
                  </Box>

                  {/* Location Field */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <LocationOn sx={{ color: "#0077B6" }} />
                    {editing ? (
                      <TextField
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your location"
                        sx={{
                          "& .MuiOutlinedInput-input": {
                            textAlign: "center",
                          },
                        }}
                      />
                    ) : (
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: formData.location
                            ? "inherit"
                            : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {formData.location || "Please add your location"}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: "#00B4D8", textAlign: "center" }}
                >
                  Travel Preferences
                </Typography>
                <Box sx={{ mb: 2, textAlign: "center" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    Preferred Airlines
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {["Indigo", "Air India", "SpiceJet"].map(
                      (airline, index) => (
                        <Chip
                          key={index}
                          label={airline}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 119, 182, 0.1)",
                            color: "#0077B6",
                          }}
                        />
                      )
                    )}
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, fontWeight: 600 }}
                  >
                    Frequent Routes
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    {["MAA → DEL", "DEL → MAA", "DEL → BOM"].map(
                      (route, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                          }}
                        >
                          <Flight sx={{ color: "#00B4D8", fontSize: "1rem" }} />
                          <Typography variant="body2">{route}</Typography>
                        </Box>
                      )
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Quick Stats Cards */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              background: "rgba(0, 119, 182, 0.1)",
              border: "1px solid rgba(0, 119, 182, 0.2)",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#0077B6" }}
            >
              {userData.activeListings || 0}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Active Listings
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              background: "rgba(0, 180, 216, 0.1)",
              border: "1px solid rgba(0, 180, 216, 0.2)",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#00B4D8" }}
            >
              18
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Successful Matches
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              background: "rgba(76, 175, 80, 0.1)", // Green background for economic theme
              border: "1px solid rgba(76, 175, 80, 0.2)",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#4CAF50" }} // Green color for money/savings
            >
              $485
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Total Saved
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileContent;
