import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person,
  FlightTakeoff,
  Add,
  History,
  Settings,
  Home,
  Star,
  Close,
  ExitToApp,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileContent from "./ProfileContent";

const drawerWidth = 280;

const ProfileDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication and load user data
  useEffect(() => {
    const user = localStorage.getItem("aerolink_user");
    if (!user) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(user);
    const email = parsedUser.email || "";
    const nameFromEmail = email.split("@")[0] || "Traveler";

    setUserData({
      name: nameFromEmail,
      email: email,
      phone: "", // Empty for user to fill
      location: "", // Empty for user to fill
      avatar: "/api/placeholder/60/60",
      verified: parsedUser.verified || false,
      rating: parsedUser.rating || 0,
      totalListings: parsedUser.totalListings || 0,
      activeListings: parsedUser.activeListings || 0,
    });
  }, [navigate]);

  // Auto-open sidebar on first visit
  useEffect(() => {
    const hasVisitedProfile = localStorage.getItem("aerolink_profile_visited");
    if (!hasVisitedProfile) {
      setSidebarOpen(true);
      setFirstVisit(true);
      localStorage.setItem("aerolink_profile_visited", "true");
      // Auto-close after 3 seconds
      setTimeout(() => {
        setSidebarOpen(false);
        setFirstVisit(false);
      }, 3000);
    }
  }, []);

  const menuItems = [
    { id: "profile", label: "My Profile", icon: <Person />, color: "#0077B6" },
    {
      id: "listings",
      label: "My Listings",
      icon: <FlightTakeoff />,
      color: "#00B4D8",
    },
    { id: "add", label: "Add Listing", icon: <Add />, color: "#0077B6" },
    { id: "history", label: "History", icon: <History />, color: "#00B4D8" },
    { id: "settings", label: "Settings", icon: <Settings />, color: "#0077B6" },
    { id: "logout", label: "Logout", icon: <ExitToApp />, color: "#d32f2f" },
  ];

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
    setFirstVisit(false);
  };

  const handleMenuClick = (sectionId) => {
    if (sectionId === "logout") {
      localStorage.removeItem("aerolink_user");
      localStorage.removeItem("aerolink_profile_visited");
      navigate("/");
      return;
    }

    setActiveSection(sectionId);
    setSidebarOpen(false); // Close on mobile after selection
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileContent userData={userData} />;
      case "listings":
        return (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4" sx={{ color: "#0077B6", mb: 2 }}>
              My Listings
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Listings management coming soon! 🛩️
            </Typography>
          </Box>
        );
      case "add":
        return (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4" sx={{ color: "#0077B6", mb: 2 }}>
              Add New Listing
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Listing creation form coming soon! ✈️
            </Typography>
          </Box>
        );
      case "history":
        return (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4" sx={{ color: "#0077B6", mb: 2 }}>
              Listing History
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Transaction history coming soon! 📋
            </Typography>
          </Box>
        );
      case "settings":
        return (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4" sx={{ color: "#0077B6", mb: 2 }}>
              Account Settings
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>
              Settings panel coming soon! ⚙️
            </Typography>
          </Box>
        );
      default:
        return <ProfileContent userData={userData} />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #F6FCFF 0%, #CAF0F8 50%, #90E0EF 100%)",
      }}
    >
      {/* Top App Bar */}
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 20px rgba(0, 119, 182, 0.1)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              mr: 2,
              color: "#0077B6",
              backgroundColor: firstVisit
                ? "rgba(0, 119, 182, 0.1)"
                : "transparent",
              animation: firstVisit ? "pulse 1s infinite" : "none",
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                  backgroundColor: "rgba(0, 119, 182, 0.1)",
                },
                "50%": {
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(0, 119, 182, 0.2)",
                },
                "100%": {
                  transform: "scale(1)",
                  backgroundColor: "rgba(0, 119, 182, 0.1)",
                },
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "#0a2540",
              fontWeight: "bold",
            }}
          >
            AEROLINK Dashboard
          </Typography>
          <IconButton
            onClick={handleBackToHome}
            sx={{
              color: "#0077B6",
              "&:hover": {
                backgroundColor: "rgba(0, 119, 182, 0.1)",
              },
            }}
          >
            <Home />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 119, 182, 0.1)",
            borderLeft: "none",
            marginTop: "64px", // Fixed: Add margin to avoid AppBar overlap
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            p: 2,
            background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
            color: "white",
            position: "relative",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              mt: 1,
            }}
          >
            <Avatar
              src={userData.avatar}
              sx={{
                width: 50,
                height: 50,
                border: "2px solid rgba(255, 255, 255, 0.3)",
                mb: 1,
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                {userData.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Star sx={{ fontSize: "1rem", color: "#FFD700" }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {userData.rating || "New"}
                </Typography>
                {userData.verified && (
                  <Chip
                    label="Verified"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      fontSize: "0.7rem",
                      height: "20px",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* Navigation Menu */}
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleMenuClick(item.id)}
                sx={{
                  mx: 1,
                  borderRadius: 2,
                  backgroundColor:
                    activeSection === item.id
                      ? `${item.color}15`
                      : "transparent",
                  color:
                    activeSection === item.id
                      ? item.color
                      : "rgba(0, 0, 0, 0.7)",
                  "&:hover": {
                    backgroundColor: `${item.color}10`,
                    color: item.color,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeSection === item.id
                        ? item.color
                        : "rgba(0, 0, 0, 0.5)",
                    minWidth: "40px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: activeSection === item.id ? 600 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mt: 2 }} />

        {/* Quick Stats */}
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgba(0, 0, 0, 0.6)", mb: 1 }}
          >
            Quick Stats
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2">Active Listings:</Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#0077B6" }}
            >
              {userData.activeListings || 0}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Total Listings:</Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#00B4D8" }}
            >
              {userData.totalListings || 0}
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Account for AppBar height
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default ProfileDashboard;
