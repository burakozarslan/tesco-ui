import React from "react"
import styled from "styled-components"

import Container from "../shared/Container"
import { FaSearch } from "react-icons/fa"

const Middle = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <img
            src="https://upload.wikimedia.org/wikipedia/sco/b/b0/Tesco_Logo.svg"
            alt="Tesco Logo"
          />
        </LogoWrapper>
        <Form>
          <Select>
            <Option>Groceries</Option>
            <Option>Clubcard</Option>
            <Option>Recipes</Option>
          </Select>
          <Input placeholder="Search" />
          <Button
            type="submit"
            onClick={e => {
              e.preventDefault()
            }}
          >
            <FaSearch style={{ margin: "10px" }} size={25} />
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Middle

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`

const LogoWrapper = styled.div`
  width: 125px;
`

const Form = styled.form`
  display: flex;

  * {
    margin-left: 0.5rem;
  }
`

const Select = styled.select`
  padding: 0.425rem 0;
`

const Option = styled.option`
  padding: 1rem;
  color: #666;
`

const Input = styled.input`
  padding: 0.425rem;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: #fff;
`
