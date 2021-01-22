import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { BiPlay } from "react-icons/bi"
import carouselBackground from "../../static/images/carouselBackground.jpeg"
import carousel2 from "../../static/images/carousel-2.jpeg"

export const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  margin-top: 2rem;
  background: ${props => props.theme.colors.background};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: none;

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`

export const Column2 = styled(BackgroundImage)`
  width: 100%;
  height: 21.875rem;
  /* background: url(${carousel2}); */
  background-position: center;
  background-size: cover;

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    height: 16rem;
    order: -1;
  }
`

export const Column1 = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  height: 21.875rem;
  width: 100%;
  /* background: url(${carouselBackground});
  background-position: center;
  background-size: cover; */

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    height: 16rem;
  }
`

export const ContentWrapper = styled.div`
  color: #fff;
  padding-left: 1rem;
`

export const H2 = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
`

export const P = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  margin: 0.25rem 0 2rem;
`

export const Button = styled.a`
  color: ${props => props.theme.colors.red};
  padding: 0.6rem 1rem;
  background: #fff;
  font-weight: bold;
  border-radius: 20px;
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.875rem 0;

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    justify-content: center;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  border-right: 1px solid ${props => props.theme.colors.border};

  * {
    margin-right: 1rem;
  }

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    border: none;
  }
`

export const Left = styled(FiChevronLeft)`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
`
export const Right = styled(FiChevronRight)`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`
export const Play = styled(BiPlay)`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin: 0 1rem;

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    display: none;
  }
`

export const Indicator = styled.div`
  border-radius: 50%;
  border: 2px solid
    ${props =>
      props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  width: 1rem;
  height: 1rem;
  background: ${props =>
    props.active ? props.theme.colors.secondary : "transparent"};
`
