import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 2200px;
  }

  @media screen and (max-width: 480px) {
    height: 2600px;
  }
`;

export const AboutH2 = styled.h2`
  color: #fff;
  margin: 50px;
  font-size: 36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const AboutImgWrap = styled.div`
  margin: 25px;
  max-width: 250px;
`;
export const AboutImg = styled.img`
  width: 100%;
  border-radius: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  width: 80vw;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutP = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  width: 80vw;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutH3 = styled.h3`
  font-size: 24px;
  color: #fff;
  width: 80vw;
  text-align: left;
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
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
  font-size: 1rem;
  text-align: center;
`;

export const SkillsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
