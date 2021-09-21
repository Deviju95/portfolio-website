import styled from "styled-components";
import { Link } from "react-router-dom";

export const ThankYouContainer = styled.div`
  background-color: #010606;
  width: 100vw;
  height: 100vh;
`;

export const ThankYouLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;

  padding: 50px 0 0 50px;

  font-family: "personalLogoFont";
  font-size: 2rem;
  color: #fff;
  text-decoration: none;

  cursor: pointer;
`;

export const TextWrapper = styled.div`
  color: #fff;

  display: flex;
  flex-direction: column;

  width: 50vw;
  margin: 100px auto 0;
`;

export const TextH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;

  margin: 80px 0 0 0;
`;

export const TextH2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;

  margin: 10px 0 0 0;
`;

export const TextLink = styled(Link)`
  margin: 50px 0 0 5px;

  font-family: "Roboto";
  font-style: italic;
  font-size: 1rem;
  font-weight: 200;

  color: #a9a9a9;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.1s ease-out;
  }
`;

export const SocialLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 250px;

  position: fixed;
  bottom: 20px;
  left: 40px;

  @media screen and (max-width: 768px) {
    grid-template-colums: 1fr;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;

  text-decoration: none;
  color: #a9a9a9;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.1s ease-out;
  }
`;

export const SocialLinkLogo = styled.div`
  font-size: 1.6rem;
  margin: 0 0 -25px;
`;

export const SocialLinkP = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  letter-spacing: 0.8px;
`;

export const CopyrightP = styled.p`
  position: fixed;
  bottom: 15px;
  right: 50px;

  font-size: 0.7rem;
  font-weight: 100;
  letter-spacing: 1.2px;

  color: #fff;
`;
