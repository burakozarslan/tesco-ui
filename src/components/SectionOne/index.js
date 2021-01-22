import React from "react"

import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import Card from "../shared/Card"

import { Grid } from "./Elements"

import { sectionOneItems } from "../../data"

const SectionOne = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Start planning for a cracking Christmas</SectionTitle>
        <Grid>
          {sectionOneItems.map((item, index) => {
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

export default SectionOne
