import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/jumbotron.module.css'




export default function Jumbo(){

const router = useRouter()
    


    return (
        <>
        <section id='jumbotron'  className={`hp:w-[100%]  md:h-[43em] sm:h-[38em] hp:h-[34em]  hp:text-center  sm:pt-[23em] md:pt-0 hp:pt-[20em] hp:flex hp:align-center bg-purple-700 hp:bg-center sm:bg-[center_-3.5rem] hp:bg-cover transition-all hp:bg-fixed  ${styles.bgChanger}` }>
            <div className="text-[#FAD6A5] hp:bg-gradient-to-t md:text-left md:bg-gradient-to-r md:pt-[13em] xl:pt-[12em] md:px-5 md:pr-[30%] xl:pr-[45%] hp:from-black hp:to-transparent hp:w-full sm:px-2">
                <h2 className={`${styles.textShadow} sm:text-[1.5em] md:text-[2.2em] xl:text-[2.5em]`}>The Magic Of Kitchen, Herbal Drink and Gift</h2>
                <p className={`${styles.textShadow} sm:text-[1.2em] md:text-[1.3em] xl:text-[1.7em]`}>Berikan kenangan, kesehatan dan waktu makan malam yang berarti bagi orang terkasih.</p>
                <button onClick={()=> router.push('/home')} className="bg-[#CFB997] hover:bg-[#AA8B56] text-black font-bold py-2 px-4 md:px-12 md:py-4 sm:px-10  sm:py-3 hp:px-8 border border-blue-700 rounded hp:m-2 z-[999] relative">Mulai</button>
            </div>
        </section>
        </>
    )
}