import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'


export default function About() {
    const [backgroundImage, setBackgroundImage] = useState(
        '/products/2.jpg'
    )
    const [backgroundImage1, setBackgroundImage1] = useState(
        '/products/4.jpg'
    )
    const [backgroundImage2, setBackgroundImage2] = useState(
        '/products/3.jpg'
    )

    useEffect(() =>{
        const intervalId = setInterval(() => {
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
            const randomIndex = Math.floor(Math.random() * images.length)
            const randomIndex1 = Math.floor(Math.random() * images.length)
            const randomIndex2 = Math.floor(Math.random() * images.length)
            setBackgroundImage(images[randomIndex])
            setBackgroundImage1(images[randomIndex1])
            setBackgroundImage2(images[randomIndex2])

        },2500)
       

        return () => clearInterval(intervalId)

    })

    return(
<>
<div id="about" className='relative bg-black max-w-[100%] h-fit max-h-fit flex hp:flex-col sm:flex-row'>
<div className='w-[50%] border border-1 border-[#FAD6A5] h-fit flex hp:w-[100%] sm:mx-auto'>
                <div className='w-[50%]' style={
                   {
                    backgroundImage: ` url(${backgroundImage})`,
        backgroundSize: "cover",       
        transition: "background-image 2s ease-in-out",
        animation: "fadeInOut 2s ease-in-out infinite"
                   } 
                }>
                
                </div>
                <div className='flex flex-col w-[50%]'>
                <div className='h-[45vh]' style={
                   {
                    backgroundImage: ` url(${backgroundImage1})`,
        backgroundSize: "cover",       
        transition: "background-image 2s ease-in-out",
        animation: "fadeInOut 2s ease-in-out infinite"
                   } 
                } >
                
                </div>
                <div className='h-[45vh]' style={
                   {
                    backgroundImage: ` url(${backgroundImage2})`,
        backgroundSize: "cover",       
        transition: "background-image 2s ease-in-out",
        animation: "fadeInOut 2s ease-in-out infinite"
                   } 
                }>
                
                </div>
                </div>

              </div>
              <div className='flex items-center justify-center w-[50%] hp:w-[100%] grow-[1] max-h-fit border border-1 border-[#FAD6A5] text-[#FAD6A5] xl:md:p-[12%] md:sm:p-[5%] md:sm:pt-[25%]  text-center jt sm:h-[90.3vh] hp:h-[300px] hp:p-[12%] landscape:p-[10%] '>
              <div>
              <h2 className='text-xl xl:text-3xl'>About Us</h2>
              <p className='xl:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis, 
                  nibh sit amet varius pulvinar, mauris enim rhoncus lorem, quis blandit mauris 
                  nulla vitae mi. Phasellus ac neque justo.
              </p>
              </div>             
              </div>           
                                
        </div>

        <style jsx>{
            `
            

            `
        }

        </style>

  
                

</>
    )
}