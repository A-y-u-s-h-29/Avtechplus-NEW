import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Assuming Navbar is in a separate file
import Home from "./components/Home";
import About from "./components/About";

import Brands from "./components/Brand";
import InnovationCreativity from "./components/InnovationCreativity";
import ProjectsPage from "./pages/ProjectsPage";

import Footer from "./components/Footer";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import AboutAvtech from "./pages/AboutAvtech";
import OurPromises from "./pages/OurPromises";
import OurCoreTeam from "./pages/OurCoreTeam";



function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about-avtech" element={<AboutAvtech />} />
        <Route path="/our-promises" element={<OurPromises />} />
        <Route path="/our-core-team" element={<OurCoreTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


