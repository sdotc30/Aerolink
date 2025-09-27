import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, Button, Grid } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

// Counter animation hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, setIsVisible];
};

// Individual stat component with asterisk
const StatCard = ({ number, suffix, label, delay }) => {
  const [count, setIsVisible] = useCounter(number, 2500);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay, setIsVisible]);

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        backgroundColor: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: 3,
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 8px 24px rgba(0,100,180,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 32px rgba(0,100,180,0.15)",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#0077B6",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 0.5,
          position: "relative",
        }}
      >
        {count.toLocaleString()}
        {suffix}
        <Box
          component="span"
          sx={{
            color: "#FF6B6B",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            position: "absolute",
            top: 0,
            ml: 0.5,
          }}
        >
          *
        </Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "rgba(0,0,0,0.7)",
          fontWeight: 600,
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function StatsSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "70vh",
        background:
          "linear-gradient(135deg, #F6FCFF 0%, #CAF0F8 50%, #90E0EF 100%)",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        alignItems="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {/* Left Side: Stats & Content */}
        <Grid item xs={12} md={6.5}>
          <Box sx={{ pr: { md: 3 }, maxWidth: { md: 550 } }}>
            {/* Main Headline */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#0a2540",
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: "0.02em",
              }}
            >
              Join{" "}
              <Box
                component="span"
                sx={{
                  color: "#0077B6",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 2,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: "#00B4D8",
                    borderRadius: 2,
                    opacity: 0.6,
                  },
                }}
              >
                1,000+
              </Box>{" "}
              Smart Travelers
              <Box
                component="span"
                sx={{
                  color: "#FF6B6B",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  ml: 0.5,
                }}
              >
                *
              </Box>
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.5,
                mb: 3,
                maxWidth: 450,
              }}
            >
              Don't let baggage limits limit your adventures. Join AEROLINK and
              turn your next trip into a win-win experience.
            </Typography>

            {/* Stats Grid */}
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={1.5} sx={{ maxWidth: 450 }}>
                <Grid item xs={6}>
                  <StatCard
                    number={1247}
                    suffix="+"
                    label="Travelers Helped"
                    delay={500}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard
                    number={856}
                    suffix="+"
                    label="Successful Shares"
                    delay={800}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard
                    number={55}
                    suffix="L+"
                    label="Money Saved (₹)"
                    delay={1100}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StatCard
                    number={98}
                    suffix="%"
                    label="Happy Users"
                    delay={1400}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Call to Action */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/register")}
                sx={{
                  backgroundColor: "#0077B6",
                  color: "#fff",
                  px: 3,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 8px 25px rgba(0,119,182,0.35)",
                  "&:hover": {
                    backgroundColor: "#00B4D8",
                    boxShadow: "0 12px 35px rgba(0,180,216,0.45)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Join The Community
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#0077B6",
                  color: "#0077B6",
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  borderRadius: 2,
                  textTransform: "none",
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "#00B4D8",
                    backgroundColor: "rgba(0,180,216,0.08)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
                href="#how-it-works"
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right Side: Lottie Animation */}
        <Grid item xs={12} md={5.5}>
          <Box
            sx={{
              height: { xs: 400, md: 600 },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 3, md: 0 },
              ml: { xs: 0, md: 4 },
            }}
          >
            {/* Lottie Animation */}
            <DotLottieReact
              src="animations/Flight.json"
              loop
              autoplay
              style={{
                width: "100%",
                height: "75%",
                maxWidth: "550px",
                maxHeight: "550px",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Disclaimer */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 15, md: 20 },
          left: 0,
          right: 0,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "rgba(0,0,0,0.5)",
            fontSize: { xs: "0.7rem", md: "0.8rem" },
            fontStyle: "italic",
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(4px)",
            px: 2.5,
            py: 0.8,
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          * Numbers shown are for demonstration purposes only to showcase the
          platform's potential impact
        </Typography>
      </Box>
    </Box>
  );
}
