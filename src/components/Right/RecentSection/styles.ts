import styled from "styled-components"

export const Section = styled.div`
    h3{
        font-size: ${18 * 0.063}rem;
        height: ${18 * 0.063}rem;
        font-weight: 500;
        margin-bottom: ${21 * 0.063}rem;
        color: #324168;
        padding-left: ${20 * 0.063}rem;
    }

    hr{
        margin-bottom: ${20 * 0.063}rem;
    }
    .more{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: ${65 * 0.063}rem;
        
        p{
            margin-right: ${11 * 0.063}rem;
            color: #8795B4;
            font-size: ${14 * 0.063}rem;
            line-height: ${20 * 0.063}rem;
        }
    }
`