import React, {useState, useEffect} from 'react'
import Modal from '../modalBox/modal.js'

export default function Jumbotron () {
    const [backgroundImage, setBackgroundImage] = useState(
        'https://images.unsplash.com/photo-1511091816703-eaa6023626b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    )

    const[open, setOpen] = useState(false)
    const [isLandscape, setIsLandscape] = useState(false);

  

    useEffect(() => {
        const intervalId = setInterval(() => {
            const images = [
                'https://images.unsplash.com/photo-1511091816703-eaa6023626b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                'https://images.unsplash.com/photo-1573256081876-ca883b40ed2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
            ]
            const randomIndex = Math.floor(Math.random() * images.length)
            setBackgroundImage(images[randomIndex])

        },3000)

        function handleOrientationChange() {
            // alert('tinggi : ' +  window.innerHeight + ' lebar : '+window.innerWidth)
          
        }

        handleOrientationChange();


        window.addEventListener("resize", handleOrientationChange);


        return () => {
          clearInterval(intervalId)
          window.removeEventListener("resize", handleOrientationChange);

        }

    },[])

  return (
    <>
    <div id="jumboTron" name="jumboTron" className={`top-0 absolute max-w-[100%] sm:max-h-[90vh]  md:bg-gradient-to-r  md:from-black  md:bg-blend-multiply    hp:bg-center hp:max-h-fit md:bg-[left_bottom_70%] sm:bg-[left_bottom_60%] xl:bg-[left_bottom_60%] hp:h-[100%] hp:bg-fixed hp:relative backgroundImage md:h-[100vh]  xl:mb-[113vh] md:mb-[0vh]  md:h-fit xl:pb-[120vh] md:pb-[100vh] sm:pb-[100vh] overflow-hidden scroll-mt-10 bgp  pClear  border-white  `} style={
        {backgroundImage: ` url(${backgroundImage})`,
        backgroundSize: "cover",       
        transition: "background-image 0.5s ease-in-out",
        animation: "fadeInOut 2s ease-in-out infinite"}
    } >
        
        
      <div className=' pl-[20px] md:xl:pt-[35vh] hp:landscape:px-auto md:pt-[19vh] sm:pt-[16vh] font-[Averia Sans Libre] sm:w-[50%]  hp:w-[100%] sm:mt-[0%] sm:my-[5%] hp:mt-[5%] sm:text-left hp:text-center xl:mt-0  hp:absolute j hp:py-12 sm:py-[1000vh] xl:h-full hp:landscape:h-full sm:top-0 hp:bottom-0 fixText '>
      <h1 className='text-[#F2EAE0] md:xl:text-[50px] md:text-[35px] sm:text-[30px] font-[Averia Serif Libre] jt hp:text-[22px] hp:w-[100%] drop-shadow-md sm:mt-0 hp1:mt-[50%] hp:mt-[100%] xl:pt-0 sm:pt-[30%] md:pt-[15%]'>The Magic Of Kitchen, Herbal Drink And Gift</h1>
      <p className='text-[#F2EAE0] font-[Averia Serif Libre] jt md:xl:text-base md:text-lg sm:text-base hp:text-base hp:w-[100%] drop-shadow-md shadow-white xl:text-2xl sm:right-0 hp:right-[5px] hp:relative  ' >Berikan kenangan, kesehatan dan waktu makan malam yang berarti bagi orang terkasih.</p>
              <button onClick={()=> setOpen(true)} className='bg-[#CFB997] hover:bg-[#AA8B56] font-bold py-2 px-4 rounded text-black md:xl:w-[160px] md:xl:h-[50px] md:w-[120px]  md:h-[45px] jt  hp:w-[50%] m-2 relative  z-40 cursor-pointer  '>Mulai</button>
      </div>
      </div>
      <style jsx>{`
      @keyframes fadeInOut {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      

      bgp{
        background-position: 0%,50%;
        
      }
      h1, p {
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);
        -webkit-text-stroke: 0.5px #AA8B56;
        text-stroke: 0.5px #AA8B56;
        
      }
      .j {
        background: linear-gradient(to left, transparent 0%, black 100%);
       
        
    }
      
      @media only screen and (min-width:768px){
        .j {
          background:  linear-gradient(to left, transparent 0%, black 80%);
       
      
      }
    
      }

      @media screen and (min-width:640px){
        .j {
          background:  linear-gradient(to left, transparent 0%, black 80%) !important;
       
      
      }
    
      }
      @media screen and (min-width:360px ){
        .j {
        background: linear-gradient(to bottom, transparent 40%, black 100%);
       
      }
     
      }

      @media only screen and (orientation: landscape) {
        
      }

      @media screen and (height: 276px) {
        .pClear{
          padding-bottom: 120vh !important;
          height:200vh;
          background-size:cover;
        }

        .fixText{
          margin-top:0px;
          padding-top: 0px;
        }
      }
      
      
      `}</style>
      <Modal open={open} onClose={() => setOpen(false)}/>
      </>
  )

}
