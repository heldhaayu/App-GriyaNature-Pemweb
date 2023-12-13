import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  EffectFade , Autoplay} from 'swiper';

import { useRouter } from "next/router";

import Image from "next/image";

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import styles from '../../styles/products.module.css'

interface data{
    data:Array<any>
}


export default function Hotsales(props:data){

    const {data} = props

    const router = useRouter()
    
    return(
        <>
        <section className="h-fit w-full bg-white pt-[7em] text-center ">
            <h1 className="text-[1.2em] sm:text-[1.6em] mb-3">Hot Sales</h1>


                 
       
        <Swiper className={`${styles.swiperContainer} `}
         modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]}
        
      spaceBetween={0}
      slidesPerView={3}
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
          slidesPerView: 2,
        },
        639: {
          // width: 768,
          slidesPerView: 3,
        },
        1280: {
          // width: 768,
          slidesPerView: 4,
        },
      }}
    >

{data.map((dat, i=1)=>(
    <SwiperSlide className="pb-0 p-2 hover:scale-[1.05] transition-all ">
            <div onClick={() => router.push(`/home/${dat.productname}`)} id={`section-${i++}`} className={`h-[100%} flex items-center justify-center flex-col   ml-2 inline shrink-0  transition-all   hover:cursor-pointer   `}>
            <div    className={`  h-fit w-fit rounded-2xl border border-white overflow-hidden border-lg border-black shadow-md shadow-black bg-black relative flex flex-col `}>
           
              <Image   className="h-[14em] w-[10em] " alt='image product' width={200} height={200} src={dat.url}/>
              
            </div>
            <div className={` text-black z-20  flex flex-col  text-left w-[55em] px-auto px-2 h-[100%]      ease-in-out transition-all rounded-lg text-[0.2em] my-3    `}>
              <h3 className={'text-[5.3em] font-semibold '}>{dat.name}</h3>
              <p className='text-[5em]'>{dat.price}</p>
              <div className="overflow-hidden h-[12em] w-fit text-elipsis ">
              <p className="  text-[4em]  text-elipsis text-gray-800">{dat.detail}</p>
              </div>
              
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