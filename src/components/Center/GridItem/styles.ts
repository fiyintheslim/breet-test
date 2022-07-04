import styled from "styled-components"

export const  Item = styled.div<{more:boolean}>`
    padding: ${17 * 0.063}rem;
    background: #fff;
    width: ${322 * 0.063}rem;
    border-radius: ${16 * 0.063}rem;
    height: ${prop=>!prop.more ? `${64 * 0.063}rem` : "unset"};

    .grey{
        color: #DADADA;
    }
`

export const Top  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${19 * 0.063}rem;
    min-height: ${34 * 0.063}rem;
    
    p{
        color: #A4B6E1;
        font-size: ${14 * 0.063}rem;
        line-height: ${14 * 0.063}rem;
    }
`

export const More = styled.div`
    margin-top: ${31 * 0.063}rem;
    margin-bottom: ${6 * 0.063}rem;
`

export const MoreContent = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: ${26 * 0.063}rem;

    span{
        font-size: ${14 * 0.063}rem;
        line-height: ${17 * 0.063}rem;
    }
`

