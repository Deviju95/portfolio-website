import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background-color: #010606;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  z-index: 10;
`;

export const NavBarContainer = styled.div`
  max-width: 1350px;
  width: 90vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  justify-self: flex-start;
  align-items: center;

  font-family: 'personalLogoFont';
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  margin: 10px 0 0 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;

    margin: 10px 0 0 5px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  margin-right: -22px;

  font-family: 'Calibre';
  font-size: 1.1rem;
  letter-spacing: 2px;
  color: #636e72;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.4rem;
  height: 77px;

  text-decoration: none;
  cursor: pointer;

  &.active {
    padding-top: 3px;
    color: #fff;
    border-bottom: 3px solid #0984e3;
  }
`;
