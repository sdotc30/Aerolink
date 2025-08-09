import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "#fff",
        boxShadow: "none",
        position: "absolute",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          {/* Clickable title */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "1.25rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            ＡＥＲＯＬＩＮＫ
          </a>
        </Box>

        <Box>
          <Button
            color="inherit"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.35)",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
                borderRadius: "10",
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            color="inherit"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.35)",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
                borderRadius: "10",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
      <Box
        sx={{
          width: "90vw",
          height: "1.5px",
          mx: "auto",
          bgcolor: "#ebe2e2",
          boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          borderRadius: "1px",
          mt: 0,
          mb: 0,
        }}
      />
    </AppBar>
  );
}

export default Navbar;
