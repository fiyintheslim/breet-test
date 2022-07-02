import styled from "styled-components"

export const RightContainer = styled.div`
    margin-top: ${66 * 0.063}rem;
    width: ${416 * 0.063}rem;
    padding: 0 ${14 * 0.063}rem;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 ${20 * 0.063}rem;
    margin-bottom: ${66 * 0.063}rem;
`

export const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(100, 191, 211, 0.08);
    width: ${32 * 0.063}rem;
    height: ${32 * 0.063}rem;
    border-radius: ${10 * 0.063}rem;
    div{
        position: relative;

        &:before{
            content: "";
            background: #FF278F;
            border: solid 0.063rem #F1F5FF;
            position: absolute;
            right: -${2 * 0.063}rem;
            top: ${4 * 0.063}rem;
            width: ${6 * 0.063}rem;
            height: ${6 * 0.063}rem;
            border-radius: 50%;

        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

`