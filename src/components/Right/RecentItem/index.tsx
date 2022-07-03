import {FC} from 'react'
import {Item, Details, Left, Right, Account, ImgContainer} from "./styles"

interface Details {
    img:string
    time:string,
    name:string,
    account:string,
    amount:string,
    last:string
}
interface Props {
    data: Details
}
const Index:FC<Props> = ({data}) => {
    const {
        img,
        time,
        name,
        account,
        amount,
        last,
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