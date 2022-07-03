import ReactTooltip from 'react-tooltip';
import Search from "./Search"
import {CenterContainer, Heading} from "./styles"
import Setting from "./Setting"
import SettingArrow from "../SVG/SettingArrowLeft"
import GreenArrowUp from "../SVG/GreenArrowUp"
import BlueArrowDown from '../SVG/BlueArrowDown';
import Switch from "../Switch"
import "../../../node_modules/react-tooltip/dist/index.js"


const Index = () => {
  return (
    <>
    <CenterContainer>
      <Search />
      <Heading>Settings</Heading>
      <div>
        <Setting LeftButton={SettingArrow} rightText="Default Wallet" />
        <Setting LeftButton={SettingArrow} rightText="Change Password" />
        <Setting LeftButton={Switch} rightText="Receive Notifications" />
        <Setting LeftButton={GreenArrowUp} rightText="Bank Details" tooltip="Click to Save" />
      </div>
    </CenterContainer>
    <ReactTooltip /> 
    </>
  )
}

export default Index