import React from 'react'
import { useRouter } from 'next/router'

export default function SideNav(){
    const router = useRouter()
    return(
        <>
        <aside className=' bg-black h-[100vh] md:h-[90vh] xl:w-[20%] md:w-[25%] w-[20%] flex items-center justify-center  hp:h-fit hp:w-full hp:mt-[5em]  '>
            <ul className='text-white my-auto h-[4em]  w-full flex flex-col justify-around  hp:flex-row md:flex-col md:h-full items-center   '>
                <li className='hover:cursor-pointer' onClick={()=>router.push('/rootadmin')}>Home</li>
                <li className='hover:cursor-pointer' onClick={()=>router.push('/rootadmin/productsadmin')}>Products</li>
                <li className='hover:cursor-pointer' onClick={()=>router.push('/rootadmin/adminorder')}>Order</li>
                
            </ul>
        </aside>
        
        </>
    )
}