import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: ${props => props.theme.deviceSizes.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    grid-template-columns: 1fr;
  }
`
