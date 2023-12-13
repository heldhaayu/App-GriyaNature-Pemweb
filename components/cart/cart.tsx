import React, { use } from "react";
import Image from "next/image";
import {useRecoilState} from 'recoil'
import {cartState} from '../../atoms/cartstate'
import { useRouter } from "next/router";
interface cartProps{
    cState: Array<any>
}
export default function Cart(props:cartProps){
   
    const router = useRouter()
    const{cState} = props
    console.log(cState)

   
    return(
        <>
        <div onClick={()=>router.push('/cartpage')} className="h-fit w-fit bg-green-400 fixed top-[80%] right-2 z-[1000] rounded-full flex justify-center items-center border-2 border-black">
        <div className="h-[1.2em] w-[1.2em] bg-red-600 rounded-full  absolute flex justify-center items-center top-[0.8em] left-[0.8em] text-white">{cState.length}</div>
        <Image   className="h-[4em] w-[4em] p-2 " alt='image product' width={200} height={200} src={'/cart/cart.png'}/>

        </div>
        </>
    )
}