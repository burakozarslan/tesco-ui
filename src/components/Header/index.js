import React from "react"
import styled from "styled-components"

import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"

const Header = () => {
  return (
    <StyledHeader>
      <Top />
      <Middle />
      <Bottom />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    display: none;
  }
`
