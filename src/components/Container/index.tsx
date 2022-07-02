import {FC, ReactNode} from "react"
import {Container} from "./styles"

interface Props {
    children: ReactNode
}

const Index: FC<Props> = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Index