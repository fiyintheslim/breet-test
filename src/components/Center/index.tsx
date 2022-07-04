import ReactTooltip from 'react-tooltip';
import Search from "./Search"
import {CenterContainer, Heading, SettingsContainer, Grid} from "./styles"
import Setting from "./Setting"
import SettingArrow from "../SVG/SettingArrowLeft"
import GreenArrowUp from "../SVG/GreenArrowUp"
import BlueArrowDown from '../SVG/BlueArrowDown';
import Switch from "../Switch"
import GridItem from "./GridItem"
import "../../../node_modules/react-tooltip/dist/index.js"

import gh from "../../assets/Ghana.png"
import ng from "../../assets/nigeria.png"

const more = [
  {
    img:gh,
    text:"Cedis - GHS"
  },
  {
    img:ng,
    text:"Naira - NGN"
  }
]
const Index = () => {
  return (
    <>
    <CenterContainer>
      <Search />
      <Heading>Settings</Heading>
      <SettingsContainer>
        <Setting LeftButton={SettingArrow} rightText="Default Wallet" />
        <Setting LeftButton={SettingArrow} rightText="Change Password" />
        <Setting LeftButton={Switch} rightText="Receive Notifications" />
        <Setting LeftButton={GreenArrowUp} rightText="Bank Details" tooltip="Click to Save" />
      </SettingsContainer>
      <Grid>
        <GridItem title="Select Currency" Icon={GreenArrowUp} more={more} />
        <GridItem title="Bank Name" Icon={BlueArrowDown} />
        <GridItem title="Account Number"  />
        <GridItem title="Account Name" className="grey" />
      </Grid>
    </CenterContainer>
    <ReactTooltip /> 
    </>
  )
}

export default Index