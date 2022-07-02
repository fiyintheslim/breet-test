import styled from "styled-components"

export const Item = styled.div`
    display: flex;
    margin-bottom: ${32 * 0.063}rem;
    align-items: center;

`

export const Icon = styled.div`
    background: rgba(100, 191, 211, 0.2);
    border-radius: ${0.063 * 10}rem;
    width: ${32 * 0.063}rem;
    height: ${32 * 0.063}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${16 * 0.063}rem;
`

export const Text = styled.p`
    color: #A4B6E1;
    font-size:${14 * 0.063}rem;
    line-height: ${14 * 0.063}rem;
`