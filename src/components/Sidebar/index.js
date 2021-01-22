import React from "react"
import { navLinks } from "../../data"

import {
  SidebarContainer,
  LeftPanel,
  ButtonWrapper,
  CloseButton,
  SignInWrapper,
  SignIn,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  BottomMenu,
  BottomMenuItem,
  BottomMenuLink,
} from "./Elements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <LeftPanel>
        <SignInWrapper>
          <SignIn href="/">Sign in</SignIn>
        </SignInWrapper>
        <NavMenu>
          {navLinks.map((link, index) => {
            return (
              <NavMenuItem key={index}>
                <NavMenuLink href={link.url}>{link.name}</NavMenuLink>
              </NavMenuItem>
            )
          })}
        </NavMenu>
        <BottomMenu>
          <BottomMenuItem>
            <BottomMenuLink>My Account</BottomMenuLink>
          </BottomMenuItem>
          <BottomMenuItem>
            <BottomMenuLink>Contact Us</BottomMenuLink>
          </BottomMenuItem>
          <BottomMenuItem>
            <BottomMenuLink>Help</BottomMenuLink>
          </BottomMenuItem>
        </BottomMenu>
      </LeftPanel>
      <ButtonWrapper onClick={() => toggle()}>
        <CloseButton />
      </ButtonWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
