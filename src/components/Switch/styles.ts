import styled from "styled-components"

export const SwitchContainer = styled.div`
    width: ${80 * 0.063}rem;
    height: ${33 * 0.063}rem;
    background: #EDEDED;
    border-radius: ${5 * 0.063}rem;
    position: relative;
    

    input{
        display: none;
        
    }

    

    input:checked + label:after{
        transform:  translateX(100%);

    }
    input:checked + label .off{
        stroke: #0A1930
    }
    input:checked + label .on{
        stroke: #fff
    }
`
export const Label = styled.label`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    
    
    &:after{
        content: "";
        position: absolute;
        background: #64BFD3;
        width: 50%;
        left: 0;
        right: unset;
        border-radius: ${5 * 0.063}rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        transition: all 0.2s ease;
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    z-index: 2;
    position: relative;

    svg.on{
        stroke:#0A1930
    }
    svg.off{
        stroke: #fff
    }
`