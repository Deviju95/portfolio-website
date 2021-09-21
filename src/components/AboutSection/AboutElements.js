import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 1500px;
  background: #010606;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 2200px;
  }

  @media screen and (max-width: 480px) {
    height: 2600px;
  }
`;

export const AboutH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  color: #fff;

  margin-top: 100px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AboutImgWrap = styled.div`
  display: flex;
  margin-top: 70px;

  max-width: 225px;
`;

export const AboutImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const AboutH1 = styled.h1`
  max-width: 1350px;
  width: 80vw;
  color: #fff;

  font-size: 3rem;
  font-weight: 600;
  line-height: 1.3;

  text-align: center;
  margin-top: 80px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutP = styled.p`
  max-width: 1350px;
  width: 80vw;
  color: #fff;

  font-family: "Roboto";
  font-style: italic;
  font-weight: 200;
  font-size: 1.25rem;

  text-align: center;
  margin-top: -10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutH3 = styled.h3`
  max-width: 1350px;
  width: 80vw;
  color: #fff;

  font-size: 1.8rem;
  font-weight: 500;

  text-align: left;
  margin-top: 80px;
`;

export const SkillsWrapper = styled.div`
  max-width: 1350px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  margin-top: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  height: 400px;
  width: 140px;
  padding: 30px;

  border-radius: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;
`;

export const SkillsH1 = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;

  margin: 0 0 10px;
`;

export const SkillsP = styled.p`
  font-size: 1.1rem;
  font-weight: 200;
  line-height: 1.4;

  text-align: center;
`;
