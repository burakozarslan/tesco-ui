import React from "react"

import { H1 } from "./Elements"

const SectionTitle = ({ children, className }) => {
  return <H1 className={className}>{children}</H1>
}

export default SectionTitle
