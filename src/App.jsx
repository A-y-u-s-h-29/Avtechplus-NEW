import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Navbar component
import Navbar from "./components/Navbar"; // Make sure the path is correct
import Footer from "./components/Footer";

// Page Components
import Home from "./components/Home";
import About from "./components/About";
import Brands from "./components/Brand";
import InnovationCreativity from "./components/InnovationCreativity";
import ProjectsPage from "./pages/ProjectsPage";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import AboutAvtech from "./pages/AboutAvtech";
import OurPromises from "./pages/OurPromises";
import OurCoreTeam from "./pages/OurCoreTeam";
import Association from "./pages/Association";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      {/* Navbar is outside Routes - will show on ALL pages */}
      <Navbar />
      
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Vision />
              <Sectors />
              <Brands />
              <InnovationCreativity />
            </>
          }
        />
        
        {/* Other Routes */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about-avtech" element={<AboutAvtech />} />
        <Route path="/our-promises" element={<OurPromises />} />
        <Route path="/our-core-team" element={<OurCoreTeam />} />
        <Route path="/associations" element={<Association />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
      {/* Footer is outside Routes - will show on ALL pages */}
      <Footer />
    </Router>
  );
}

export default App;