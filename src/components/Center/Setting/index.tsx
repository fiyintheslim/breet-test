import {FC} from 'react'
import {SettingHeading, Text} from "./styles"

interface Props {
    LeftButton: FC,
    rightText:string,
    tooltip?:string
}

const index:FC<Props> = ({LeftButton, rightText, tooltip}) => {
  console.log(tooltip)
  return (
    <SettingHeading>
        <div data-tip={tooltip ? tooltip : null} data-place="right" data-effect="solid">
        <LeftButton />
        </div>
        <Text>{rightText}</Text>
    </SettingHeading>
  )
}

export default index