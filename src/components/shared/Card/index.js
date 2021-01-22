import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Wrapper,
  BottomContainer,
  TextContainer,
  H3,
  P,
  RightArrow,
} from "./Elements"

const Card = ({ image, title, description, className }) => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const cardImage = data.allFile.edges.filter(
    ({ node }) => node.childImageSharp.fluid.originalName === image
  )

  return (
    <Wrapper className={className}>
      <Img fluid={cardImage[0].node.childImageSharp.fluid} />
      <BottomContainer>
        <TextContainer>
          <H3>{title}</H3>
          <P>{description}</P>
        </TextContainer>
        <RightArrow />
      </BottomContainer>
    </Wrapper>
  )
}

export default Card
