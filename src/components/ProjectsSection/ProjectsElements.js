import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};

  @media screen and (max-width: 768) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  margin: auto;

  width: 80vw;

  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

// background: #fff;
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: center;
// border-radius: 10px;
// max-height: 340px;
// padding: 30px;
// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
// transition: all 0.2s ease-in-out;

// &:hover {
//   transform: scale(1.02);
//   transition: all 0.2s ease-in-out;
// }

// display: grid;
// z-index: 1;
// height: 860px;
// width: 100%;
// max-width: 1100px;
// margin-right: auto;
// margin-left: auto;
// padding: 0 24px;
// justify-content: center;

export const ProjectsH1 = styled.h1`
  font-size: 48px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};
  text-align: center;
`;

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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #0984e3;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-botton: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
