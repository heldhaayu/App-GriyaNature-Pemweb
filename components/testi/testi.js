import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'

export default function Testi({scrollPosition}){
    const [b, setB] = useState(0)

    const divRef = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    useEffect(()=>{

        const handleScroll = () =>{
            const divTesti = document.querySelector('.divTesti')
            const left = document.querySelectorAll('.left')
            const right = document.querySelectorAll('.right')
            const divTestiOffSet = divTesti.offsetTop - 50
            let timeout = 700
            setB(scrollPosition)

            if(b> divTestiOffSet){
              left.forEach(element => {
                setTimeout(() =>{
                    element.classList.add('testi')

                },timeout)
                timeout += 500;                
                
                
            });
            right.forEach(element => {
              setTimeout(() =>{
                  element.classList.add('testi')

              },timeout)
              timeout += 500;                
              
              
          });
          }
        }
        

        handleScroll()

        window.addEventListener('scroll',handleScroll)

        return  () => {
            window.removeEventListener('scroll', handleScroll)
        }

    })
    return (
        <>
        <div id='testimonial' className={`relative xl:top-[-890px] md:top-[-350px] sm:top-[-270px] -z-20 w-[100%] max-h-fit bg-[rgb(57,81,68)]  xl:md:p-[20%] md:p-[0px] xl:mt-[0px] sm:mt-[180px] hp:top-[-50px] divTesti border-white `}>

        <div className='mx-auto   max-h-fit max-w-[140vh]  flex flex-col center xl:translate-y-[-200px] '>
            <div className=''><h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5]  underline'>Testimonials</h2></div>

            <div ref={divRef} className='xl:relative xl:min-h-[100%] md:min-h-[70vh]  md:max-w-[95vw] sm:min-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col  hp:flex-col landscape:max-h-fit left  '>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt xl:static xl:pt-[2vh]  text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[0%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%] '>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px] '>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl  '>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px]'>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>   
                    
                
                                                                 
              </div>              
            </div>
            <div ref={divRef2} className=' xl:min-h-fit md:min-h-[70vh]  md:max-w-[95vw] sm:min-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col hp:flex-col landscape:max-h-fit right'>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt xl:static xl:pt-[4%] text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[0%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%]'>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px]'>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl md:text-left'>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px]'>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>          
                                                              
              </div>              
            </div>
            <div ref={divRef3} className=' xl:min-h-fit md:min-h-[70vh]  md:max-w-[95vw] sm:min-h-[85vh] hp:max-h-[85vh]   sm:max-w-[80vw] hp:max-w-[90vw] hp:mx-auto sm:mx-auto border-[#FAD6A5]  mt-7 border-2 rounded-xl p-[10%] flex shadow-black shadow-md md:flex-row sm:flex-col hp:flex-col landscape:max-h-fit left'>
              <div className='md:max-w-[200px] md:max-h-[400px] self-center border-2 mr-3 border-[#FAD6A5] rounded-full bg-black overflow-hidden shadow-black shadow-md unset-img md:xl:grow-[1] md:w-[150%] sm:max-w-[150px] md:relative sm:absolute sm:max-h-[300px] hp:max-h-[130px] hp:absolute hp:max-w-[130px]'>
              <Image className='prodimg custom-img' src='/testimonials/a.png' layout="fill" objectFit='cover'></Image>
              </div>
              <div className='jt   xl:static xl:pt-[4%] text-[#FAD6A5] md:xl:grow-2 h-3[100%] xl:bottom-4 xl:relative sm:static md:top-[5%] md:mt-[5%] sm:mt-[65%] hp:mt-[60%] '>
                <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 h-0 w-0 inline-block relative bottom-[50px] md:bottom-[85px] sm:pb-[0px] sm:relative sm:bottom-[120px] hp:relative hp:bottom-[70px] hp:text-[80px] sm:text-[80px]'>“</span>
                <div className='relative top-[-100px] sm:top-[-150px] hp:text-center md:text-left'>
                <p className='inline hp:text-2xl md:text-left'>John Doe - Customer</p><span className='hp:text-xl'> ⭐⭐⭐⭐⭐</span>
                <h4 className='md:xl:text-3xl md:text-2xl hp:font-bold hp:text-lg sm:text-2xl sm:text-left'>Amazing Customer Services</h4>
                <p className='md:xl:text-base md:text-base hp:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.</p>
                  <div className='flex absolute xl:top-[20px] md:bottom-[-20px] md:w-[50%] md:relative sm:absolute  sm:bottom-[-20px] hp:static hp:pt-[10px] '>
                  <span className='flex bg-[#FAD6A5] h-2 w-6' ></span>
                  <span className='flex bg-[#FAD6A5]  ml-1 h-2 w-3 '></span>
                  <span className='flex bg-[#FAD6A5] ml-1 h-2 w-2 '></span>
                  </div> 
                  <span className='md:xl:text-[150px] md:text-[140px] jt p-0 m-0 relative left-[80%] xl:bottom-[100%] md:bottom-[90%] sm:p-[20px] text-[80px] sm:top-[60%] sm:absolute hp:absolute hp:top-[210px]'>”</span>
                      
                </div>          
                                                                 
              </div>              
            </div>
            
            
          </div>
         
        </div>

        <style jsx>
            {
                `.right.testi{
                    opacity: 1;
                    transform: translateX(0%);
                    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                }
                .right.testi:hover{  
                   box-shadow: 3px 4px 8px #FAD6A5;          
                  transform: scale(1.02);
                  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
              }
              .left.testi:hover{  
                 box-shadow: 3px 4px 8px #FAD6A5;         
                transform: scale(1.02);
                transition: opacity 1s ease-in-out, transform 1s ease-in-out;
            }

                .left.testi{
                  opacity: 1;
                  transform: translateX(0%);
                  transition: opacity 1s ease-in-out ,transform 1s ease-in-out;
              }

                .right{
                    opacity: 0;
                    transform: translateX(-100%);
                    transition: opacity 1s ease-in-out,transform 1s ease-in-out;
                }

                .left{
                    opacity: 0;
                    transform: translateX(100%);
                    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                }
                
                `
            }
        </style>

        
        
        </>

    )
}