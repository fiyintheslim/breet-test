import {FC, ReactNode} from 'react'
import {Section, Total} from "./styles"
import Down from "../../SVG/SellDown"

interface Props {
    children: ReactNode
}

const index:FC<Props> = ({children}) => {
  return (
    <Section>
        <h3>Sell any of these</h3>
        <div>{children}</div>
        <div className="sell-arrow">
            <Down />
        </div>
        <hr />
        <Total>
            <span className="total">Total NGN Balance</span>
            <span className="amount">₦289,043.00</span>
        </Total>
    </Section>
  )
}

export default index