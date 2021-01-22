import styled from "styled-components"

import { ImCross } from "react-icons/im"

export const SidebarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  right: ${props => (props.isOpen ? "0" : "-100%")};
  /* right: 0; */
  /* opacity: ${props => (props.isOpen ? `100` : `0`)}; */
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
  z-index: 999;

  @media screen and (min-width: ${props => props.theme.deviceSizes.sm}) {
    display: none;
  }
`

export const LeftPanel = styled.div`
  height: 100vh;
  width: 90vw;
  display: inline-block;
  background: ${props => props.theme.colors.primary};
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  float: right;
  background: #000;
  cursor: pointer;
`

export const CloseButton = styled(ImCross)`
  display: block;
  color: #fff;
  font-size: 1.5rem;
  margin: 0 auto;

  @media screen and (max-width: ${props => props.theme.deviceSizes.xs}) {
    font-size: 1rem;
  }
`

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vw;
`

export const SignIn = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

export const NavMenu = styled.ul`
  list-style: none;
  width: 100%;
  background: #fff;
`

export const NavMenuItem = styled.li`
  padding: 1rem 0.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: 4px solid #333;
  }
`

export const NavMenuLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }
`

export const BottomMenu = styled.ul`
  width: 100%;
  list-style: none;
`

export const BottomMenuItem = styled.li`
  padding: 1rem 0.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`

export const BottomMenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`
