import React, {useState, useEffect, useRef} from 'react'
import Modal from '../modalBox/modal'
import Image from 'next/image'



export default function Faq({scrollPosition}) {

    const [b, setB] = useState(0)
    const [selectedFaq, setSelectedFaq] = useState(false);
    useEffect(() =>{
        const handleScroll = () =>{
            const divFaq = document.querySelector('.divFaq')
            const scale = document.querySelectorAll('.scaleUp')
            const right = document.querySelectorAll('.right')
            const divFaqOffSet = divFaq.offsetTop - 0
            let timeout = 700
            setB(scrollPosition)

            if(b> divFaqOffSet){
                console.log('ok')
              scale.forEach(element => {
                setTimeout(() =>{
                    element.classList.add('testi')

                },timeout)
                timeout += 300;                
                
                
            });
            right.forEach(element => {
              setTimeout(() =>{
                  element.classList.add('testi')

              },timeout)
              timeout += 350;                
              
              
          });
          }
        }
        

         handleScroll()

         window.addEventListener('scroll',handleScroll)

        return  () => {
            window.removeEventListener('scroll', handleScroll)
        }
        
    })
    

    return(
        <>
        
        <div id='faq' className='xl:relative faq  bg-contain     max-w-[100%]  md:max-h-[150vh] sm:max-h-[120vh]  hp:h-[120vh] xl:mb-[0vh]  sm:h-[50vh]  xl:pb-[250vh]  md:pb-[70rem]  sm:pb-[130vh] pAdd  divFaq  ' >
              <h2 className='jt text-center text-[#FAD6A5] p-[50px] text-[40px] h-fit  '>FAQ</h2>
            <div className='relative bottom-[3%] bg-contain       grid grid-cols-2 gap-[10%] px-7 py-5 xl:pb-0  landscape:pb-[50vh] xl:pb-[0vh]  xl:bg-none landscape:bg-[length:550px_100vw] absolute border-white   '>
              <div  onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105  transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              <div onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp '>How to Buy?</div>
              <div onClick={() => setSelectedFaq(!selectedFaq)} className='border border-1 border-[#FAD6A5] text-[#FAD6A5] p-[12%] text-center jt rounded-lg text-2xl hover:shadow-md cursor-pointer hover:shadow-[#FAD6A5] hover:scale-105 transition-transform ease-in-out duration-500 scaleUp'>How to Buy?</div>
              
        </div>         
        {selectedFaq && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-[100]">
          
        <div className=" bg-white w-100 sm:w-[35rem] hp:w-80  rounded-lg p-8  ">
          <div className='w-100 text-center bg-slate-100 p-8 rounded-lg overflow-scroll'>
          <h3>how to buy?</h3>
        <p>icaacspinscapininascini
        icaacspinscapininascini
        icaacspinscapininascini
        icaacspinscapininascini
        icaacspinscapininascini
        </p>

          </div>
          
        
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  my-4 rounded-lg w-[100%]"
            onClick={()=> setSelectedFaq(!selectedFaq)}
          >
            Close
          </button>
          

         
          
        </div>
        {/*<style jsx>{`
        .modal {
          animation-name: fadeIn;
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        `}</style>  */}
     </div>
     
      )}
            
            </div>

            <style jsx>
                {
                    `
                    .scaleUp.testi{
                        opacity: 1;
                        transform: scale(1);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }

                    .scaleUp.testi:hover{
                        opacity: 1;
                        transform: scale(1.02);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }


                    left.testi{
                        opacity: 1;
                        transform: translateX(0%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;

                    }

                    .right{
                        opacity: 0;
                        transform: translateX(-100%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }

                    .scaleUp{
                        opacity: 0;
                        transform: scale(0);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }
    
                    .left{
                        opacity: 0;
                        transform: translateX(100%);
                        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
                    }
                   
                    @media screen and (min-width: 760px){
                      .pAdd{
                        z-index:20 !important;
                      }
                    }
                      @media screen and (height: 276px) {
                        .pAdd{
                          padding-bottom: 290vh !important;
                          heigth:100px;
                        }
                      }


                      .modal {
                        animation-name: fadeIn;
                        animation-duration: 0.5s;
                        animation-fill-mode: both;
                      }
                      
                      @keyframes fadeIn {
                        from {
                          opacity: 0;
                        }
                        to {
                          opacity: 1;
                        }
                      }

                    
                    `
                }
            </style>
        </>
    )
}