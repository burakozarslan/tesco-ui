import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  border-top: 4px solid ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  @media screen and (min-width: ${props => props.theme.deviceSizes.sm}) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 100%;
`

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const ButtonsWrapper = styled.div`
  display: flex;

  * {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    padding: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`
