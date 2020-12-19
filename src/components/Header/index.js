import React from 'react'
import {
    HeaderWrapper,
    HeaderMain ,
    Heading,
    SubHeading
  } from './HeaderElements'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <Heading>Hello, I am Jason Harris</Heading>
        <SubHeading>Let me tell a little about myself</SubHeading> 
      </HeaderMain>
    </HeaderWrapper>
  )
}

export default Header
