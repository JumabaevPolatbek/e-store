import React from "react";
import Header from "@/components/Header/header";

type Props = {
    children:React.ReactNode
}
const Layout:React.FC<Props>=({children})=>{
    return(
        <>
            <Header/>
            {children}
            {/*<Footer/>*/}
        </>
    )
}
export {Layout}