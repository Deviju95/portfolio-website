import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #010606;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.35s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-130%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #010606;
  height: 80%;
  width: 50vw;
  margin: auto;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  margin: 0;
`;

export const SidebarLink = styled(LinkS)`
  height: 60px;
  width: 20vw;
  margin: 30px 0 0 0;

  color: #fff;
  font-size: 1.4rem;
  list-style: none;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #0984e3;
    transition: 0.2s ease-in-out;
  }
`;
