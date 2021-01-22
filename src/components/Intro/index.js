import React from "react"

import Container from "../shared/Container"
import { Wrapper, H1, P, Link } from "./Elements"

const partOfTheDay = () => {
  let message = ""
  let time = new Date().getHours()
  let hour = +time

  if (5 <= hour && hour < 12) {
    message = "Good morning"
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon"
  } else if (hour >= 17 && hour < 21) {
    message = "Good evening"
  } else {
    message = "Good night"
  }

  return message
}

const Intro = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <H1>{partOfTheDay()}</H1>
          <P>
            <Link>Sign in</Link> for the best experience. Not a customer yet?{" "}
            <Link>Register</Link>
          </P>
        </Wrapper>
      </Container>
    </section>
  )
}

export default Intro
