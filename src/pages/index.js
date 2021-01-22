import React, { useState } from "react"

import GlobalStyle from "../theme/globalStyle"
import Theme from "../theme/globalTheme"

import Header from "../components/Header"
import MobileHeader from "../components/MobileHeader"
import Intro from "../components/Intro"
import Carousel from "../components/Carousel"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

export default function Home() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        <Header />
        <MobileHeader toggle={toggleSidebar} />
        <Intro />
        <main>
          <Carousel />
          <SectionOne />
          <SectionTwo />
          <Footer />
        </main>
      </Theme>
    </>
  )
}
