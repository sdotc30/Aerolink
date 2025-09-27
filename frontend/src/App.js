import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nvbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import StatsSection from "./components/StatsSection";
import LoginPage from "./components/Auth/LoginPage";
import ProfileDashboard from "./components/profile/ProfileDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Landing Page Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <HowItWorks />
                <StatsSection />
              </>
            }
          />

          {/* Login and Register Routes - Same Component */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />

          {/* Profile Dashboard Route */}
          <Route path="/profile" element={<ProfileDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
