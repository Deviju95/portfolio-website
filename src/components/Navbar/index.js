import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = (props) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            jj
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-81}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
