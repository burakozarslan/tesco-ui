import React from "react"
import styled from "styled-components"
import { navLinks } from "../../data"

import Container from "../shared/Container"

const Bottom = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <Nav>
          {navLinks.map((navLink, index) => {
            return (
              <NavItem key={index}>
                <NavLink>{navLink.name}</NavLink>
              </NavItem>
            )
          })}
        </Nav>
      </Wrapper>
    </StyledContainer>
  )
}

export default Bottom

const StyledContainer = styled(Container)`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const Wrapper = styled.div`
  padding: 0 2rem;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`
const NavItem = styled.div`
  padding: 1rem 0;
  cursor: pointer;
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    border-bottom: 4px solid ${props => props.theme.colors.secondary};
    margin-bottom: -4px;

    & > a {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const NavLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  transition: all 0.2s ease;
`
