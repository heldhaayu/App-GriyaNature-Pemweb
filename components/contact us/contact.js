import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact(){

   

    return(
        <>
        <div id='contact' className='xl:relative xl:top-[1180px]  w-[100%] h-[100px] bg-black mt-[0%] jt text-[#FAD6A5] px-[15px] sm:h-fit sm:top-0 hp:relative hp1:top-[350px] hp:top-[250px] hp:h-fit border-white '>
              <div className='text-center text-lg'>contact us</div>
              <div className='flex justify-around py-[20px] md:flex-row sm:flex-col hp:flex-col'>
              <div className='flex xl:md:pl-[0%] md:ml-[2%] md:mb-[0px] md:pt-2 sm:mb-[10px] md:text-base marker:sm:text-lg'><Image className='' src='/footer/gmail.svg' width={20} height={20} ></Image>Griya.nature@gmail.com</div>
              <div className='flex xl:md:ml-[12%] md:pl-[14%] sm:ml-[0%] md:mb-0 sm:mb-[10px] hp:my-3'>
              <Link href='https://instagram.com/griya.nature?igshid=YmMyMTA2M2Y='><Image className='md:ml-[20px] sm:ml-0 cursor-pointer hover:scale-[1.02] hover:shadow-sm hover:border-sm hover:border-[#FAD6A5] hover:shadow-[#FAD6A5]' src='/footer/instagram.svg' width={20} height={20} ></Image></Link>
              <Link  href='https://vm.tiktok.com/ZS84dbpv7/'><Image className='ml-[20px] cursor-pointer hover:scale-[1.02] hover:shadow-sm hover:border-sm hover:border-[#FAD6A5] hover:shadow-[#FAD6A5]' src='/footer/tiktok.svg' width={20} height={20} ></Image></Link>
              <Link  href='https://wa.me/+6281233980247'>
              <Image className='ml-[20px] cursor-pointer hover:scale-[1.02] hover:shadow-sm hover:border-sm hover:border-[#FAD6A5] hover:shadow-[#FAD6A5]' src='/footer/whatsapp.svg' width={20} height={20} ></Image>
              </Link>
              <style jsx>{`
              .contact:hover{
                border: 1px solid #FAD6A5;
                box-shadow: 3px 4px 8px #FAD6A5;
                transform: scale(1.1)   
              }
              
              `}</style>
              
              </div>              
              <div className='flex text-xs xl:md:pl-[0%] md:ml-[20%] md:mr-[0%] md:relative sm:mb-[10px] md:text-xs sm:text-base break-normal '>
              <Image className='' src='/footer/location.svg' width={20} height={20} ></Image>
              Simowau Indah blok A no 47,
              Sepanjang, Taman, Sidoarjo.
              </div>
              </div>
                
              </div>   
      
                                                                
        </>
    )
}