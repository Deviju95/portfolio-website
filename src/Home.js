import React from 'react';
import ScrollDownBtn from './components/ScrollDownBtn';

import About from './pages/About';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import Programming from './pages/Programming';

const Home = () => {
  return (
    <div>
      <section className='landing-page'>
        <About />
        <div className='scroll-down-btn__container'>
          <ScrollDownBtn />
        </div>
      </section>
      <Programming />
      <GraphicDesign />
      <Contact />
    </div>
  );
};

export default Home;
