
import React, { useState,useCallback } from "react";
import Image from 'next/image'
import Link from "next/link";
import  {useRouter} from "next/router"
import styles from '../../styles/nav.module.css'
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import cookie from 'js-cookie'

gsap.registerPlugin(ScrollToPlugin);

interface navProps{
    page:String
}


export default function Nav(props:navProps) {

    let {page} = props
    console.log('aaa')

    if(page !== 'landing'){
        page='admin'
    }
    console.log(page)



    const router = useRouter()

    async function logOutHandler(e) {

        e.preventDefault()
        cookie.remove('token')
        router.push('/')
    
      }
    
    

    const [ham , setHamClick] = useState(false)
    const [profClick, setProfClick] = useState(false)

    const handleClick = useCallback((event, id, offset) => {
        event.preventDefault();     
        event.stopPropagation();
        const target = document.querySelector(id);
        const scroll = document.querySelector('body')
        
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: offset }
        });
      },[]);
return (
    <>
    <nav className={` sm:w-full  sm:h-fit sm:p-4 hp:h-fit hp:p-4 md:p-5 flex hp:w-[101vw]  w-full bg-[#395144] text-[#FAD6A5] fixed z-[9999] border-b-2 border-[#FAD6A5]`}>

        <div className="flex md:w-[90%] sm:w-[90%] hp:w-[90%]  xl:w-[25%] ">
        <Image alt="logo" width={50} height={50} src={'/navbar/logo.svg'}/>
        <h1 className="p-2 text-[1.2em] xl:text-[1.5em] xl:p-1 xl:pl-2 font-bold font-[Pattaya]">Griya Nature</h1>
       
        </div>

        <div onClick={()=>setHamClick(!ham)} className={` ${styles.ham} hp:w-[3.5em] sm:w-[4em] sm:static hp:absolute hp:right-1 hp:top-[-0.8em]  hp:h-full hp:p-2 flex flex-col xl:hidden `}>
            <span className={`${styles.hamNav1} ${ham ? styles.show1 : ''} hp:w-full hp:h-2 bg-[#FAD6A5] rounded-xl` }></span>
            <span className={`${styles.hamNav2} ${ham ? styles.show2 : ''} hp:w-full hp:h-2 bg-[#FAD6A5] rounded-xl my-1`}></span>
            <span className={`${styles.hamNav3}  ${ham ? styles.show3 : ''} hp:w-full hp:h-2 bg-[#FAD6A5] rounded-xl`}></span>
        </div>

        
        <div className={`${styles.ulNav} ${!ham ? styles.show4 : ''} md:w-[25%] xl:w-[75%] md:flex-rows sm:absolute hp:absolute  xl:static xl:bg-transparent hp:bg-black text-center`}>
        {page === 'landing' ? 
        
        <ul className=" w-full h-full xl:flex xl:flex-row   xl:justify-evenly ">
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#jumbotron',9)} href={'#jumbotron'}>Home</Link></li>
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#benefits',9)} href={'#benefits'}>Benefits</Link></li>
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#products',70)} href={'#products'}>Products</Link></li>
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#testimonials',90)} href={'#testimonials'}>Testimonial</Link></li>
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#about',90)} href={'#about'}>About Us</Link></li>
                <li className="p-5 md:p-5  xl:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#faq',90)} href={'#faq'}>Faq</Link></li>
                <li className="p-5 md:p-5:p-2  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => handleClick(e, '#start',100)}href={'#start'}>Lets Go!</Link></li>
            </ul>
           
            : 
            
           null
             }

             {page === 'admin' ?
              <div className="flex justify-end ">
              <Image onClick={()=> setProfClick(!profClick)} className="border-2 p-1 border-white rounded-full" src={'/uploaduser/usr.png '} width={50} height={50}  alt="user-icon"/>
              {profClick ? 
              <ul className=" w-fit h-fit xl:flex xl:flex-col  xl:justify-evenly absolute bg-black right-0 top-[5.5em] bg-opacity-[0.9] ">
              {/* <li className="p-5 md:p-5  xl:p-5  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => router.push('/profile')} href={'#'}>My profile</Link></li> */}
              <li className="p-5 md:p-5  xl:p-5  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => router.push('/home')} href={'#'}>Home</Link></li>
              <li className="p-5 md:p-5  xl:p-5  md:text-[1.1em] px-7 text-[1.2em]"><Link onClick={(e) => logOutHandler(e)} href={'#'}>Log Out</Link></li>
          </ul>
          :
          null
  
              }
              
              </div>
              :
              null
              }

             
             
        </div> 

       
        
    </nav>
    </>
)
}