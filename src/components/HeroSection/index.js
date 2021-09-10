import React from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>
          I design and develop to make life more intuitive and accessible!
        </HeroH1>
        <HeroP>
          My background in art & design helps me to turn creative thinkings into
          a straightforward user experience.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
