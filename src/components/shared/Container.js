import React from "react"
import styled from "styled-components"

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (min-width: ${props => props.theme.deviceSizes.xl}) {
    width: ${props => props.theme.deviceSizes.xl};
  }

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    padding: 0 0.5rem;
  }
`

export default Container
