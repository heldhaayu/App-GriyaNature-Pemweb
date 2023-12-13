import React from "react";



import { useRouter } from "next/router";

import Image from "next/image";



interface data{
    data:Array<any>
}


export default function OurProducts(props:data){

    const {data} = props

    const router = useRouter()
    
    return(
        <>
        <section className="h-full w-full bg-white  py-[2em] text-center  py-auto">
            <h1 className="text-[1.2em] mb-[1em]">Our Products</h1>


{/* <div className="w-full h-fit py-2">
  <h2>Category</h2>
  <div className="w-[100%] h-fit  ">
  <div className="h-fit p-1 m-[0.3em] w-fit rounded-full  border-[0.12em] border-black inline-block">Terbaru</div>
    <div className="h-fit p-1 m-[0.3em] w-fit rounded-full  border-[0.12em] border-black inline-block">Terlama</div>
    <div className="h-fit p-1 m-[0.3em] w-fit rounded-full  border-[0.12em] border-black inline-block">Peralatan rumah Tangga</div>
    <div className="h-fit p-1 m-[0.3em] w-fit rounded-full  border-[0.12em] border-black inline-block">Jamu Bubuk</div>
    <div className="h-fit p-1 m-[0.3em] w-fit rounded-full  border-[0.12em] border-black inline-block">Hampers</div>
   

  </div>
</div> */}

{/* <div className="w-[70%] xl:w-[60%] h-fit py-2 flex justify-center mx-auto my-[0.6em] xl:my-[1.2em]  ">
  <button className=" h-[1.4em] my-auto mr-2  " > <Image   className="h-full w-full m-auto" alt='image product' width={200} height={200} src={'/Search/search.png'}/></button>
  <input className="w-full h-fit border-[0.2em] border-black rounded-full" id="search" type="text" placeholder="Search"/>
  
</div> */}
                 
      <div className="w-full h-fit grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 pr-2">
       

{data.map((dat,i=1)=>(
   
   <div onClick={() => router.push(`/home/${dat.productname}`)} id={`allProd-${i++}`} className={`h-fit flex items-center justify-center flex-col   ml-2 inline shrink-0  transition-all   hover:cursor-pointer   `}>
   <div    className={`  h-fit w-fit rounded-2xl border border-white overflow-hidden border-lg border-black shadow-md shadow-black bg-black relative flex flex-col mx-auto`}>
  
     <Image   className="h-[14em] sm:h-[16em]  " alt='image product' width={200} height={200} src={dat.url}/>
     
   </div>
   <div className={` text-black z-20  flex flex-col  mx-auto  text-left w-fit h-[100%]     ease-in-out transition-all rounded-lg text-[0.2em] my-3 px-2 `}>
     <h3 className={'text-[5em] font-semibold '}>{dat.name}</h3>
     <p className='text-[5em]'>{dat.price}</p>
     <div className="overflow-hidden h-[12em] w-[60em] text-elipsis  px-auto">
     <p className="  text-[4em]  text-elipsis text-gray-700">{dat.detail}</p>
     </div>
     
     </div> 
   </div>
            
        ))}
     
     </div>
    

    



        </section>
        </>
    )
}