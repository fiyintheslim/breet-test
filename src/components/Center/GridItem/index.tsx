import {FC} from 'react'
import {Item, Top, More, MoreContent} from "./styles"

interface Props {
    title: string,
    className?:string,
    Icon?:FC,
    more?:{img:string, text:string}[]
}

const Index:FC<Props> = ({title, Icon, more, className}) => {
  return (
    <Item more={!!more}>
        <Top>
            <p className={className}>{title}</p>
            {Icon && <Icon />}
        </Top>
        {more && <More>
        {more.map(({img, text})=>(
            <MoreContent>
                <img src={img} alt={text} />
                <span>{text}</span>
            </MoreContent>
        )
        )}
        </More>
        }
    </Item>
  )
}

export default Index