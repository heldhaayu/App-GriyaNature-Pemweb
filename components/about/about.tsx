import React, { useEffect, useRef, useState } from "react";
import styles from '../../styles/about.module.css'
import Image from "next/image";




export default function About({scrollPosition}){
    const divRef = useRef([])

    

    const divElements = divRef.current;

   
    if(scrollPosition>4130){
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
        <section id='about' className={` ${styles.divAbout} h-fit  hp:pb-[16em] xl:pb-[31em] md:pb-[18em]  w-full  mt-7  text-[#FAD6A5] `}>
            <div className="hp:h-full  hp:w-full flex xl:flex-row hp:flex-col border border-[#FAD6A5]">
                <div className="hp:h-[100%] hp:w-[100%] ">
                    <Image className="h-[100%] w-[100%] " alt="about" width={200} height={200} src={'/products/1.jpg'}/>
                </div>
                <div className="hp:border xl:border-none hp:border-[#FAD6A5]  p-5 text-center hp:text-sm sm:text-[1.1em] md:text-[1.2em] hp:h-[17em] xl:w-full xl:h-full  xl:my-auto flex hp:flex-col  justify-center items-center xl:text-[1.2em] xl:px-[2em]">
                    <h2 className="py-3 hp:text-xl xl:text-[1.7em] xl:py-5 ">About Us</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris nulla vitae mi. Phasellus ac neque justo.
                    </p>
                </div>
               
            </div>

            <div id='faq' className=" h-full w-full text-center  ">
                <h2 className="m-5 hp:text-[2em]">FAQ</h2>

                <div className="grid hp:grid-cols-1 sm:grid-cols-2  hp:gap-2 sm:gap-4 h-full w-full text-center hp:text-[1.5em] ">
                    <div ref={(el) => (divRef.current[0] = el)} className={` ${styles.showDiv} border-[0.05em] border-[#FAD6A5] rounded-[1.2em] h-[4em] mx-2 flex items-center justify-center transition-all hover:shadow-md hover:shadow-[#FAD6A5]`}>how to buy ?</div>
                    <div ref={(el) => (divRef.current[1] = el)} className={` ${styles.showDiv} border-[0.05em] border-[#FAD6A5] rounded-[1.2em] h-[4em] mx-2 flex items-center justify-center transition-all hover:shadow-md hover:shadow-[#FAD6A5]`}>how to buy ?</div>
                    <div ref={(el) => (divRef.current[2] = el)} className={`${styles.showDiv} border-[0.05em] border-[#FAD6A5] rounded-[1.2em] h-[4em] mx-2 flex items-center justify-center transition-all hover:shadow-md hover:shadow-[#FAD6A5]`}>how to buy ?</div>
                    <div ref={(el) => (divRef.current[3] = el)} className={`${styles.showDiv} border-[0.05em] border-[#FAD6A5] rounded-[1.2em] h-[4em] mx-2 flex items-center justify-center transition-all hover:shadow-md hover:shadow-[#FAD6A5]`}>how to buy ?</div>

                </div>

            </div>
            
            
        </section>
        </>
    )

}