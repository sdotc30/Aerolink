import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Nvbar";
import HeroSection from "./components/HeroSection";
import { Box } from "@mui/material";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
    </div>
  );
}

export default App;
