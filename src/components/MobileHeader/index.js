import React from "react"

import {
  Header,
  HeaderContainer,
  LogoWrapper,
  Logo,
  ButtonsWrapper,
} from "./Elements"

import { HiLocationMarker } from "react-icons/hi"
import { FaSearch } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"

const MobileHeader = ({ toggle }) => {
  return (
    <Header>
      <HeaderContainer>
        <LogoWrapper>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/sco/b/b0/Tesco_Logo.svg"
            alt="Tesco Logo"
          />
        </LogoWrapper>
        <ButtonsWrapper>
          <HiLocationMarker />
          <FaSearch />
          <GiHamburgerMenu onClick={toggle} />
        </ButtonsWrapper>
      </HeaderContainer>
    </Header>
  )
}

export default MobileHeader
