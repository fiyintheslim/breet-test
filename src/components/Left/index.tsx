import React from 'react'
import {LeftContainer, Logo,  MenuSection} from "./styles"
import Item from "./MenuItem"
import BreetLogo from "../../assets/Breet.png"

import {topLeft, bottomLeft} from "../../data"

import logout from "../../assets/logout.png"




const Index = () => {
  return (
    <LeftContainer>
        <Logo src={BreetLogo} alt="breet logo" />
        <MenuSection>
            <p className="menu-title">MENU</p>
            {topLeft.map((item, i)=><Item key={i} img={item.img} active={item.active} text={item.text} />)}
            <hr/>
            {bottomLeft.map((item, i)=><Item key={i} img={item.img} active={item.active} text={item.text} />)}
            <Item img={logout} active={false} text="Log Out" className="logout" />
        </MenuSection>
    </LeftContainer>
  )
}

export default Index