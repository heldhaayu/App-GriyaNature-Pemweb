import React from "react";
import Layout from "./layout";
export default function Container({children}) {

    return (
        <>
       
    
    <div className="mx-auto  overflow-x-hidden w-full h-fit">
        
        <Layout>{children}</Layout>
    </div>
    
   

    </>
    )

}