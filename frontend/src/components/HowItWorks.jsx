import React, { useState } from "react";
import {
  Box,
  ButtonBase,
  Typography,
  Stack,
  Divider,
  Fade,
  Slide,
} from "@mui/material";

const steps = [
  {
    id: 0,
    label: "Step 1",
    title: "Post Your Luggage Need",
    desc: "Create a post with your flight route, travel dates, and specify whether you need extra space or have space to share.",
    icon: "🧳",
  },
  {
    id: 1,
    label: "Step 2",
    title: "Get Matched",
    desc: "Our system finds compatible travelers on the same route who can help with your luggage needs.",
    icon: "🔄",
  },
  {
    id: 2,
    label: "Step 3",
    title: "Connect & Confirm",
    desc: "Chat with matched travelers, verify details, and confirm arrangements before your flight.",
    icon: "🤝",
  },
  {
    id: 3,
    label: "Step 4",
    title: "Meet & Transfer",
    desc: "Meet at the airport, safely transfer luggage, and complete your journey worry-free.",
    icon: "✈️",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const handleStepClick = (index) => {
    setSlideDirection(index > activeStep ? "left" : "right");
    setActiveStep(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        backgroundColor: "#F6FCFF", // soft background from your palette
        minHeight: "60vh",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "#0a2540",
          letterSpacing: 0.5,
        }}
      >
        How AEROLINK Works
      </Typography>

      {/* Step Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "85%" },
            maxWidth: 1000,
            bgcolor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,100,180,0.08)",
            overflow: "hidden",
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ minHeight: 80 }}
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <ButtonBase
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  sx={{
                    flex: 1,
                    py: 2,
                    px: { xs: 1, sm: 2 },
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(144,224,239,0.15)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    {/* Step Icon */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem" },
                        mb: 0.5,
                        filter: isActive ? "none" : "grayscale(50%)",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {step.icon}
                    </Typography>

                    {/* Step Label */}
                    <Typography
                      variant="overline"
                      sx={{
                        display: "block",
                        letterSpacing: 1.2,
                        color: isActive ? "#0077B6" : "rgba(0,0,0,0.6)",
                        fontSize: { xs: "0.7rem", sm: "0.8rem" },
                      }}
                    >
                      {step.label}
                    </Typography>

                    {/* Step Title */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#0077B6" : "#0a2540",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {step.title}
                    </Typography>

                    {/* Active Indicator */}
                    <Box
                      sx={{
                        height: 3,
                        width: isActive ? "80%" : 0,
                        backgroundColor: "#00B4D8",
                        borderRadius: 2,
                        mx: "auto",
                        mt: 1,
                        transition: "width 0.4s ease",
                      }}
                    />
                  </Box>
                </ButtonBase>
              );
            })}
          </Stack>
        </Box>
      </Box>

      {/* Content Pane */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "85%" },
            maxWidth: 1000,
            backgroundColor: "rgba(200,225,245,0.35)", // sky tint from your palette
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 3,
            boxShadow: "0 16px 40px rgba(0,100,180,0.15)",
            p: { xs: 3, md: 4 },
            minHeight: 200,
            overflow: "hidden",
          }}
        >
          <Slide
            direction={slideDirection}
            in={true}
            timeout={400}
            key={activeStep}
          >
            <Box>
              <Fade in timeout={500}>
                <Box>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    alignItems="center"
                  >
                    {/* Large Icon */}
                    <Box
                      sx={{
                        fontSize: { xs: "4rem", sm: "5rem" },
                        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
                      }}
                    >
                      {steps[activeStep].icon}
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          color: "#0a2540",
                          mb: 2,
                          letterSpacing: 0.5,
                        }}
                      >
                        {steps[activeStep].title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(0,0,0,0.75)",
                          lineHeight: 1.6,
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                      >
                        {steps[activeStep].desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Fade>
            </Box>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
