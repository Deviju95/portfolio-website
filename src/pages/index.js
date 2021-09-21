import React, { useState } from "react";

import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
