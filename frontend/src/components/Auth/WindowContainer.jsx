import React from "react";
import { Box } from "@mui/material";

const WindowContainer = ({ children, isFlipped }) => {
  return (
    <Box
      sx={{
        width: { xs: 320, sm: 380, md: 420 }, // Made slightly smaller
        height: { xs: 450, sm: 520, md: 580 }, // Made slightly smaller
        position: "relative",
        perspective: "1000px",
      }}
    >
      {/* Airplane Window Frame */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "linear-gradient(145deg, #1e3a8a 0%, #0077B6 30%, #00B4D8 100%)",
          padding: "8px",
          boxShadow: `
            0 0 0 12px #1e3a8a,
            0 0 0 16px rgba(30, 58, 138, 0.3),
            0 25px 50px rgba(0, 119, 182, 0.4),
            inset 0 0 50px rgba(255, 255, 255, 0.1)
          `,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "12px",
            backgroundColor: "#1e3a8a",
            borderRadius: "6px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {/* Inner Window Content */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #F6FCFF 0%, #CAF0F8 50%, #90E0EF 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle cloud effects */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "15%",
              width: "60px",
              height: "30px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "30px",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "20%",
              width: "40px",
              height: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              opacity: 0.4,
            }}
          />

          {/* Form Container - Fixed Logic */}
          <Box
            key={isFlipped ? "register" : "login"}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation:
                "slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
              "@keyframes slideDown": {
                "0%": {
                  transform: "translate(-50%, -150%)",
                  opacity: 0,
                },
                "100%": {
                  transform: "translate(-50%, -50%)",
                  opacity: 1,
                },
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WindowContainer;
