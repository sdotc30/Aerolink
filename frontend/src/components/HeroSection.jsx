import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        backgroundImage: 'url("/images/HeroImage (1).jpg")',
        overflowX: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#ffffffff",
          fontWeight: "bold",
          letterSpacing: 1.2,
          transform: "scaleY(1.10)",
          textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          mb: { xs: 1, sm: 2 },
          mt: -20,
          maxWidth: 700,
        }}
      >
        STUCK WITH EXTRA BAGGAGE?
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#ffffffff",
          mb: { xs: 2.2, sm: 3.2 },
          maxWidth: 600,
          fontWeight: 400,
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}
      >
        Let Aerolink help you with your luggage effortlessly.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#02429c",
          color: "#fff",
          px: 4,
          py: 1.2,
          fontWeight: 700,
          borderRadius: 1.5,
          letterSpacing: 0.5,
          textTransform: "none",
          boxShadow: "0 8px 20px rgba(0,119,182,0.28)",
          "&:hover": {
            backgroundColor: "#77acde",
            boxShadow: "0 10px 28px rgba(0,180,216,0.38)",
            transform: "translateY(-1px) scale(1.045)",
          },
          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
          fontSize: { xs: "1rem", sm: "1.15rem" },
        }}
        href="/post-luggage"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
