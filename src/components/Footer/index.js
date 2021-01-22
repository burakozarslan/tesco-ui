import React from "react"

import Container from "../shared/Container"

import {
  FooterSection,
  SloganWrapper,
  Slogan,
  Grid,
  Column,
  ColumnHeader,
  ColumnList,
  ColumnItem,
  ColumnLink,
} from "./Elements"

import { footerItems } from "../../data"

const Footer = () => {
  return (
    <footer>
      <FooterSection>
        <Container>
          <SloganWrapper>
            <Slogan src="https://static.wikia.nocookie.net/logopedia/images/c/c2/Tesco_Every_Little_Helps.svg" />
          </SloganWrapper>
          <Grid>
            {footerItems.map((item, index) => {
              return (
                <Column key={index}>
                  <ColumnHeader>{item.title}</ColumnHeader>
                  <ColumnList>
                    {item.links.map((link, index) => {
                      return (
                        <ColumnItem key={index}>
                          <ColumnLink href={link.url}>{link.name}</ColumnLink>
                        </ColumnItem>
                      )
                    })}
                  </ColumnList>
                </Column>
              )
            })}
          </Grid>
        </Container>
      </FooterSection>
    </footer>
  )
}

export default Footer
