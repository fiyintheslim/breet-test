import React from 'react'
import {LeftContainer, Logo} from "./styles"
import BreetLogo from "../../assets/Breet.png"

const Index = () => {
  return (
    <LeftContainer>
        <Logo src={BreetLogo} alt="breet logo" />
    </LeftContainer>
  )
}

export default Index