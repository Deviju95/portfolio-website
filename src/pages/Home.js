import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import GraphicDesign from '../components/GraphicDesign';
import Programming from '../components/Programming';

const Home = () => {
  return (
    <>
      <main>
        <About />
      </main>
      <Programming />
      <GraphicDesign />
      <Contact />
    </>
  );
};

export default Home;
