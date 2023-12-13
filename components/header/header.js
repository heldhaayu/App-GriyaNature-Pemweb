import Image from 'next/image'
// import Link  from 'next/link'
import Link from 'next/link'
import { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Header ({scrollPosition}){
    const [sizeX, setSizeX] = useState(0)
    const [sizeY, setSizeY] = useState(0)
    const [xMin, setXMin] = useState(0)
    const [translateXValues, setTranslateXValues] = useState(100)
    const [clickNavStatus,setClickNavStatus] = useState(false)
    const [landscape,setLandscape] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const divRef = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    const ulRef = useRef(null);

    const handleClick = useCallback((event, id, offset) => {
      event.preventDefault();     
      event.stopPropagation();
      const target = document.querySelector(id);
      const scroll = document.querySelector('.scroll')
     handleClickNav()
      
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: offset }
      });
    }, [ulRef]);
  

    const handleClickNav = () =>{     
      setClickNavStatus(!clickNavStatus) 
      divRef.current.classList.toggle('animate1')
      divRef2.current.classList.toggle('animate2')
      divRef3.current.classList.toggle('animate3')
      
     
        ulRef.current.classList.toggle('click4') 
        ulRef.current.classList.toggle('click5') 
             
    }
   
    useEffect(() => {
     
      const handleScroll = () => {
        setScrollY(scrollPosition);

        if (window.innerWidth>=768) {
          console.log('hello')
          ulRef.current.classList.remove('ham')
          ulRef.current.classList.remove('ham2')
        
        }else{
          console.log('hello')
          ulRef.current.classList.add('ham')
          ulRef.current.classList.add('ham2')
         
        }    

        
      };

      

      const handleResizeX = () => {
        setSizeX(window.innerWidth)
        setSizeY(window.innerHeight)
       
       
        
        
        
      }

     

      if(window.innerWidth >= 768){
        handleScroll();
      }    

      
      if(window.innerHeight > 332 ){
          
        
      }else{
        
      }
        

      
      handleResizeX();
      
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResizeX)
    
      return () => {
        
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener('resize', handleResizeX);                      
        
      };
    }
    )


    
    // let a= scrollY*2.4;
    // let b= -1000-(-scrollY*20);
    let a= scrollY*2.4;
    let b= -530-(-scrollY);
    let c= scrollY/10;
    let d = scrollY;
    let fntli = 20; 
    let x = sizeX;

   

  
    if(sizeX<1280){  
      
      b =  -552-(-scrollY);   
   

      if(sizeX<768){
b =0;
      }
     
     }
    if(sizeX <= 645){
      console.log('cok')
      a= 0
    c= 0
    b= 0
    d= 0  
     }
     if(sizeX < 481){
     b= 0
     }

   
    if(scrollY > 530){
        a= 1253
        c= 53
        b= 0
        d= 0   
        if(sizeX<1280){
          c = 45          
       
         }
         if (sizeX < 940){
          c= 32
         }
    
         if(sizeX < 836){
          c= 30
         }

         if(sizeX < 769){
          c=12;
          console.log('kontol')
         }
        


         
             
    
    }else if(scrollY > 0){
        
    }

   
    
