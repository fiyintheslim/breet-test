import {FC} from 'react'
import {RightContainer, Top, NotificationContainer} from "./styles"
import Notification from "../SVG/Notification"

const Index:FC = () => {
  return (
    <RightContainer>
        <Top>
            <NotificationContainer>
                <div>
                    <Notification />
                </div>
                
            </NotificationContainer>
        </Top>
    </RightContainer>
  )
}

export default Index