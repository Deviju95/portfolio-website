import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  height: 670px;

  background-color: #010606;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterWrap = styled.div`
  padding: 310px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 350px 0 0;
  }
`;

export const FooterH1 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1.1px;
  text-align: center;
  line-height: 1;

  color: #fff;
  opacity: 50%;

  margin: 0;
  padding: 0 30px 0;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 1.1px;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 50px 0 30px 0;

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 30px 0 30px 0;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  margin: auto;

  width: 400px;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;

  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: grey;
    transition: 0.1s ease-out;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const FooterLinkLogo = styled.div`
  font-size: 2rem;
  margin: 0 0 -25px;

  @media screen and (max-width: 768px) {
  }
`;
export const FooterLinkP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.8px;

  @media screen and (max-width: 768px) {
  }
`;

export const CopyrightsContainer = styled.section`
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const CopyrightsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;

export const PersonalLogoCircle = styled(Link)`
  background-color: #383838;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin: 10px 0 0;
  }
`;

export const PersonalLogo = styled.p`
  font-family: "personalLogoFont";
  color: #fff;
  font-size: 1.1rem;

  margin: 4px 2px 0 0;

  @media screen and (max-width: 768px) {
  }
`;

export const Copyrights = styled.small`
  font-size: 0.9rem;
  font-weight: 100;
  letter-spacing: 1.2px;

  color: #fff;
  margin: 20px 0 0 0;

  @media screen and (max-width: 768px) {
    margin: 10px 0 0 0;
  }
`;
