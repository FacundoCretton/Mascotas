import React from "react"
import { LayoutStyled } from "./LayoutStyles"


const Layout =({children})=>{

    return(
        <LayoutStyled> 
            {children}
        </LayoutStyled>
    )
}


export default Layout