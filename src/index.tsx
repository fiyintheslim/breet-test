import {createRoot} from "react-dom/client"
import App from "./App"
import GlobalStyle from "./styles"

const Index = ()=>{
    
    return(
        <>
            <GlobalStyle />
            <App />
        </>

    )
}

const root = createRoot(document.querySelector("#root")!)

root.render(<Index />)