console.log(sizeX)
console.log(b)
   
   
4
    
    return (
        <header className='flex sticky top-[0] w-full bg-black  max-h-full z-50 border-white '>          
                <div className='flex fixed md:justify-start  top-[0] max-w-2xl max-h-20  md:flex   '
                style={{
                    left: `${a}px`,
                    width: '100vw'
               
                }}>  
                {/* flex justify-start fixed top-[0] max-w-2xl max-h-20 md:flex hp:hidden */}
                 <ul ref={ulRef} className={` order-1 flex xl:justify-start xl:m-0 xl:p-0  fixed xl:left-[20vh]  max-w-fit md:max-h-20 xl:top-[0px]   md:bg-[#395144]  text-[20px] md:h-[72px] pt-[00px]  text-[#FAD6A5] jt z-50  md:shadow-black md:shadow-sm  md:flex-row hp:flex-col hp:top-[50px]  md:top-[0px] md:ml-[0%]  hp:bg-black md:h-fit md:w-fit hp:h-fit hp:w-[200px] hp:px-[50px] md:text-left hp:text-center  ham ham2`}
             style={{
                 left: `${b}px`,
                 
                fontSize: `${fntli}px`,
                
                
            }}
             >
                <li  className='jli sm:p-[21px]    hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#jumboTron',9)} href='#jumboTron' >Home</Link></li>
                <li className='jli sm:p-[21px]    hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#benefits', -200)} href='#benefits' >Benefits</Link></li>
                <li className='jli sm:p-[21px]    hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#products', -150)}  href='#products'  > Products</Link></li>
                <li className='jli sm:p-[21px]    hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#testimonial',-150)} href='#testimonial'  >Testimonials</Link></li>
                <li className='jli sm:p-[21px]   hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#about',50)} href='#about'  >AboutUs</Link></li>
                <li className='jli sm:p-[21px]   hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#faq',25)}  href='#faq' >Faq</Link></li>
                <li className='jli sm:p-[21px]   hp:p-[20px] '><Link onClick={(e) => handleClick(e, '#start',60)}  href='#start' >LetsGo!</Link></li>
                 
            </ul> 
            <style jsx>{
                `
                Link {
                
                }
                .jli{
                    padding-left: ${c}px;
                    padding-right: ${c}px;
                    
                }

                .jli:hover{
                    color:#FFD27D;
                }
                .divImg{
                    left: ${d}px;
                }
                .navlogo{
                  height:60px;
                  width:60px;
                }
               
                .ham{
                  transform:translateX(-100%);
                  transition: transform 1s ease-in-out;
                  margin-left:0px !important;
                     
                }

                .ham.click4{
                  transform:translateX(0%);
                }

                .scroll-to {
                    transition: all 5s ease-in-out;
                  }

                 
                 
                 

                
                  

                  @media screen and (min-width: 640px) {
                    .ham{
                      transform:translateX(0%);
                      transition: transform 1s ease-in-out;
                    }
    
                    .ham.click4{
                      transform:translateX(0%);
                    }
                  }

                  @media screen and (min-width:645px){
                    @keyframes showUp {
                      from {opacity: 0;
                       ;
                      }
                      to {opacity: 1;
                        }
                    }
                    
                    .ham{    
                                 
                           display:none;
                      transform: translate(-100%) !important;
                    margin-left:0px !important;
                     
                      transition: display 2s ease-in-out;
                      
                    }

    

                    .ham.click4{
                      animation-name:showUp;
                      animation-duration:2s;
                      display:flex;
                    
                      transform: translate(0%); 
                                    
                     
                    }

                    .ham2{
                      margin-left:0px !important;
                      transform:translate(-100%);
                      transition: transform 1s ease-in-out;
                    }
    
                    .ham2.click5{
                      transform:translate(0%);
                    }
                  
                  }

                  @media screen and (min-width:768px){

                    .ham2{
                      transform:translate(-100%) !important;
                      margin-left:0px !important;
                      transition: transform 1s ease-in-out;
                      display:flex;
                  
                    }

                    
    
                    .ham2.click5{
                      transform:translate(-0%) !important;
                      margin-left:0px !important;
                      transition: transform 1s ease-in-out;
                  
                      
                    
                    }

                    .ham{
                      transform:translate(-100%) !important;
                      margin-left:0px !important;
                      transition: transform 1s ease-in-out;
                  
                    }

                    
    
                    .ham.click4{
                      transform:translate(0%) !important;
                      
                    }

                  }



                  @media screen and (min-width:641px){                                                                                  
                  
                    .ham{
                      transform:translate(-0%) !important;
                      margin-left:0px !important;
                  
                    }

                    
    
                    .ham.click4{
                      transform:translate(0%) !important;
                      
                    }
                  }


                  @media screen and (min-width:645px){
                    
                    

                    .ham2{
                      transform:translateX(-100%) !important;
                      margin-left:0px !important;
                      transition: transform 1s ease-in-out;
                  
                    }

                    
    
                    .ham2.click5{
                      transform:translateX(0%) !important;
                      margin-left:0px !important;
                      transition: transform 1s ease-in-out;
                  
                      
                    
                    }
                    .ham{
                      transform:translate(-0%) !important;
                      margin-left:0px !important;
                  
                    }

                    
    
                    .ham.click4{
                      transform:translate(0%) !important;
                      
                    }
                  }

                  @media screen and (min-width:361px) {
                    .ham{
                      transform:translate(-100%);
                      margin-left:0px !important;
                  
                    }

                    
    
                    .ham.click4{
                      transform:translate(0%);
                      
                    }

                    .ham2{
                      
                      transition: transform 1s ease-in-out;
                  
                    }

                    
    
                    .ham2.click5{
                      transform:translateX(0%);
                    
                    }
                  }

                  @media screen and (max-width: 360px) {
                    .ham{
                      right:0;
                      
                    }
    
                    .ham.click4{
                      
                      
                    }
                  }

                  @media screen and (height: 276px) {
                    .ham2{
                      transform:translateX(1000%);
                      transition: transform 1s ease-in-out;
                  
                    }

                    .jli{
                      padding:5px;
                    }
    
                    .ham2.click5{
                      transform:translateX(10%);
                    
                    }
                  }
               
                `
            }
                
            </style>
           
                
                <Image  className="order-2 relative  left-[-20vh] top-[-3px] h-[80px] min-w-max md:min-h-max md:min-w-max sm:min-h-max md:inline  hp:hidden  divImg   "  src='/navbar/navbarShape.svg' layout='contain' width={1000} height={10000}></Image>
                    <div className='absolute flex max-w-fit max-h-fit m-0 left-[0px]'>
                    <div className=' navlogo absolute ml-6 bg-blue '>
                        
                    <Image className="   relative z-50 mt-[3px] md:inline hp:hidden" src='/navbar/logo.svg' layout='fill'  object-fit="contain" ></Image>
                   
                    </div>                 
                     <h1 className='ml-4 pt-4  relative text-2xl font-[Pattaya] text-[#FAD6A5] z-50 left-[75%]'>Griya Nature</h1>                    
                    </div>

                </div>  
                

                   <nav  className='w-[101vw] h-[55px] flex absolute left-[-1px] top-[-1px] bg-[#395144] shadow-2xl md:hidden hp:border hp:border-black '>
                     <div>                                          
                     <h1 className='ml-4 pt-4 relative text-2xl font-[Pattaya] text-[#FAD6A5] z-50 left-[0%]'>Griya Nature</h1>                                        
                     </div>
                  <div onClick={handleClickNav} className='m-3 h-[30px]  w-[40px] flex flex-col p absolute right-0'>
                    
                    
                    <span ref={divRef} className="bg-[#FAD6A5] w-[40px] h-[5px] mt-[1px] grow-[1] rounded-sm click1" ></span>
                    <span ref={divRef2} className="bg-[#FAD6A5] max-w-[20px} h-[5px]  mt-[1px] grow-[1] rounded-sm click2"></span>
                    <span ref={divRef3} className="bg-[#FAD6A5] max-w-[20px} h-[5px]  mt-[1px] grow-[1] rounded-sm click3"></span>
                    <style jsx>{`

                  .click1{
                    transform:rotate(0deg) translate(0px, 0px);
                    transition: transform 0.5s ease-in-out;
                  }
                  .click2{
                    transform:scale(1);
                    transition: transform 0.5s ease-in-out;
                  }
                  .click3{
                    transform:rotate(0deg) translate(0px, 0px);
                    transition: transform 0.5s ease-in-out;
                  }
                    
                  .click1.animate1{
                    transform:rotate(45deg) translate(5px, 5px);                    
                  }

                  .click2.animate2{
                    transform:scale(0);
                  }

                  .click3.animate3{
                    transform:rotate(-45deg) translate(9px, -10px)
                  }

                
                  `}</style>
                 </div>
                  </nav>      

                              

              
                
        </header>
        
        
    )
}