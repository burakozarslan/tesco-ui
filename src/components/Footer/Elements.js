import styled from "styled-components"

export const FooterSection = styled.section`
  width: 100%;
  margin-top: 1rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background: ${props => props.theme.colors.background};
`

export const SloganWrapper = styled.div`
  display: inline-block;
  width: 20%;
  vertical-align: top;
  margin-top: 2rem;

  @media screen and (max-width: ${props => props.theme.deviceSizes.md}) {
    display: none;
  }
`

export const Slogan = styled.img`
  width: 50%;
`

export const Grid = styled.div`
  width: 80%;
  display: inline-block;

  @media screen and (max-width: ${props => props.theme.deviceSizes.md}) {
    width: 100%;
  }
`

export const Column = styled.div`
  display: inline-block;
  width: 25%;
  white-space: nowrap;
  vertical-align: top;

  @media screen and (max-width: ${props => props.theme.deviceSizes.md}) {
    width: 50%;
    margin-top: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.deviceSizes.sm}) {
    width: 100%;
    margin-top: 2rem;
  }
`

export const ColumnHeader = styled.h3`
  color: ${props => props.theme.colors.textDark};
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
`
export const ColumnList = styled.ul`
  list-style: none;
`

export const ColumnItem = styled.li`
  margin-top: 1rem;
`

export const ColumnLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.textLight};

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`
