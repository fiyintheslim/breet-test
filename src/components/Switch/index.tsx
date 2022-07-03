import {SwitchContainer, Label, Icon} from "./styles"

const index = () => {
  return (
    <SwitchContainer>
        <input type="checkbox" id="checkbox"  />
        <Label htmlFor="checkbox">
            <Icon>
                <svg className="off" width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Icon>
            <Icon>
                <svg className="on" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6" stroke-width="2"/>
                </svg>
            </Icon>
        </Label>
    </SwitchContainer>
  )
}

export default index