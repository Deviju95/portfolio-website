import React from "react";
import { FaInstagram, FaGithub, FaFileAlt } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  CopyrightsContainer,
  CopyrightsWrap,
  PersonalLogo,
  Copyrights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                href="//www.instagram.com/jaaaaan_g"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram /> @jaaaaan_g
              </FooterLink>
              <FooterLink href="/" target="_blank" aria-label="Github">
                <FaGithub /> _deviju95
              </FooterLink>
              <FooterLink to="/">
                <FaFileAlt />
                resume
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <CopyrightsContainer>
          <CopyrightsWrap>
            <PersonalLogo to="/" onClick={toggleHome}>
              JJ
            </PersonalLogo>
            <Copyrights>
              Justin K. Jang © {new Date().getFullYear()}
              All rights reserved.
            </Copyrights>
          </CopyrightsWrap>
        </CopyrightsContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
