import React, {useState, useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link'

import 'swiper/css';

import Image from 'next/image'

export default function ProductsComponent ({scrollPosition}) {

  
 
    const [detail,setDetail] = useState(false)
    const [store , setStore] = useState(false)
    const slideImageRef = useRef(null)
    const [b,setB] = useState(0)
    const [currentSlide1, setCurrentSlide1] = useState(0)
    const [currentSlide2, setCurrentSlide2] = useState(1)
    const [currentSlide3, setCurrentSlide3] = useState(2) 
    const [currentIdx, setCurrentIdx] = useState(0)
    
    const [visible,setVisible] = useState(false)    
    const [pagePerView,setPagePerview] = useState(0)
    const images = ['/products/4.jpg',
'/products/2.jpg',
'/products/3.jpg',
'/products/drink.jpg',
'/products/kitchen.jpg',
'/products/5.jpg',
'/products/6.jpg',
'/products/7.jpg',
'/products/8.jpg',
'/products/9.jpg',
'/products/10.jpg',
'/products/11.jpg',
'/products/12.jpg',
'/products/14.jpg',
'/products/15.jpg']

const productImage = [
  {
    url:`/products/4.jpg`,
    name:`Teflon`,
    price:`Rp. 150k`,    
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/2.jpg`,
    name:`Piring`,
    price:`Rp. 22k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/3.jpg`,
    name:`Garpu`,
    price:`Rp. 22k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/drink.jpg`,
    name:`Gelas Batok`,
    price:`Rp. 6k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida a'
  },
  {
    url:`/products/kitchen.jpg`,
    name:`Telenan`,
    price:`Rp. 11k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/5.jpg`,
    name:`Sendok`,
    price:`Rp. 6k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, c'
  },  
  {
    url:`/products/6.jpg`,
    name:`Payung`,
    price:`Rp. 25k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/7.jpg`,
    name:`Kado Teko`,
    price:`Rp. 50k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/8.jpg`,
    name:`Kado Mangkok`,
    price:`Rp. 105k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/9.jpg`,
    name:`Hampers`,
    price:`Rp. 105k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/10.jpg`,
    name:`Teapot`,
    price:`Rp. 100k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, '
  },
  {
    url:`/products/11.jpg`,
    name:`Pengaduk Madu`,
    price:`Rp. 6k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida leo. Suspendisse varius, orci in lacinia malesuada, libero urna pulvinar elit, sed sodales enim dolor eget dui. Vestibulum viverra consectetur justo, in placerat ligula posuere vitae. Aliquam ut turpis vel nisl accumsan vestibulum. Vestibulum mattis velit non ipsum egestas rhoncus. Donec tristique scelerisque purus, eleifend mattis turpis aliquam a. Nam pretium, purus sed finibus aliquet, elit felis tempor mi, in elementum ipsum dolor at odio. Maecenas egestas faucibus aliquam. Fusce vel eros nulla'
  },
  {
    url:`/products/12.jpg`,
    name:`Kitchen Set`,
    price:`Rp. 120k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/13.jpg`,
    name:`Pisau Set`,
    price:`Rp. 49k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, consectetur eget velit. Suspendisse potenti. Integer est ipsum, feugiat vel elementum in, maximus gravida '
  },
  {
    url:`/products/14.jpg`,
    name:`Herbal Lambung`,
    price:`Rp. 17.5k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas '
  },
  {
    url:`/products/15.jpg`,
    name:`Spatula Set`,
    price:`Rp. 90k`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi vitae lorem scelerisque pharetra interdum eu justo. Vivamus a fermentum velit, sed pretium diam. Sed a aliquam nisi. Maecenas tincidunt ornare egestas. Praesent ut ultrices nulla. Nullam nulla ante, suscipit in dignissim sed, '
  },
]

const [isActive, setIsActive] = useState(false);
const [sizeX, setSizeX] = useState(0);
const [isSwiper, setIsSwiper] = useState(false)
const divRef = useRef(null);
const divRef2 = useRef(null);
const divRef3 = useRef(null);
const rdr1 = useRef(null);
const rdr2 = useRef(null);
const rdr3 = useRef(null);
const rdr4 = useRef(null);
const rdr5 = useRef(null);
     
    useEffect(() =>{
      
     
        const handleScroll =() => {
           const productImage = document.querySelectorAll('.productImage');
           const productText = document.querySelector('.productText')
           const prodOffset  = productText.offsetTop - 150;
           let timeout = 700
          
           
            setB(scrollPosition)
            if (b > prodOffset ) {                
                productImage.forEach(element => {
                    setTimeout(() =>{
                        element.classList.add('visible')
                    },timeout)
                    timeout += 500;
                    setVisible(true)                                      
                });               

               //handleAuto(visible)
               
            }                       

        }

        
       const handleAuto =(visible)=>{
        if(visible){
          let timeout = 1600
          let num = 0
                      
              setTimeout(() => { 
              
              
               
                setCurrentSlide1((currentSlide1+ 4) % images.length)
                             
                setCurrentSlide2((currentSlide2+ 4) % images.length)
                            
                setCurrentSlide3((currentSlide3+ 4) % images.length)
              
            },timeout)                                               
           
        }
         
              
            
          }
          
          const handleResizeX = () => {
            setSizeX(window.innerWidth)            
    
                                        
          }
        
          
      

  

       
        handleResizeX()
        handleScroll()

          
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize',handleResizeX)
            return () => {
                window.removeEventListener('scroll', handleScroll)
                window.removeEventListener('resize',handleResizeX)
            }


    }
    )
    const handleClick = () => {        
      setIsActive(!isActive);
     
      
        
    divRef.current.classList.toggle('visible');


    divRef2.current.classList.toggle('visible');
    divRef3.current.classList.toggle('visible');
            setCurrentSlide1((currentSlide1+ 1) % images.length)
            setCurrentSlide2((currentSlide2+ 1) % images.length)
            setCurrentSlide3((currentSlide3+ 1) % images.length)
               
      
            
    
        
    }

   const handleCLear =() =>{
      rdr1.current.classList.remove('clicked') 
      rdr2.current.classList.remove('clicked') 
      rdr3.current.classList.remove('clicked') 
      rdr4.current.classList.remove('clicked') 
      rdr5.current.classList.remove('clicked') 
    }

    const handleClick1 = () =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      handleCLear()
        rdr1.current.classList.toggle('clicked') 
       
     
       
              setCurrentSlide1(0)
              setCurrentSlide2(1)
              setCurrentSlide3(2)
    }

    const handleClick2 = () =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr2.current.classList.toggle('clicked')

      setCurrentSlide1(3)
              setCurrentSlide2(4)
              setCurrentSlide3(5)
    }

    const handleClick3 =() =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr3.current.classList.toggle('clicked')  
      setCurrentSlide1(6)
              setCurrentSlide2(7)
              setCurrentSlide3(8)
    }

    const handleClick4 =()=>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');

      handleCLear()
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      rdr4.current.classList.toggle('clicked')     
      setCurrentSlide1(9)
              setCurrentSlide2(10)
              setCurrentSlide3(11)
    }

    const handleClick5 =() =>{
      setIsActive(!isActive);
      divRef.current.classList.toggle('visible');
      divRef2.current.classList.toggle('visible');
      divRef3.current.classList.toggle('visible');
      handleCLear()
      rdr5.current.classList.toggle('clicked')
      setCurrentSlide1(12)
              setCurrentSlide2(13)
              setCurrentSlide3(14)
    }


   
    const getIndex = (e, index) =>{
      if(sizeX <= 360){

        setCurrentIdx(index -1)
        productDetail(currentIdx)
        setPagePerview(1)
       
      }else{
      
      }
     
    }
   
let content = null
    if(sizeX <= 360 ){
      
      
      content =
        <Swiper className='flex items-center justify-center hp:p-[3%]     jt h-fit h-[22rem]  '
      spaceBetween={0}
      slidesPerView={1}
     
      pagination={{clickable:true}}
      modules={[Autoplay,Pagination]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      onSlideChange={() => setCurrentSlide1(currentSlide1 + 1)}
      onSwiper={(swiper) => console.log(swiper)}
     
    >
      {productImage.map((product, index=0) =>
       <SwiperSlide onClick={event =>getIndex(event, index)} index={index++} className=''>{slideProduct(product, index)}</SwiperSlide>
      )}
     
      
      ...
    </Swiper>

    }else{
      console.log(productImage[currentSlide1].name)
      content = 
      <>
      <div className=' flex xl:md:justify-between md:justify-around sm:p-[3%] sm:mx-auto hp1:mx-[20px] jt'>
      <div ref={divRef} className={`max-w-[200px] max-h-[500px]  border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md sm:m-[1%]  sm:inline-flex  grow-1  productImage`}
      >  
      <div onClick={() =>{ setDetail(!detail); setCurrentIdx(currentSlide1)}} className={'absolute  text-[#FAD6A5] z-20   flex flex-col items-center justify-center text-center w-[100%] h-[100%] hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100 '}>
     
        <h3 className={'text-3xl '}>{productImage[currentSlide1].name}</h3>
        <p className='text-xl'>{productImage[currentSlide1].price}</p>
        </div>                
        <Image src={productImage[currentSlide1].url} className={` prodimg custom-img img bg-gradient-to-b from-black  `} width={200} height={400} alt='1'></Image>
               
      </div>


      <div  onClick={() =>{ setDetail(!detail); setCurrentIdx(currentSlide2)}} ref={divRef2} className={'max-w-[200px] max-h-[500px]  border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md md:mx-[10px] sm:m-[1%] hp:mx-auto hp:mx-[10px]  grow-1  productImage'}>            
    
      <div className={`absolute text-[#FAD6A5] z-20   flex flex-col items-center justify-center text-center w-[100%] h-[100%]   hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100  `}>
      <h3 className={'text-3xl'}>{productImage[currentSlide2].name}</h3>
        <p className='text-xl'>{productImage[currentSlide2].price}</p>
      </div>
        <Image src={productImage[currentSlide2].url} className={` prodimg custom-img img bg-gradient-to-b from-black `} width={200} height={400} alt='2'></Image>
      </div>
      
      <div ref={divRef3} className={'max-w-[200px] max-h-[500px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md unset-img sm:m-[1%] sm:inline-flex grow-1   productImage'}>  {

      }    
      <div  onClick={() =>{ setDetail(!detail); setCurrentIdx(currentSlide3)}} className={`absolute text-[#FAD6A5] z-20   flex flex-col items-center justify-center text-center w-[100%] h-[100%]  hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100`}>
     
      <h3 className={'text-3xl'}>{productImage[currentSlide3].name}</h3>
        <p className='text-xl'>{productImage[currentSlide3].price}</p>
      </div>      
        <Image className='prodimg custom-img img   '  src={productImage[currentSlide3].url} layout="fill" objectFit='cover' alt='3' ></Image>
      </div>

      

      </div>

      <div className='flex justify-evenly mt-10 hp:mt-0 hp1:my-[50px]'>
            <div ref={rdr1} onClick={handleClick1} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr2} onClick={handleClick2} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr3} onClick={handleClick3} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr4} onClick={handleClick4} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
            <div ref={rdr5} onClick={handleClick5} className='bg-[#FAD6A5] h-[15px] w-[15px] rounded-full shadow-black shadow-sm hover:bg-[#AA8B56] hover:border hover:border-[#FAD6A5] active:after:bg-bg-[#AA8B56] cursor-pointer'></div>
          </div>

      <style jsx>
      {
          `
          @keyframes example {
            from {
              opacity: 0;
              
              
            }to{
              opacity: 1;                    
              
            }
          }

          .upDown{
            animation: example 1.6s ease-in-out infinite;
          }
          .productImage{
              opacity: 0;
              transform: translateY(-100%);
              transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }

          .productImage.visible{
              opacity:1;
              transform: translateY(0);
              transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

          }
          .productImage.visible:hover{
            border: 1px solid #FAD6A5;
            box-shadow: 3px 4px 8px #FAD6A5;
            transform: scale(1.1)                


        }
          .slider {
            animation: example 3s infinite,background-image 3s ease-in-out infinite ;                  
          }
          
          .clicked {
            background-color: #AA8B56;
            border: 1px solid #FAD6A5;
          }

          h3, p {
            text-shadow: 1px 1px 1px rgba(233, 233, 233, 0.5);                
            
          }
          
          `
      }
    </style>
</>
    }

    return (
<>    
        
        <div id='products' className='relative xl:top-[-650px] md:top-[-280px] sm:top-[-270px] hp:top-[-300px] -z-20 w-[100%] max-h-fit bg-[rgb(57,81,68)]  xl:md:p-[20%] md:p-[0px] xl:mt-[260vh] md:mt-[calc(100%)] sm:mt-[180px] hp:top-[-200px]  productText border-white '>
        <h2 className='text-center text-4xl mb-12 text jt  text-[#FAD6A5]  '>Products</h2>
         {content}
          


        </div>

        {detail ? productDetail(currentIdx) : ''} 
          

</>
    )

    function selectStore(){
      
      return(
        <div className='hp:border hp:border-slate-700 hp:rounded hp:mt-2 hp:p-1'>
         <ul className='flex justify-center   hp:translate-x-[7%]'>
          <li className='modal inline'>  <Link href='https://shopee.co.id/griya.nature'>
                            <Image ref={slideImageRef} className='slideModal prodimg custom-img max-w-[70%] hp:max-w-[50%] max-h-[100%] cursor-pointer hover:scale-[1.05]  transition-transform  '  src='/start/shopee.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                            </Link></li>
                            <li className='slideModal inline'>  <Link href='https://shopee.co.id/griya.nature'>
                            <Image ref={slideImageRef} className='slideModal prodimg custom-img max-w-[70%] hp:max-w-[50%] max-h-[100%] cursor-pointer hover:scale-[1.05]  transition-transform  '  src='/start/lazada.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                            
                            </Link></li>
                            <li className='slideModal inline'>  <Link href='https://shopee.co.id/griya.nature'>
                            <Image ref={slideImageRef} className='prodimg custom-img max-w-[70%] hp:max-w-[50%] max-h-[100%] cursor-pointer hover:scale-[1.05]  transition-transform  '  src='/start/tokped.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                            </Link></li>                 
                            <li className='slideModal inline'>  <Link href='https://shopee.co.id/griya.nature'>
                            <Image ref={slideImageRef} className='prodimg custom-img max-w-[70%] hp:max-w-[50%] max-h-[100%] cursor-pointer hover:scale-[1.05]  transition-transform  '  src='/start/tiktok.png' layout="contain" width={100} height={100} objectFit='cover'></Image>
                            </Link></li>
         </ul>
        </div>
      )
          }
      
            function productDetail(idx){
            
              return(
                <>
                <div className='modal jt fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-[100]'>
                  <div className=' w-[1000rem]  sm:w-[35rem] hp:w-80 bg-[#FFFBEB]  rounded-lg p-5 '>
      
                    <div className='flex sm:flex-row hp:flex-col'>
                   
                    <div className='sm:basis-[50%]  border-black border  bg-gray-700 rounded md:overflow-hidden shadow-sm shadow-black hp:basis-[25%] hp:max-h-[200px] hp:flex hp:justify-center hp:overflow-scroll'>
                     
                       <Image id='modal-img'  className='slideModal  hFix prodimg custom-img sm:max-w-[100%] hp:max-w-full hp:max-h-fit sm:max-h-[100%] cursor-pointer hover:scale-[1.05]   transition-transform bg-center '  src={productImage[idx].url} layout="contain" width={100} height={100} objectFit='cover'></Image>
                           
                    
                    </div>
                    <div className='hp:basis-[50%] m-2 hp:basis-[25%] '>
                    <h2 className='text-xl text-bold'>{productImage[idx].name}</h2>
                    
                    <p>Price  :{productImage[idx].price}</p>
                    <div className='hp:overflow-scroll md:overflow-scroll   border-black border  shadow-black md:h-[150px]  xl:h-[140px] sm:h-[150px]  hp:h-[100px] bg-[#F7EFE5]'>
                    <p className=' '>detail :{productImage[idx].detail}</p>
                    </div>
                                  
                    </div>
      
      
                    </div>
                    
                    <div className=' w-50  flex sm:flex-row hp:flex-col  m-2'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ' onClick={()=> setDetail(!detail)}>close</button>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-5 sm:mt-0 hp:mt-3 ' onClick={()=> setStore(!store)}>beli sekarang</button>
                  <div>{store? selectStore() :'' }</div>
                  </div>
                   
                
                  </div>
                  
                 
                </div>
                </>
              )
            }
      
          function slideProduct(productImage){               
            
            return(
              <>
              <div  onClick={( ) =>{ setDetail(!detail);   }} className={`max-w-[200px] max-h-[500px] border-2 border-black rounded-2xl bg-black overflow-hidden shadow-black shadow-md sm:m-[1%] sm:inline-flex  mt-[4%]  grow-2 mx-auto  productImage`}
            >  
            <div className={`absolute text-[#FAD6A5] z-20  flex flex-col items-center justify-center text-center w-[100%] h-[100%]    hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100 ease-in-out `}>
              <h3 className={'text-3xl '}>{productImage.name}</h3>
              <p className='text-xl'>{productImage.price}</p>
              </div>          
              <Image  src={productImage.url} className={` prodimg custom-img img bg-gradient-to-b from-black `} width={200} height={400} alt='1'></Image>
                     
            </div>
           
             <style jsx>
            {
                `
                @keyframes example {
                  from {
                    opacity: 0;
                    
                    
                  }to{
                    opacity: 1;                    
                    
                  }
                }
      
                .upDown{
                  animation: example 1.6s ease-in-out infinite;
                }
                .productImage{
                    opacity: 0;
                    transform: translateY(-100%);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
      
                .productImage.visible{
                    opacity:1;
                    transform: translateY(0);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      
                }
                .productImage.visible:hover{
                  border: 1px solid #FAD6A5;
                  box-shadow: 3px 4px 8px #FAD6A5;
                  transform: scale(1.1)                
      
      
              }
                .slider {
                  animation: example 3s infinite,background-image 3s ease-in-out infinite ;                  
                }
                
                .clicked {
                  background-color: #AA8B56;
                  border: 1px solid #FAD6A5;
                }
      
                h3, p {
                  text-shadow: 1px 1px 1px rgba(233, 233, 233, 0.5);                
                  
                }
      
                @media only screen and (max-width:360px){
                  .productImage.visible:hover{
                    border: 1px solid #FAD6A5;
                    box-shadow: 3px 4px 8px #FAD6A5;
                    transform: scale(1.02)                
        
        
                }
                
                }

                @media screen and (height: 276px) {
                  .hFix{
                    
                    max-height:200vh;
                  
                  }
          
                  .fixText{
                    margin-top:0px;
                    padding-top: 0px;
                  }
                }
      
                
                `
            }
          </style></>
          )
        }
 
}

