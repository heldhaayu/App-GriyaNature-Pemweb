import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Modal from '../modalBox/modal'
import Link from 'next/link'

export default function Start({scrollPosition}){
  const [b,setB] = useState(0)
  const[open, setOpen] = useState(false)
  useEffect(() =>{
    const handleScroll = () =>{
      const divCont = document.querySelector('.divCont')
      const divTeko = document.querySelector('.divTeko')
      const divImg = document.querySelectorAll('.divImg')
      const divContOffSet = divCont.offsetTop - 150
      let timeout = 700     
      setB(scrollPosition)
      if(b> divContOffSet){
          console.log('ok')
        
          setTimeout(() =>{
              divTeko.classList.add('show')

          },timeout)
                        
                        
      divImg.forEach(element => {
        setTimeout(() =>{
            element.classList.add('swipe')

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
        <div id='start' className={`xl:relative xl:top-[1100px]  bg-gradient-to-b from-[#395144] via-[#4E6C50] to-[#395144]  md:bottom-[-30px] md:mb-[5%] sm:relative sm:top-[50px] sm:max-h-[80vh]  hp1:bottom-[-200px] hp:bottom-[-50px] xl:bottom-[0px] h-[100%]   xl:bg-white landscape:max-h-[1000vh] hp2:mb-[100vh] hp1:mb-[30vh] sm:block   hp1:flex hp1:flex-col hp1:items-center hp1:justify-center sm:mb-[100vh] sm:pr-0 hp1:  landscape:mb-[0px] mbAdd  divCont`}>
        <div className='xl:relative  hp2:mb-[60vh]  '>
            <h2 className='text-center text-[#FAD6A5] jt md:text-[60px] sm:text-[50px] underline hp:text-[30px] hp1:text-center '>Lets Gets Start</h2>
            <div className='grid grid-cols-[50%_50%] md:content-center hp1:flex hp1:justify-content  md:mx-[2rem] hp1:left-[0] '>
            <div className='absolute max-w-full max-h-fit flex sm:translate-x-[-20px] hp1:translate-x-[calc(-2vh-15%)] sm:translate-x-[-30px]  hp:flex-col sm:flex-row '>
                <div className='relative  sm:w-[50vw] xl:h-[80vh]  basis-[50%]   bottom-[200px] hp:left-[40px] md:w-[100%] md:h-[100%] hp:w-[100%] hp:h-fit hp:bottom-[50px] hp1:  md:content-center divTeko'>
                <Image className='prodimg custom-img' src='/cta/teko.svg' layout="contain" width={1000} height={1000} objectFit='cover'></Image>
                
                </div>
                <div className='sm:w-[50vw] hp:w-[100%]  sm:mr-[25px] '>
                  <h3 className='xl:md:text-4xl jt text-[#FAD6A5] md:text-3xl  xl:md:p-11 sm:text-2xl hp:text-lg hp:text-center sm:text-left'>
                  You can start shoping in your favorite marketplace.
                  </h3>
                  <div className='sm:flex sm:justify-between h-[150px] w-fit  hp:grid hp:grid-cols-2 hp:mx-auto hp1:mt-[10px] hp:translate-x-[15px]'>
                    <div className='basis-1/4 xl:md:p-[0px] md:p-[10px]   xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-fit md:w-[50px] sm:w-[20px] sm:px-0 hp:w-[100px]   divImg '>
                      <Link href='https://shopee.co.id/griya.nature'>
                      <Image className='prodimg custom-img max-w-[100%] max-h-[100%] cursor-pointer hover:scale-[1.05]  transition-transform  '  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                      </Link>
                    
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[10px]  xl:md:px-[0px] md:px-[1px] sm:p-[5%] xl:w-fit sm:px-0 hp:w-[120px] divImg '>
                    <Link href='https://www.lazada.co.id/shop/griya-nature/?spm=a2o4j.pdp_revamp.seller.1.141633abyrX2iW&itemId=6619230229&channelSource=pdp'>
                    <Image className='prodimg custom-img max-w-[100%] cursor-pointer hover:scale-[1.05]  transition-transform'  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    
                    </Link>
                    
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[20px]  xl:md:px-[0px] md:px-[0px] sm:p-[5%] xl:w-fit sm:px-0 hp:w-[100px] divImg '>
                    <Link href='https://www.tokopedia.com/griya-nature?source=universe&st=product'>
                    <Image className='prodimg custom-img max-w-[100%] cursor-pointer hover:scale-[1.05]  transition-transform '  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    
                    </Link>
                    
                    </div>
                    <div className='basis-1/4  xl:md:p-[0px] md:p-[0px]  xl:md:px-[0px] md:px-[0px] sm:p-[0%] xl:w-fit sm:px-0 hp:w-[120px] hp:p-0 divImg '>
                    <Link href='https://vm.tiktok.com/ZS84dbpv7/'>
                    <Image className='prodimg custom-img hp:w-[120px]  max-w-[100%] cursor-pointer hover:scale-[1.05]  transition-transform'   src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                    
                    </Link>
                    
                    </div>
                  </div>   
                  <button onClick={()=> setOpen(true)}  className='bg-[#CFB997] hover:bg-[#AA8B56]  font-bold py-2 px-4 rounded-xl text-black w-[160px] h-[50px] jt mx-[40%] xl:bottom-[90px] xl:w-[200px] xl:h-[60px] xl:text-xl my-4 border border-slate-900 xl:static md:relative hp:absolute sm:bottom-[-30px] sm:right-[-50px]  hp:bottom-[-200px] hp:mx-[25%] hp:translate-x-[23px] '>Email Us!</button>                
              </div> 
                                  
            </div>   
                                                    
          </div> 

            </div>
     </div>


     <style jsx>{
      `
      .divTeko{
        opacity:0;
        transform:scale(0);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;
      }
      .divTeko.show {
        opacity:1;
        transform:scale(1);
        transition:opacity 1s ease-in-out , transform 1s ease-in-out;
      }

      .divImg{
        opacity:0;
        transform:translateX(100);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;

      }
      .divImg.swipe{
        opacity:1;
        transform:translateX(0);
        transition:opacity 1s ease-in-out, transform 1s ease-in-out;

      }

      @media screen and (height: 276px) {
        .mbAdd{
         margin-bottom: 50vh !important;
        }
      }

      `
     }</style>
 <Modal open={open} onClose={() => setOpen(false)}/>       
        </>
    )
}