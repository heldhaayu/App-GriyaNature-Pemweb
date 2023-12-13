import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/about.module.css'
import Image from "next/image";




export default function Footer(){

    return(
        <>
        <footer className="w-full h-full flex flex-col bg-black text-[#FAD6A5] text-center  border-b-2 border-[#FAD6A5]">
            <h6 className="text-[1.6em] m-5">Contact</h6>
            <div className="xl:grid xl:grid-cols-3">
            <div className="w-fit h-[calc(100%/3)] flex mx-auto my-6"> 
                <Image className="w-[45px] transition-all  hover:scale-[1.1]" width={200} height={200} alt='gmail' src={'/footer/gmail.svg'}/>
                <p className="text-[1.3em] ml-2 my-auto">griya.nature@gmail.com</p>

            </div>
            <div className="h-[calc(100%/3)] w-full flex justify-center items-center my-6  ">
                <ul className="flex justify-around h-fit w-full my-auto ">
                    <li>
                    <Image className="w-[45px] transition-all  hover:scale-[1.1]" width={200} height={200} alt='gmail' src={'/footer/instagram.svg'}/>
                    </li>
                    <li>
                    <Image className="w-[45px] transition-all  hover:scale-[1.1]" width={200} height={200} alt='gmail' src={'/footer/tiktok.svg'}/>
                    </li>
                    <li>
                    <Image className="w-[45px] transition-all  hover:scale-[1.1]" width={200} height={200} alt='gmail' src={'/footer/whatsapp.svg'}/>
                    </li>
                </ul>
           

            </div>
            <div className="w-fit h-[calc(100%/3)] xl:h-fit flex mx-auto hp:flex-col xl:flex-row my-5 mb-[2em]"> 
                <Image className="w-[45px] mx-auto my-2 xl:w-[2em] xl:mx-0 transition-all  hover:scale-[1.1] " width={200} height={200} alt='gmail' src={'/footer/location.svg'}/>
                <p className="text-[1.3em] ml-2 my-auto text-center xl:text-[1.1em] xl:text-left">Simowau Indah A/47
Sepanjang, Taman, Sidoarjo.</p>

            </div>


            </div>
            
            
            

        </footer>
        </>
    )


}