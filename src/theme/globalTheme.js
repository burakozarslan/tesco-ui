import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#00539F",
    secondary: "#008DC8",
    background: "#F6F6F6",
    border: "#DDDDDD",
    textDark: "#333333",
    textLight: "#666666",
    red: "#DD3B36",
  },
  fontSizes: {
    sm: "0.875em",
    lg: "1.25em",
    xl: "1.75em",
    xxl: "2em",
  },
  deviceSizes: {
    xs: "419.98px",
    sm: "619.98px",
    md: "755.98px",
    lg: "1279.98px",
    xl: "1519.98px",
  },
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
