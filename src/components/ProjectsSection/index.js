import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./ProjectsElements";

const ProjectsSection = (props) => {
  return (
    <>
      <ProjectsContainer lightBg={props.lightBg} id={props.id}>
        <ProjectsWrapper>
          <ProjectsRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headline}</Heading>
                <Subtitle darkText={props.darkText}>
                  {props.description}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </ProjectsRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
