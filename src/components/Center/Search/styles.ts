import styled from "styled-components"

export const FieldContainer = styled.div`
    position: relative;
    margin: 0 auto ${41 * 0.063}rem;
    width: ${658 * 0.063}rem;
    height: ${64 * 0.063}rem;

    svg{
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${25 * 0.063}rem;
        margin: auto;
    }
    
`

export const Field = styled.input`
    padding: ${25 * 0.063}rem ${49 * 0.063}rem;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: ${16 * 0.063}rem;
    font-size: ${14 * 0.063}rem;
    font-family: "Rubik", sans-serif;
    outline: none;
    &::placeholder{
        color: #A4B6E1;
    }
`