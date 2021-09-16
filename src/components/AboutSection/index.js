import React from "react";
import { FaCode, FaServer, FaRulerCombined } from "react-icons/fa";
import profileImg from "../../assets/profile-img.jpg";

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
} from "./AboutElements";

const Projects = () => {
  return (
    <AboutContainer id="about">
      <AboutH2>Hi there! My name is Justin —</AboutH2>
      <AboutImgWrap>
        <AboutImg src={profileImg} alt="profile img" />;
      </AboutImgWrap>
      <AboutH1>
        I design and develop <br />
        to make life more intuitive and accessible!
      </AboutH1>
      <AboutP>
        My background in art & design helps me to turn creative thinkings into a
        straightforward user experience.
      </AboutP>
      <AboutH3>These are the tools I can use —</AboutH3>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon>
            <FaCode />
          </SkillsIcon>
          <SkillsH1>Front-end</SkillsH1>
          <SkillsP>Java</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon>
            <FaServer />
          </SkillsIcon>
          <SkillsH1>Back-end</SkillsH1>
          <SkillsP>Java</SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon>
            <FaRulerCombined />
          </SkillsIcon>
          <SkillsH1>Design</SkillsH1>
          <SkillsP>Java</SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </AboutContainer>
  );
};

export default Projects;
