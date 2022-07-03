import {FC} from 'react'
import {FieldContainer, Field} from "./styles"
import SearchIcon from "../../SVG/SearchIcon"

const Index: FC = () => {
  return (
    <FieldContainer>
        <SearchIcon />
        <Field placeholder="Good Afternoon Chika 👋🏻" />
    </FieldContainer>
  )
}

export default Index