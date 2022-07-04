import {FC} from 'react'
import {Item, Details, Left, Right, Account, ImgContainer, ArrowContainer} from "./styles"
import ZigzagArrow from "../../SVG/ZigzagArrow"

interface Details {
    img:string
    time:string,
    name:string,
    account:string,
    amount:string,
    last:string,
    arrow:boolean
}
interface Props {
    data: Details,
    
}
const Index:FC<Props> = ({data}) => {
    const {
        img,
        time,
        name,
        account,
        amount,
        last,
        arrow
    } = data

  return (
   <Item>
    <p className="date">
    {time}
    </p>
    <Details>
        <Left>
            <ImgContainer>
                <img src={img} alt="illustration" />
                {arrow && 
                    <ArrowContainer>
                        <ZigzagArrow />
                    </ArrowContainer>
                }
            </ImgContainer>
            
            <Account>
                <p className="name">{name}</p>
                <p className="account">
                    <span className="dot"></span>
                    <span className="account__det">{account}</span>
                </p>
            </Account>
        </Left>
        <Right>
            <p className="amnt">{amount}</p>
            <p className="last">{last}</p>
        </Right>
    </Details>
   </Item>
  )
}

export default Index