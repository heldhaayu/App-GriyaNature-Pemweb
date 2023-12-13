import React, {useState, useEffect} from "react";
import Image from 'next/image'


export default function Modal ({open,onClose})  {
  const [isOpen, setIsOpen] = useState(open);
   
  useEffect(() => {
     setIsOpen(open);
  }, [open]);

    if(!isOpen) return null;
    return(
        <>
     <div className=" modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-[100]">
        <div className=" bg-white w-100 sm:w-[35rem] hp:w-80  rounded-lg p-8  ">
        <h2 className="text-2xl font-bold mb-4">Subscribe!</h2>
        <div className="flex  sm:flex-row hp:flex-col ">
            <div className="flex bg-black basis-[50%]  text-center rounded-[7px] text-white items-center justify-center"> 
            <ul>
                <li>Informasi update toko</li>
                <li>Diskon</li>
                <li>Biaya Admin kecil</li>
            </ul>
            </div>
        <form className="basis-[50%] ">
          <div className="m-[10px]">
            <label htmlFor="name">Name :</label>
            <input className="border border-black rounded-[5px] hp:w-full" type="text" id="email" name="name"/>
            </div>
            <div className="m-[10px]">
            <label htmlFor="email">Email :</label>
            <input className="border border-black rounded-[5px] hp:w-full" type="email" id="email" name="email"/>
            </div>
            <div className="m-[10px]">
            <label htmlFor="number">Nomer Telpon :</label>
            <input className="border border-black rounded-[5px] hp:w-full" type="text" id="number" name="number" required
            minlength="10"
            maxlength="20"/>
            </div>
            <div>            
            </div>                                   
            
          </form>
            
        </div>
        
          <div className="flex m-[10px] mx-[0px]">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded basis-[25%]"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-[5px] basis-[75%]"
            onClick={onClose}
          >
            Subscribe!
          </button>

          </div>
          
        </div>
        <style jsx>{`
        .modal {
          animation-name: fadeIn;
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        `}</style>
     </div>
    </>
   

    )
    
    

}