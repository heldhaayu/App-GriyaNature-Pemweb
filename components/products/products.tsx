import React,  { Component, useRef, useState }  from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  EffectFade , Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import styles from '../../styles/products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';


interface data{
    data:Array<any>
}


export default function Products(props:data ){
    const {data} = props

    console.log(data)


    const router = useRouter()


    
    
    
    return (
        <>
       
        <section id='products' className=" h-fit   text-center  w-full  p-2 text-[#FAD6A5] ">
        <div   >
         <h2 className="text-[2em] p-5">Products</h2>
         </div>
       
        
        
       
        <Swiper className={`${styles.swiperContainer}`}
         modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]}
        
      spaceBetween={50}
      slidesPerView={3}
      navigation     
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        360: {
          // width: 576,
          slidesPerView: 1,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
    >

{data.products.map((dat,i=1)=>(
    <SwiperSlide className="pb-7 p-2 hover:scale-[1.05] transition-all ">
            <div onClick={() => router.push(`/home/${dat.productname}`)} id={`section-${i++}`} className={`h-[100%} flex items-center justify-center   ml-2 inline shrink-0  transition-all   hover:cursor-pointer   `}>
            <div    className={`  h-fit w-fit rounded-2xl border border-white overflow-hidden border-lg border-[#FAD6A5] shadow-lg shadow-black bg-black relative hover:shadow-lg hover:shadow-[#FAD6A5] `}>
            <div className={`absolute text-[#FAD6A5] z-20  flex flex-col items-center justify-center text-center w-[100%] h-[100%]    hover:bg-gradient-to-t hover:from-black opacity-0 hover:opacity-100 ease-in-out transition-all rounded-lg `}>
              <h3 className={'text-3xl '}>{dat.productname}</h3>
              <p className='text-xl'>{dat.hargajual}</p>
              </div> 
              <Image   className="h-[18em] " alt='image product' width={200} height={200} src={dat.url}/>
              
            </div>
            </div>
            </SwiperSlide>
        ))}
     
      ...
    </Swiper>


    

    </section>

        </>
    )
}


