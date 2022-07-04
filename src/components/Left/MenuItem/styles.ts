import styled from "styled-components"

export const Item = styled.div<{active?:boolean}>`
    display: flex;
    margin-bottom: ${32 * 0.063}rem;
    align-items: center;
    position: relative;
    ${prop=> prop.active ? `
        &:after{
            content:"•";
            background:rgb(243 251 253);
            position: absolute;
            right: -3.3rem;
            /* padding-left: 3rem; */
            height: ${39 * 0.063}rem;
            width: ${39 * 0.063}rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.6rem;
            /* border-top-left-radius: 80rem;
            border-bottom-left-radius: 80rem; */
            transform: rotate(45deg);
            font-size: 1.2rem;
            color: #64BFD3;
            
         }
    ` : ""}

    div{
        background: ${prop=> prop.active ? "#64BFD3" : ""};
        
    }
    p{
        color: ${prop=> prop.active ? "#324168" : ""}
    }
    &.logout{
        margin-top: ${116 * 0.063}rem;
        div{
            background: none;
        }
         p{
            color: #64BFD3
         } 
         
         
    }
    
`

export const Icon = styled.div`
    background: rgba(100, 191, 211, 0.08);
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

    .logout{
        color: #64BFD3;
    }
`