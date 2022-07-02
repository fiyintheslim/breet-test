import React from 'react'
import {LeftContainer, Logo,  MenuSection} from "./styles"
import Item from "./MenuItem"
import BreetLogo from "../../assets/Breet.png"

import {topLeft} from "../../data"

import dashboard from "../../assets/dashboardIcon.png"
import withdraw from "../../assets/withdrawal.png"
import rate from "../../assets/Rate.png"
import history from "../../assets/History.png"



const Index = () => {
  return (
    <LeftContainer>
        <Logo src={BreetLogo} alt="breet logo" />
        <MenuSection>
            <p className="menu-title">MENU</p>
            {topLeft.map((item, i)=><Item key={i} img={item.img} text={item.text} />)}
            
        </MenuSection>
    </LeftContainer>
  )
}

export default Index