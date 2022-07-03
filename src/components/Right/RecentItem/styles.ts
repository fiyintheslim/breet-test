import styled from "styled-components"

export const Item = styled.div`
    padding-left: ${20 * 0.063}rem;
    margin-bottom: ${30 * 0.063}rem;

    .date{
        font-weight: 600;
        font-size: ${14 * 0.063}rem;
        line-height: ${14 * 0.063}rem;
        color: #324168;
        margin-bottom: ${16 * 0.063}rem;
    }
`
export const Details = styled.div`
    display: flex;
    justify-content: space-between;

`
export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${48 * 0.063}rem;
    height: ${48 * 0.063}rem;
    border-radius: ${16 * 0.063}rem;
    margin-right: ${9 * 0.063}rem;
    background: rgba(251, 119, 75, 0.1);;
`

export const Account = styled.div`
    font-size: ${14 * 0.063}rem;

    .name{
        color: #324168;
        font-weight: 600;
        font-size: ${14 * 0.063}rem;
        line-height: ${14 * 0.063}rem;
        margin-bottom: ${10 * 0.063}rem;
    }
    .account{
        color: #A6B2CD;
        line-height: ${16 * 0.063}rem;
        display: flex;
        align-items: center;
    }
    .dot{
        margin-right: ${0.063 * 6}rem;
        width: ${0.063 * 6}rem;
        height: ${0.063 * 6}rem;
        border-radius: 50%;
        background: #05E285;
        display: block;
    }
`

export const Right = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .amnt{
        color: #324168;
        font-weight: 600;
        font-size: ${14 * 0.063}rem;
        line-height: ${14 * 0.063}rem;
        margin-bottom: ${10 * 0.063}rem;
    }
    .last{
        color: #A6B2CD;
        line-height: ${16 * 0.063}rem;
        display: flex;
        align-items: center;
    }
`