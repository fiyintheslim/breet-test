import React, {FC} from "react"
import {Item, Icon, Text} from "./styles"

interface Props{
    img: any,
    text: string
}

const Index:FC<Props> = ({img, text}) => {
  return (
    <Item>
        <Icon >
            <img src={img} alt="icon" />
        </Icon>
        <Text>{text}</Text>
    </Item>
  )
}

export default Index