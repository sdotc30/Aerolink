import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import WindowContainer from "./WindowContainer";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync form with route
  useEffect(() => {
    setIsRegister(location.pathname === "/register");
  }, [location.pathname]);

  const handleToggleForm = () => {
    const newIsRegister = !isRegister;
    setIsRegister(newIsRegister);
    navigate(newIsRegister ? "/register" : "/login", { replace: true });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #F6FCFF 0%, #CAF0F8 50%, #90E0EF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Aviation Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "80px",
          height: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "40px",
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: "60px",
          height: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "30px",
          opacity: 0.4,
        }}
      />

      {/* Back Button */}
      <IconButton
        onClick={handleBackToHome}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          color: "#0077B6",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            transform: "translateX(-2px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Airplane Window with Forms */}
      <WindowContainer isFlipped={isRegister}>
        {isRegister ? (
          <RegisterForm onToggleForm={handleToggleForm} />
        ) : (
          <LoginForm onToggleForm={handleToggleForm} />
        )}
      </WindowContainer>
    </Box>
  );
};

export default LoginPage;
