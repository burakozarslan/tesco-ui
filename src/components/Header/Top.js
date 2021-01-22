import React from "react"
import styled from "styled-components"

import Container from "../shared/Container"

import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsPerson } from "react-icons/bs"

const Top = ({ toggle }) => {
  return (
    <ContainerFluid>
      <Container>
        <Wrapper>
          <Menu>
            <MenuLink>Sign in</MenuLink>
            <MenuLink>
              <HiOutlineLocationMarker
                style={{
                  marginRight: "0.5rem",
                }}
                size={25}
              />
              Store locator
            </MenuLink>
            <MenuLink>Contact us</MenuLink>
            <MenuLink>Help</MenuLink>
            <MenuLink>
              <BsPerson style={{ marginRight: "0.5rem" }} size={25} />
              My account
            </MenuLink>
          </Menu>
        </Wrapper>
      </Container>
    </ContainerFluid>
  )
}

export default Top

const ContainerFluid = styled.div`
  width: 100%;
  height: 2rem;
  background: ${props => props.theme.colors.primary};
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
`

const MenuLink = styled.a`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: bold;
  line-height: 2rem;
  padding: 0 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-left: 0.5px solid #cbcbcb;

  &:last-child {
    border-right: 0.5px solid #cbcbcb;
  }

  &:hover {
    text-decoration: underline;
  }
`
