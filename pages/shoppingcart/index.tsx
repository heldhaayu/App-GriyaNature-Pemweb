import React from "react";

import {useRecoilState} from 'recoil'
import {cartState} from '../../atoms/cartstate'


export default function index(){
    const [cartItem] = useRecoilState(cartState)

    console.log(cartItem)

    return(
        <>
        <section className="h-[50em] w-full bg-white">
            {
                cartItem.length
            }

        </section>
        </>
    )
}