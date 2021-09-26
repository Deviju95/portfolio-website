import React from "react";
import { FaInstagram, FaGithub, FaFileAlt } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import resume2021 from "../../assets/JustinJangResume202109.pdf";

import {
  FooterContainer,
  FooterWrap,
  FooterH1,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkLogo,
  FooterLinkP,
  CopyrightsContainer,
  CopyrightsWrap,
  PersonalLogoCircle,
  PersonalLogo,
  Copyrights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterH1>What I Do Today Will Show Tomorrow</FooterH1>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLink
              href="//www.instagram.com/justin_j.ang"
              target="_blank"
              aria-label="Instagram"
            >
              <FooterLinkLogo>
                <FaInstagram />
              </FooterLinkLogo>
              <FooterLinkP>@justin_j.ang</FooterLinkP>
            </FooterLink>
            <FooterLink
              href="//www.github.com/deviju95"
              target="_blank"
              aria-label="Github"
            >
              <FooterLinkLogo>
                <FaGithub />
              </FooterLinkLogo>
              <FooterLinkP> _deviju95</FooterLinkP>
            </FooterLink>
            <FooterLink href={resume2021} target="_blank" area-label="Resume">
              <FooterLinkLogo>
                <FaFileAlt />
              </FooterLinkLogo>
              <FooterLinkP> resume</FooterLinkP>
            </FooterLink>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <CopyrightsContainer>
          <CopyrightsWrap>
            <PersonalLogoCircle to="/" onClick={toggleHome}>
              <PersonalLogo>jj</PersonalLogo>
            </PersonalLogoCircle>
            <Copyrights>
              Justin K. Jang © {new Date().getFullYear()} All rights reserved.
            </Copyrights>
          </CopyrightsWrap>
        </CopyrightsContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
