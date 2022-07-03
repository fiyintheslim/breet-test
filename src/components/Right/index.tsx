import {FC} from 'react'
import {RightContainer, Top, NotificationContainer, AvatarBG} from "./styles"
import Notification from "../SVG/Notification"
import ProfileDown from "../SVG/ProfileDown"
import Avatar from "../../assets/avatar.png"
import Sell from "./SellSection"
import Item from "./SellItem"
import Recent from "./RecentSection"
import RecentItem from "./RecentItem"
import {sell, recent} from "../../data"

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
        <Recent>
            {recent.map((data, i)=><RecentItem key={i} data={data} />)}
            
        </Recent>
    </RightContainer>
  )
}

export default Index