import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={props.toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={props.toggle}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={props.toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
