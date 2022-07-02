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
        border: none;
        background: #F5FAFF;
        height: ${2 * 0.063}rem;
        margin-bottom: ${20 * 0.063}rem;
    }
    .sell-arrow{
        display: flex;
        justify-content: center;

        svg{
            margin-bottom: ${8 * 0.063}rem;
        }
    }
`

export const Total = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: ${14 * 0.063}rem;
    line-height: ${20 * 0.063}rem;
    padding: 0 ${20 * 0.063}rem 0 ${20 * 0.063}rem;

    .total{
        color: #8795B4;

    }
    .amount{
        color: #324168;
        font-weight: 700;
    }
`