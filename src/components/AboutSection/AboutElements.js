import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 1500px;
  background: #010606;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1600px;
  }
`;

export const AboutH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  color: #fff;

  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 70vw;

    font-size: 1.8rem;
    font-weight: 300;

    margin-top: 40px;
  }
`;

export const AboutImgWrap = styled.div`
  display: flex;
  margin-top: 70px;

  max-width: 225px;

  @media screen and (max-width: 768px) {
    margin-top: 25px;

    max-width: 175px;
  }
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

  @media screen and (max-width: 768px) {
    width: 70vw;

    font-size: 2rem;
    font-weight: 400;
    line-height: 1.2;

    margin-top: 60px;
  }
`;

export const AboutP = styled.p`
  max-width: 1350px;
  width: 80vw;
  color: #a9a9a9;

  font-family: "Roboto";
  font-style: italic;
  font-weight: 200;
  font-size: 1.25rem;

  text-align: center;
  margin-top: -10px;

  @media screen and (max-width: 768px) {
    width: 65vw;
    margin-top: -5px;

    font-size: 0.9rem;
    font-weight: 100;
    letter-spacing: 1.1px;
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

  @media screen and (max-width: 768px) {
    width: 80vw;

    font-size: 1.6rem;
    font-weight: 300;

    margin-top: 70px;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1350px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  margin-top: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0px;

    grid-gap: 20px;
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

  @media screen and (max-width: 768px) {
    background: #fff;

    height: 210px;
    width: 60vw;
    padding: 10px;
  }
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SkillsH1 = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.2px;

  margin: 0 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: 500;

    text-align: center;

    margin: -10px 0 0 0;
  }
`;

export const SkillsPWrapper = styled.div`
  @media screen and (max-width: 768px) {
    height: 130px;
    width: 100%;

    margin: 10px 0 0 0;

    column-count: 2;
    gap: 0px;
  }
`;

export const SkillsP = styled.p`
  font-size: 1.1rem;
  font-weight: 200;
  line-height: 1.4;

  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 0;

    font-size: 1rem;
    font-weight: 200;
    line-height: 1.3;
  }
`;
