import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  height: 750px;

  background-color: #010606;
  color: #fff;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterWrap = styled.div`
  margin-top: auto;
  height: 350px;

  text-align: center;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterH1 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1.1px;
  line-height: 1;

  opacity: 50%;

  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 1.1px;
  }
`;

export const FooterLinksContainer = styled.div`
  margin-top: 10px;

  @media screen and (max-width: 768px) {
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
  margin-top: auto;

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

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  text-decoration: none;

  margin-bottom: 10px;

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

  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
  }
`;
