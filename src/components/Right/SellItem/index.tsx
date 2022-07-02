import {FC} from 'react'
import {Sell, Currency, Amount, Symbol} from "./styles"

interface Data{
    logo:string,
    name:string,
    short:string,
    amnt:string,
    fiat:string
}

interface Props {
    data: Data
}


const index:FC<Props> = ({data}) => {
    const {logo, name, short, amnt, fiat} = data

  return (
    <Sell>
        <Currency>
            <div className="logo-container">
                <img src={logo} alt={`logo of ${name}`}/>
            </div>
            <p className="info">
                <span className="name">{name}</span>
                <span className="short">{short}</span>
            </p>
        </Currency>
        <Amount>
            <span className="amnt">${amnt}</span>
            <span className="fiat">{fiat}</span>
        </Amount>
    </Sell>
  )
}

export default index