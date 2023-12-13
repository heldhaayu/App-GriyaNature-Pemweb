import React, {useState, useEffect} from 'react'
import Image from 'next/image'


export default function Benefits ({scrollPosition}) {
    const [b,setB] = useState(0)
   
    
    useEffect(() => {

     
  
     
        
        const handleScroll = () => {
            const benefitsContainer = document.querySelector('.benefCont')
            const benefImage = document.querySelectorAll('.benefImage')
            const beneStuffOffset = benefitsContainer.offsetTop + 100
            let timeout = 0                          
            
            setB(scrollPosition)
            if (b > beneStuffOffset) {
                benefImage.forEach(element => {
                    setTimeout(() => {
                         element.classList.add('visible')
                        }, timeout) 
                        timeout += 500;
                });
               
               
                   
                
               
                
              } else {
                
               
              }
        };

        handleScroll()
        
       
        
            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll)
                
            }
          
    })
  
    
    
  return (
    <>
      <div  className={'xl:h-fit xl:relative   sm:h-full xl:mt-[calc(212vh-15rem)] xl:mb-[0px] md:mb-[700px] md:h-[90vh] sm:h-[200vh] hp:h-fit hp:mb-0 scroll-smooth sm: hp1:mb-[0px]     border-white '}>
         {/* benefits */}
       <div id='benefits' className= 'xl:pl-[calc(30%-8.8rem)] md:pl-[calc(35%-8.8rem)] md:translate-x-[10px]  w-[150%]  sm:h-[215vh] hp:h-[2100px]  md:w-[150%] xl:bg-contain  bn xl:absolute xl:bottom-[0px] md:bottom-[410px]    relative left-[-170px] bg-no-repeat text-lg font-bold sm:bottom-[375px]  hp:bottom-[330px]   md:pt-[25%] md:mt-[calc(4.8rem)]  sm:mt-[7rem] sm:mt-[150px]  hp:bg-cover sm:h-fit hp1:pb-[100px]  landscape:h-fit benefCont  '>

        <style jsx>{
            `
            // @keyframes fadeOut {
            //     0%{opacity:0.0;}
            //     25%{opacity:0.25;}
            //     50%{opacity:0.5;}
            //     75%{opacity:0.75;}
            //     100%{opacity:1;}
            // }

            .benefImage {
                opacity: 0;
                transform: translateY(-100%);
                transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
              }
              
              .benefImage.visible {
                opacity: 1;
                transform: translateY(0);
              }

              .benefImage.visible:hover {
                transform: scale(1.1);
              }


              
            
            `
        }

        </style>
         < h2 className='md:xl:text-4xl md:text-3xl xl:pl-[26%] xl:pl-[calc(15%+6.6rem)] md:pl-[calc(14%+6.6rem)] md:xl:mb-6 md:mb-4 md:sm:pt-[15%] md:xl:p-0 sm:pl-[40%]  sm:pt-[30%] sm:text-2xl hp:pl-[60vw]  hp:pt-[460px]  hp:text-[25px]'>Why Choose Our Store?</h2>
        <div className='grid md:grid-cols-3 md:pr-[5%] md:pt-[0%] md:pl-[5%] grid-rows-2 gap-y-[30%] md:pb-[20%] sm:pl-[25%] xl:pl-[12%]  sm:grid-cols-2 sm:gap-0 sm:gap-y-12  xl:pt-[0vh] sm:pt-[0vh] sm:w-fit sm:h-fit sm:gap-x-24 hp:flex hp:flex-col hp:gap-20 sm:grid sm:ml-[0%]  hp1:ml-[calc(40%+2rem)]  hp:ml-[48%]'>
            <div className={`w-fit h-fit text-center  sm:content-center sm:pl-[15%]   hp:mt-[70px] hover:scale-110 transition-all benefImage  `}>          
              <Image className='md:w-[150px] md:h-[150px]  transition-all' src='/benefits/trust.svg' width={200} height={200} alt='trust'></Image> 
            <h3 className='bn'>Trusted And Safe</h3>
            </div>

            <div className={`w-fit h-fit text-center pt-11 hp:pt-0 md:pl-[0%]  sm:mt-[45%] hover:scale-110 transition-all benefImage  `}>          
            <Image className='xl:w-[170px] sm:w-[200px] hp:w-[200px] ' src='/benefits/gift.svg' width={200} height={500} alt='gift'></Image> 
            <h3 className='bn'>Wrapping Gift Service</h3>
            </div>

            <div className={`w-fit h-fit text-center sm:pl-[15%] md:relative md:right-[50px]  md:top-[25%] hover:scale-110 transition-all benefImage  `}>          
            <Image className='md:w-[150px] md:h-[150px] hp:w-[200px]' src='/benefits/unique.svg' width={200} height={500} alt='gift'></Image> 
            <h3 className='bn'>Unique Products</h3>
            </div>
      
            <div className={`w-fit h-fit text-center xl:pl-[45%] md:pl-[45%] md:relative md:left-10 hover:scale-110 transition-all benefImage `}>          
              <Image src='/benefits/avail.svg' width={200} height={500} alt='gift'></Image> 
              <h3 className='bn md:text-[16px] break-normal w-[200px]'>Available In Various Online Marketplaces</h3>
              </div>

              <div className={`w-fit h-fit text-center md:xl:pl-[0%] md:pl-[00%] sm:pl-[15%] sm:relative md:bottom-0 sm:bottom-[60px] md:relative md:left-32 hover:scale-110 transition-all benefImage `}>          
              <Image src='/benefits/service.svg' width={200} height={500} alt='gift'></Image> 
              <h3 className='bn '>Best Services</h3>
              </div>
       
        </div>
        </div>
        </div>
      </>
  )

}
