import React from "react"

import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import Card from "../shared/Card"

import { Grid } from "./Elements"

import { sectionTwoItems } from "../../data"

const SectionTwo = () => {
  return (
    <section>
      <Container>
        <SectionTitle>More from Tesco</SectionTitle>
        <Grid>
          {sectionTwoItems.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default SectionTwo
