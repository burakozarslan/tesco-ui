import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Container from "../shared/Container"

import {
  Wrapper,
  Grid,
  Column1,
  Column2,
  ContentWrapper,
  H2,
  P,
  Button,
  Controls,
  ButtonsWrapper,
  Left,
  Right,
  Play,
  Indicator,
} from "./Elements"

const Carousel = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                }
              }
            }
          }
        }
      }
    `
  )

  const leftCarousel = data.allFile.edges.filter(
    ({ node }) =>
      node.childImageSharp.fluid.originalName === "carouselBackground.jpeg"
  )
  const rightCarousel = data.allFile.edges.filter(
    ({ node }) => node.childImageSharp.fluid.originalName === "carousel-2.jpeg"
  )

  return (
    <section>
      <Container>
        <Wrapper>
          <Grid>
            <Column1
              fluid={leftCarousel[0].node.childImageSharp.fluid}
              backgroundColor={`${props => props.theme.colors.red}`}
            >
              <ContentWrapper>
                <H2>Christmas treats</H2>
                <P>Get ready for Christmas with our sweet selection</P>
                <Button>Shop Christmas treats</Button>
              </ContentWrapper>
            </Column1>
            <Column2
              fluid={rightCarousel[0].node.childImageSharp.fluid}
            ></Column2>
          </Grid>
          <Controls>
            <ButtonsWrapper>
              <Left />
              <Indicator active />
              <Indicator />
              <Indicator />
              <Right />
            </ButtonsWrapper>
            <Play />
          </Controls>
        </Wrapper>
      </Container>
    </section>
  )
}

export default Carousel
