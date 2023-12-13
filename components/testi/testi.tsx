import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import styles from '../../styles/testi.module.css'

export default function Testi({scrollPosition}){

    const divRef = useRef([])

    

      const divElements = divRef.current;

     
      if(scrollPosition>2500){
        let timeout= 0;
          divElements.forEach((div) => {
            setTimeout(() => {
              div.classList.add(styles.slide);
            }, timeout) 
            timeout += 100;
            });
      
  }

    return(
        <>
        <section id='testimonials' className='w-full h-full my-[5em]'>

            <div className=' h-fit w-fit mx-auto text-center  text-[#FAD6A5]'>

                <h2 className='text-[2em] xl:text-[2.5em] m-2'>Testimonials</h2>

            <div ref={(el) => (divRef.current[0] = el)} className={` ${styles.slideLeftDiv} hp:w-[20em] md:w-[35em] xl:w-[45em] h-fit  hp:flex md:flex-row hp:flex-col  item-center text-center p-5 rounded-lg border-2 border-[#FAD6A5] shadow-md shadow-black mt-7 xl:text-[1.2em] hover:scale-[1.01] transition-all hover:shadow-lg hover:shadow-[#FAD6A5]`} >
                    <div className='mx-auto mt-2 rounded-xl h-fit hp:w-fit md:w-[25%] md:flex md:justify-center md:items-center md:my-auto '> 
                        <Image className='rounded-full hp:h-[7em]  xl:h-[10em] xl:w-[10em]  md:h-[8em] md:w-[8em] hp:w-[7em] border border-[#FAD6A5] md:my-auto' alt='testi' width={200} height={200} src={'/testimonials/a.png'}/>
                    </div>
                    <div className='relative h-[16em] hp:w-fit md:w-[75%] md:text-left md:py-8 xl:py-12 md:ml-4   '>
                        <span className='absolute text-[4em] hp:left-0 md:top-[-0.4em] hp:top-1 md:text-[7em]'>“</span>
                    <h2>John Doe-Customer</h2>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className='hp:text-lg xl:text-[1.2em] hp:font-bold'>Amazing Customer Services</p>
                    <p className='xl:text-[1.05em] xl:pr-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec facilisis, nibh sit amet varius pulvinar, 
                        mauris enim rhoncus lorem, quis blandit mauris nulla vitae mi. 
                        Phasellus ac neque justo.</p>
                        <span className='absolute text-[4em] hp:right-0 hp:bottom-[-0.7em] xl:right-[0.7em]  md:text-[7em]'>”</span>
                        <div className='absolute h-[2em] w-[50%] flex hp:bottom-[-1em] md:bottom-[-0.1em] '>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[60%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[30%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[20%] text-[4em] ml-2'></span>

                        </div>

                    </div>
                   
                </div>

                <div ref={(el) => (divRef.current[1] = el)} className={` ${styles.slideRightDiv} hp:w-[20em] md:w-[35em] xl:w-[45em] h-fit  hp:flex md:flex-row hp:flex-col  item-center text-center p-5 rounded-lg border-2 border-[#FAD6A5] shadow-md shadow-black mt-7 xl:text-[1.2em] hover:scale-[1.01] transition-all hover:shadow-lg hover:shadow-[#FAD6A5]`} >
                    <div className='mx-auto mt-2 rounded-xl h-fit hp:w-fit md:w-[25%] md:flex md:justify-center md:items-center md:my-auto '> 
                        <Image className='rounded-full hp:h-[7em]  xl:h-[10em] xl:w-[10em]  md:h-[8em] md:w-[8em] hp:w-[7em] border border-[#FAD6A5] md:my-auto' alt='testi' width={200} height={200} src={'/testimonials/a.png'}/>
                    </div>
                    <div className='relative h-[16em] hp:w-fit md:w-[75%] md:text-left md:py-8 xl:py-12 md:ml-4   '>
                        <span className='absolute text-[4em] hp:left-0 md:top-[-0.4em] hp:top-1 md:text-[7em]'>“</span>
                    <h2>John Doe-Customer</h2>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className='hp:text-lg xl:text-[1.2em] hp:font-bold'>Amazing Customer Services</p>
                    <p className='xl:text-[1.05em] xl:pr-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec facilisis, nibh sit amet varius pulvinar, 
                        mauris enim rhoncus lorem, quis blandit mauris nulla vitae mi. 
                        Phasellus ac neque justo.</p>
                        <span className='absolute text-[4em] hp:right-0 hp:bottom-[-0.7em] xl:right-[0.7em]  md:text-[7em]'>”</span>
                        <div className='absolute h-[2em] w-[50%] flex hp:bottom-[-1em] md:bottom-[-0.1em] '>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[60%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[30%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[20%] text-[4em] ml-2'></span>

                        </div>

                    </div>
                   
                </div>

                <div ref={(el) => (divRef.current[2] = el)} className={` ${styles.slideLeftDiv} hp:w-[20em] md:w-[35em] xl:w-[45em] h-fit  hp:flex md:flex-row hp:flex-col  item-center text-center p-5 rounded-lg border-2 border-[#FAD6A5] shadow-md shadow-black mt-7 xl:text-[1.2em] hover:scale-[1.01] transition-all hover:shadow-lg hover:shadow-[#FAD6A5]`} >
                    <div className='mx-auto mt-2 rounded-xl h-fit hp:w-fit md:w-[25%] md:flex md:justify-center md:items-center md:my-auto '> 
                        <Image className='rounded-full hp:h-[7em]  xl:h-[10em] xl:w-[10em]  md:h-[8em] md:w-[8em] hp:w-[7em] border border-[#FAD6A5] md:my-auto' alt='testi' width={200} height={200} src={'/testimonials/a.png'}/>
                    </div>
                    <div className='relative h-[16em] hp:w-fit md:w-[75%] md:text-left md:py-8 xl:py-12 md:ml-4   '>
                        <span className='absolute text-[4em] hp:left-0 md:top-[-0.4em] hp:top-1 md:text-[7em]'>“</span>
                    <h2>John Doe-Customer</h2>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className='hp:text-lg xl:text-[1.2em] hp:font-bold'>Amazing Customer Services</p>
                    <p className='xl:text-[1.05em] xl:pr-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec facilisis, nibh sit amet varius pulvinar, 
                        mauris enim rhoncus lorem, quis blandit mauris nulla vitae mi. 
                        Phasellus ac neque justo.</p>
                        <span className='absolute text-[4em] hp:right-0 hp:bottom-[-0.7em] xl:right-[0.7em]  md:text-[7em]'>”</span>
                        <div className='absolute h-[2em] w-[50%] flex hp:bottom-[-1em] md:bottom-[-0.1em] '>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[60%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[30%] text-[4em] ml-2'></span>
                        <span className=' bg-[#FAD6A5] rounded-sm hp:h-2 md:h-1 w-[20%] text-[4em] ml-2'></span>

                        </div>

                    </div>
                   
                </div>

                

            </div>

        </section>
        </>
    )
}