import React, { ReactNode, useState } from "react";
import Nav from "./header/nav";
import Cart from "./cart/cart";
import Footer from "./contact us/contact.tsx";
import {useRecoilState} from 'recoil'
import {cartState} from '../atoms/cartstate'

interface propPage{
    children:  ReactNode,
    page: String,
    cartState: Array<any>,
}

export default function Layout(props:propPage) {
   

    const [cartItem] = useRecoilState(cartState)

    const {children, page}= props
    console.log(children.props)

   

    

    return (
        <>
        <div className="mx-auto  overflow-x-hidden w-full h-fit">
       <Nav page={page} />
        
         <main className="  overflow-x-hidden w-full h-full">{children}</main>

{page !== 'landing' ? <Cart cState={cartItem} /> : null }
         

        <Footer/>

        </div>
    
   

    </>
    )

}