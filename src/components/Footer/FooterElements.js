import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  height: 670px;

  background-color: #010606;
`;

export const FooterWrap = styled.div`
  padding: 310px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterH1 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1.1px;

  color: #fff;
  opacity: 50%;

  margin: 0;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 50px 0 30px 0;

  display: flex;
  align-items: center;
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  margin: auto;

  width: 400px;

  @media screen and (max-width: 768px) {
    grid-template-colums: 1fr;
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
`;

export const FooterLinkLogo = styled.div`
  font-size: 2rem;
  margin: 0 0 -25px;
`;
export const FooterLinkP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.8px;
`;

export const CopyrightsContainer = styled.section`
  width: 100%;
`;

export const CopyrightsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
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
`;

export const PersonalLogo = styled.p`
  font-family: "personalLogoFont";
  color: #fff;
  font-size: 1.1rem;

  margin: 4px 2px 0 0;
`;

export const Copyrights = styled.small`
  font-size: 0.9rem;
  font-weight: 100;
  letter-spacing: 1.2px;

  color: #fff;
  margin: 20px 0 0 0;
`;
