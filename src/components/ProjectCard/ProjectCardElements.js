import styled from "styled-components";

export const ProjectsCard = styled.div`
  max-width: 1100px;
  width: 60vw;
  margin: 0 auto 20px;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

//

export const ProjectsRow = styled.div`
  display: grid;
  grid-auto-colums: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column2 = styled.div`
  grid-area: col2;

  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  padding: 50px;

  @media screen and (max-width: 768px) {
    width: 200px;
    padding: 20px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Column1 = styled.div`
  grid-area: col1;

  margin: 0;
`;

export const TextWrapper = styled.div`
  max-width: 450px;
  padding: 0;
  margin: 50px 25px 50px 50px;

  @media screen and (max-width: 768px) {
    margin: 40px 40px 0px;
  }
`;

export const TopLine = styled.p`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 300;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  margin: 0 0 0 5px;

  color: #0984e3;

  @media screen and (max-width: 768px) {
    font-weight: 300;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.3px;

    margin: 0 0 0 5px;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;

  margin: 3px 0 0;

  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.4;

  margin: 50px 0 0;

  color: #010606;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.3;

    margin: 30px 0 0;
  }
`;

export const TechStack = styled.p`
  font-family: "Roboto";
  font-style: italic;
  letter-spacing: 0.5px;
  font-size: 1rem;
  font-weight: 400;

  margin: 50px 0 0;

  color: #636e72;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.5px;
    font-size: 0.8rem;
    font-weight: 400;

    margin: 30px 0 0;
  }
`;

export const ProjectLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  font-size: 1.1rem;
  font-weight: 500;
  line-height: 0.8;
  text-align: center;

  height: 30px;
  margin: 3px 0 0;

  @media screen and (max-width: 768px) {
    column-gap: 20px;

    font-size: 1.2rem;
    font-weight: 500;

    margin: 20px 0 10px;
  }
`;

export const ProjectLink = styled.a`
  height: 100%;

  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #0984e3;

  &:hover {
    transform: scale(1.02);
    color: #d63031;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ProjectLinkDivider = styled.p`
  height: 100%;

  color: #0984e3;

  @media screen and (max-width: 768px) {
    font-weight: 600;

    color: #74b9ff;
  }
`;
