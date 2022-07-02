import React, {FC} from "react"
import {Item, Icon, Text} from "./styles"

interface Props{
    img: any,
    text: string,
    active: boolean,
    className?: string
}

const Index:FC<Props> = ({img, text, active, className}) => {
  return (
    <Item active={active} className={className}>
        <Icon >
            <img src={img} alt="icon" />
        </Icon>
        <Text >{text}</Text>
    </Item>
  )
}

export default Index