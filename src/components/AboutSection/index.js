import React from "react";
import { FaCode, FaServer, FaRulerCombined } from "react-icons/fa";

import {
  AboutContainer,
  AboutH1,
  AboutP,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH1,
  SkillsP,
} from "./AboutElements";

const Projects = () => {
  return (
    <AboutContainer id="about">
      <AboutH1>Hi there! My name is Justin.</AboutH1>
      <AboutP>This is a brief intro about me.</AboutP>
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
