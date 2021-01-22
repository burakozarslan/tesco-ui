import styled from "styled-components"

import { BiChevronRight } from "react-icons/bi"

export const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.background};
  cursor: pointer;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem 2rem;
`

export const TextContainer = styled.div``

export const H3 = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
`

export const P = styled.p`
  color: ${props => props.theme.colors.secondary};
  margin-top: 0.125rem;
`

export const RightArrow = styled(BiChevronRight)`
  font-size: 1rem;
`
