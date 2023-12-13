import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/about.module.css'
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";





export default function Start({scrollPosition}){
    const router = useRouter()
    const divRef = useRef([])

    

    const divElements = divRef.current;

   
    if(scrollPosition>5030){
      let timeout= 0;
        divElements.forEach((div) => {
          setTimeout(() => {
            div.classList.add(styles.show);
          }, timeout) 
          timeout += 100;
          });
    
}

    return(
        <>
        <section id='start' className="h-fit w-full flex hp:flex-col text-center text-[#FAD6A5] mb-[2em]  bg-gradient-to-b from-[#395144] via-[#4E6C50] to-[#395144]  mb-[8em] ">
                <h2 className="underline text-[2em] sm:text-[3em]">LETS GET START</h2>
                
         <div className="h-fit w-full flex hp:flex-col xl:flex-row">
                <div className="h-fit w-full flex justify-center items-center">
                <Image className="w-[20em] xl:w-[25em]" alt='teko' width={200} height={200} src={'/cta/tko.svg'}/>
                
            </div>
            <div className="h-fit w-full  ">
                <div>
                    <p className="hp:text-[1.4em]  hp:py-3 sm:text-[1.5em] xl:text-[2.5em] xl:text-left"> You can start shopping in your favorite marketplace</p>
                </div>

            <div className="hp:grid hp:grid-cols-2 xl:grid-cols-4 xl:grid-row-2 hp:gap-1 sm:gap-2 xl:gap-0 w-fit h-fit mt-4 mx-auto">
                <div ref={(el) => (divRef.current[0] = el)} className={`${styles.showDiv} flex justify-center items-center`} >
                <Link href='https://shopee.co.id/griya.nature'>
                <Image className="hp:w-[5em] sm:w-[8em] xl:w-[8.9em] xl:h-[8.9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/shopee.png'}/>
                </Link>
                </div>
                <div ref={(el) => (divRef.current[1] = el)} className={` ${styles.showDiv} flex justify-center items-center  `}>
                <Link href='https://www.lazada.co.id/shop/griya-nature/?spm=a2o4j.pdp_revamp.seller.1.141633abyrX2iW&itemId=6619230229&channelSource=pdp'>
                <Image className="hp:w-[6em] hp:h-[6em] sm:w-[9em] sm:h-[9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/lazada.png'}/>
                </Link>
                </div>
                <div ref={(el) => (divRef.current[2] = el)} className={` ${styles.showDiv} flex justify-center items-center`}>
                <Link href='https://www.tokopedia.com/griya-nature?source=universe&st=product'>
                <Image className="hp:w-[5em] sm:w-[8em] xl:h-[9em] xl:w-[9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/tokped.png'}/>
                </Link>
                </div>
                <div ref={(el) => (divRef.current[3] = el)} className={`${styles.showDiv}`}>
                <Link href='https://vm.tiktok.com/ZS84dbpv7/'>
                <Image className="hp:w-[6.2em] hp:h-[6.2em] sm:w-[9.6em] sm:h-[9.6em] xl:h-full transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/tiktok.png'}/>
                </Link>
                </div>
                <button onClick={()=>router.push('/home')} className="col-span-2 xl:my-5 rounded-full xl:col-span-4   bg-[#CFB997] hover:bg-[#AA8B56] text-black font-bold py-2 px-4 md:px-12 md:py-4 sm:px-10  sm:py-3 hp:px-8 border border-blue-700">MULAI</button>
           
           
           
            

            </div>

            </div>
                    
                </div>
            
            

        </section>
        </>
    )


}