import React from 'react';
import {
  ProjectsCard,
  ProjectsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TechStack,
  ProjectLinksWrapper,
  ProjectLink,
  ProjectLinkDivider,
  ImgWrap,
  Img,
} from './ProjectCardElements';

const ProjectCard = (props) => {
  return (
    <ProjectsCard>
      <ProjectsRow imgStart={props.imgStart}>
        <Column1>
          <TextWrapper>
            <TopLine>{props.topLine}</TopLine>
            <Heading lightText={props.lightText}>{props.title}</Heading>
            <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
            <ProjectLinksWrapper>
              <ProjectLink href={props.linkOne} target='_blank'>
                {props.linkOneTitle}
              </ProjectLink>
              <ProjectLinkDivider>{props.dividerOne}</ProjectLinkDivider>
              <ProjectLink href={props.linkTwo} target='_blank'>
                {props.linkTwoTitle}
              </ProjectLink>
              <ProjectLinkDivider>{props.dividerTwo}</ProjectLinkDivider>
              <ProjectLink href={props.linkThree} target='_blank'>
                {props.linkThreeTitle}
              </ProjectLink>
            </ProjectLinksWrapper>
            <TechStack>{props.techStack}</TechStack>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img src={props.img} alt={props.alt} />
          </ImgWrap>
        </Column2>
      </ProjectsRow>
    </ProjectsCard>
  );
};

export default ProjectCard;
