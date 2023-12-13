
import React,{useState,useRef,useEffect} from "react";
import styles from '../../styles/benefits.module.css'
import Image from "next/image";


export default function benefits({scrollPosition}){
    const [inn , setInn] = useState(false)
    let inn2 = false

    const divRef = useRef([])

    

      const divElements = divRef.current;

     
      if(scrollPosition>247){
        let timeout= 0;
          divElements.forEach((div) => {
            setTimeout(() => {
              div.classList.add(styles.slide);
            }, timeout) 
            timeout += 100;
            });
      
  }
    
    return (
        <>
        <section id='benefits' className={`${styles.benImg} hp:w-[100%] p-0 hp:h-[110em] xl:h-[82em] md:h-[85em] hp:relative hp:bottom-[13em] sm:bottom-[12em] md:bottom-[16em] xl:bottom-[17em]  bg-transparent hp:flex hp:flex-center hp:text-center hp:item-center`}>
            <div className=" hp:m-auto hp:pt-[11em] h-full w-fit hp:relative text-center hp:text-[1.5em] hp:font-bold  ">
                <h2 className="md:text-[1.4em]">Why Choose our Store?</h2>
                <div className="md:grid md:grid-cols-2 xl:gap-10">
                <div ref={(el) => (divRef.current[0] = el)} className={`hp:p-5 flex flex-col flex-center item-center ${styles.slideInDiv}  }   `}>
                    <Image className="hp:mx-auto hover:scale-[1.1] transition-all " alt='trusted' width={200} height={200} src={'/benefits/trust.svg'}/>
                    <p>Trusted and Safe</p>
                </div>
                <div ref={(el) => (divRef.current[1] = el)} className={`hp:p-5 flex flex-col flex-center item-center  ${styles.slideInDiv}   `}>
                    <Image className="hp:m-auto md:grow md:h-[8em]  hover:scale-[1.1] transition-all" alt='trusted' width={200} height={200} src={'/benefits/gift.svg'}/>
                    <p className="md:grow md:m-auto">Wrapping Gift and Service</p>
                </div>
                <div ref={(el) => (divRef.current[2] = el)}  className={`hp:p-5 flex flex-col flex-center item-center  ${styles.slideInDiv}   `}>
                    <Image  className="hp:mx-auto hover:scale-[1.1] transition-all" alt='trusted' width={200} height={200} src={'/benefits/unique.svg'}/>
                    <p>Unique Products</p>
                </div>
                <div ref={(el) => (divRef.current[3] = el)} className={`hp:p-5 flex flex-col flex-center item-center  ${styles.slideInDiv}   `}>
                    <Image  className="hp:mx-auto md:h-[6.5em] xl:h-[7.3em] hover:scale-[1.1] transition-all" alt='trusted' width={200} height={200} src={'/benefits/avail.svg'}/>
                    <p>Available in variouse marketplace</p>
                </div>
                <div ref={(el) => (divRef.current[4] = el)} className={`hp:p-5 flex flex-col flex-center item-center md:col-span-2  ${styles.slideInDiv}   `}>
                    <Image  className="hp:mx-auto  hover:scale-[1.1] transition-all " alt='trusted' width={200} height={200} src={'/benefits/service.svg'}/>
                    <p>Best Service</p>
                </div>
                </div>

            </div>

        </section>
        </>
    )
}