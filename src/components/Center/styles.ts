import styled from "styled-components"

export const CenterContainer = styled.div`
    flex-grow: 1;
    border-radius: 1rem;
    background: rgb(243 251 253);
    padding: ${28 * 0.063}rem ${24 * 0.063}rem ${61 * 0.063}rem;

    
`
export const Heading = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: #324168;
    margin: 0 auto ${43 * 0.063}rem;
    width: ${658 * 0.063}rem;
`

export const SettingsContainer = styled.div`
    margin-bottom: ${4 * 0.063}rem;
`


export const Grid = styled.div`
    display: grid;
    grid-template: auto / ${322 * 0.063}rem ${322 * 0.063}rem;
    justify-content: center;
    gap: ${14 * 0.063}rem;
`
