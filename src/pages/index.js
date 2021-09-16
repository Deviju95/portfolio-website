import React, { useState } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { homeObjOne, homeObjTwo } from "../components/ProjectsSection/Data";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
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
      <ProjectsSection {...homeObjOne} />
      <ProjectsSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
