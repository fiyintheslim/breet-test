import {FC} from 'react'
import {RightContainer, Top, NotificationContainer, AvatarBG} from "./styles"
import Notification from "../SVG/Notification"
import ProfileDown from "../SVG/ProfileDown"
import Avatar from "../../assets/avatar.png"
import Sell from "./SellSection"
import Item from "./SellItem"
import {sell} from "../../data"

const Index:FC = () => {
  return (
    <RightContainer>
        <Top>
            <NotificationContainer>
                <div className="notification-bg">
                    <Notification />
                </div>
            </NotificationContainer>
            <div className="user-info">
                    <AvatarBG>
                        <img src={Avatar} alt='user avatar' />
                    </AvatarBG>
                    <p className="name">Chika Uzoh</p>
                    <ProfileDown />
                </div>
        </Top>
        <Sell>
            {sell.map((data, i)=><Item key={i} data={data} />)}
            
        </Sell>
    </RightContainer>
  )
}

export default Index