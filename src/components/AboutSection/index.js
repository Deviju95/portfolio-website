import React from "react";
import { FaCode, FaServer, FaRulerCombined } from "react-icons/fa";
import profileImg from "../../assets/profile-img.png";

import {
  AboutContainer,
  AboutH2,
  AboutImgWrap,
  AboutImg,
  AboutH1,
  AboutP,
  AboutH3,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH1,
  SkillsP,
  SkillsPWrapper,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutH2>Hi there! My name is Justin —</AboutH2>
      <AboutImgWrap>
        <AboutImg src={profileImg} alt="profile img" />;
      </AboutImgWrap>
      <AboutH1>
        I design and develop to make life more intuitive and accessible!
      </AboutH1>
      <AboutP>
        My background in art & design helps me to turn creative thinkings into a
        straightforward user experience.
      </AboutP>
      <AboutH3>These are the tools I use —</AboutH3>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon>
            <FaCode />
          </SkillsIcon>
          <SkillsH1>Front-end</SkillsH1>
          <SkillsPWrapper>
            <SkillsP>
              React.js <br /> Styled-Components
              <br /> React-Router
              <br />
              Github
              <br />
              <br />
              Bootstrap <br /> jQeury
              <br /> <br />
              HTML <br />
              CSS
              <br />
              Javascript
              <br />
              Unix CDL
            </SkillsP>
          </SkillsPWrapper>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon>
            <FaServer />
          </SkillsIcon>
          <SkillsH1>Back-end</SkillsH1>
          <SkillsPWrapper>
            <SkillsP>
              Node.js <br /> Express.js
            </SkillsP>
          </SkillsPWrapper>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon>
            <FaRulerCombined />
          </SkillsIcon>
          <SkillsH1>Design</SkillsH1>
          <SkillsPWrapper>
            <SkillsP>
              Figma <br /> <br /> Cinema 4D <br /> Maya <br />
              <br />
              Adobe Suites —
              <br />
              Photoshop
              <br />
              After Effects
              <br />
              InDesign
              <br />
              Illustrator
              <br />
              Premiere Pro
            </SkillsP>
          </SkillsPWrapper>
        </SkillsCard>
      </SkillsWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
