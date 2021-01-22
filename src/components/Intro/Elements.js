import styled from "styled-components"

export const Wrapper = styled.div`
  text-align: center;
  padding: 0 2rem;
`

export const H1 = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.textDark};
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`

export const P = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textLight};
`

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
  }
`
