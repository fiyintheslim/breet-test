import {FC, ReactNode} from 'react'
import {Section} from "./styles"
import AngleRight from "../../SVG/AngleRight"

interface Props {
    children: ReactNode
}

const Index:FC<Props> = ({children}) => {
  return (
    <Section>
        <h3>Recent Activity</h3>
        <div>
            {children}
        </div>
        <hr />
        <div className="more">
            <p>View more</p>
            <AngleRight />
        </div>
    </Section>
  )
}

export default Index