import styled from "styled-components"

export const Sell = styled.div`
    background: #fff;
    border-radius: ${8 * 0.063}rem;
    padding: ${8 * 0.063}rem ${20 * 0.063}rem ${12 * 0.063}rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    transition: 0.3s ease;
    &:hover{
        box-shadow: 0px 20px 60px rgba(75, 149, 235, 0.1);
        transform: translateY(-0.6rem);
    }
`

export const Currency = styled.div`
    display: flex;
    align-items: center;
    font-size: ${14 * 0.063}rem;

    .logo-container{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #64BFD3;
        width: ${54 * 0.063}rem;
        height: ${54 * 0.063}rem;
        margin-right: 0.63rem;
    }
    .info{
        display: flex;
        flex-direction: column;
    }
    .name{
        color: #2C406E;
        line-height: ${20 * 0.063}rem;
        font-weight: 600;
    }
    .short{
        color: #A6B2CD;
        line-height: ${16 * 0.063}rem;
    }
`

export const Symbol = styled.div`
    border-radius: 50%;
    width: ${54 * 0.063}rem;
    height: ${54 * 0.063}rem;
`

export const Amount = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${14 * 0.063}rem;
    line-height: ${20 * 0.063}rem;
    align-items: flex-end;
    justify-content: center;

    .amnt{
        color: #2C406E;
        font-weight: 600;

    }
    .fiat{
        font-size: ${12 * 0.063}rem;
        line-height: ${16 * 0.063}rem;
        color: #A6B2CD;
    }
`
