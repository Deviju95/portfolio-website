import React from "react";
import { FaInstagram, FaGithub, FaFileAlt } from "react-icons/fa";
import resume2021 from "../../assets/JustinJangResume202109.pdf";

import {
  ThankYouContainer,
  ThankYouLogo,
  TextWrapper,
  TextH1,
  TextH2,
  TextLink,
  SocialLinksWrapper,
  SocialLink,
  SocialLinkLogo,
  SocialLinkP,
  CopyrightP,
} from "./ThankYouElements";

const ThankYouSection = () => {
  return (
    <ThankYouContainer>
      <ThankYouLogo to="/">jj</ThankYouLogo>
      <TextWrapper>
        <TextH1>Thank you for the message — !</TextH1>
        <TextH2>Your message was sent successfully.</TextH2>
        <TextLink to="/">return to original site: justin-jang.com</TextLink>
      </TextWrapper>

      <SocialLinksWrapper>
        <SocialLink
          href="//www.instagram.com/justin_j.ang"
          target="_blank"
          aria-label="Instagram"
        >
          <SocialLinkLogo>
            <FaInstagram />
          </SocialLinkLogo>
          <SocialLinkP>@justin_j.ang</SocialLinkP>
        </SocialLink>
        <SocialLink
          href="//www.github.com/deviju95"
          target="_blank"
          aria-label="Github"
        >
          <SocialLinkLogo>
            <FaGithub />
          </SocialLinkLogo>
          <SocialLinkP> _deviju95</SocialLinkP>
        </SocialLink>
        <SocialLink href={resume2021} target="_blank" area-label="Resume">
          <SocialLinkLogo>
            <FaFileAlt />
          </SocialLinkLogo>
          <SocialLinkP> resume</SocialLinkP>
        </SocialLink>
      </SocialLinksWrapper>

      <CopyrightP>© Justin K. Jang {new Date().getFullYear()}</CopyrightP>
    </ThankYouContainer>
  );
};

export default ThankYouSection;
