import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {useRecoilState} from 'recoil'
import {cartState} from '../../atoms/cartstate'

interface Product{
    id:Number,
    productname:String,
    hargabeli:Number,
    hargajual:Number,
    category:String,
    panjang:String,
    lebar:String,
    tinggi:Number,
    berat:Number,
    bahan:String,
    stok: Number,
    deskripsi: String,
    shoppelink: String,
    lazadalink:String,
    tiktokshoplink:string,
    tokpedlink:String,
    isdelete:Boolean,
    url:String,
    date:Date
}
interface DetailProps{
    product: Product
}

export default function productDetails(props:DetailProps){
    const {product} = props.DetailProps
    const [qty, setQty] = useState(0)
    const [read,setRead] = useState(false)
    const [show, setShow] = useState(false)
    const [likes, setLikes] = useState(false)
    const [reply, setReply] = useState(false)

    const newProduct = {...product[0],qu:qty}
 console.log(product)
 console.log('product')

const [cartItem, setCartItem] = useRecoilState(cartState)




const addItemToCart = (id)=>{
    if(cartItem.findIndex(pro => pro.id === id) === -1){
        setCartItem(prevState => [...prevState,newProduct])
        console.log('okef')
        console.log(cartItem)
    }else{
        setCartItem(prevState =>{
            return prevState.map((item)=>{
                return item.id === id ? {
                    ...item, quantity: qty
                } : item
            })
        })
    }
   
}

    return(
        <>
       <section className="w-full h-fit flex flex-col bg-white  md:grid md:grid-cols-2 md:gap-2 md:pt-[6em]">
       <div className="h-[37em] w-[100%] bg-white w-full p-[0em] text-justify mt-2 md:m-auto md:h-fit  md:mt-2">
       <Image className=" w-full hp:w-[26em] hp:mx-auto h-full  sm:mx-auto sm:shadow-lg sm:shadow-black " alt='product image detail' width={200} height={200} src={product[0].url} />
       <div className="w-full h-fit  justify-around bg-gray-200 rounded-lg md:flex  hidden md:mx-auto md:w-[90%] md:relative md:bottom-10 md:shadow md:shadow-black md:bg-white">
           <Image className="rounded-lg m-2 border border-black  " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black " alt='product image detail' width={50} height={50} src={product[0].url} />
           </div>
       </div>


<div className="w-full h-fit flex flex-col  justify-center items-center relative bottom-[4em] md:static ">
<div className="h-fit bg-white w-full p-[2em]  mt-0 mb-2 text-justify rounded-xl sm:border-t-2">
           
           {/* <Image className="rounded-lg mx-auto " alt='product image detail' width={200} height={200} src={product.url} /> */}
            <p className="md:hidden">Variation</p>
           <div className="w-full h-fit flex justify-around bg-gray-200 rounded-lg md:hidden ">
           <Image className="rounded-lg m-2 border border-black  " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black  " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black  " alt='product image detail' width={50} height={50} src={product[0].url} />
           <Image className="rounded-lg m-2 border border-black  " alt='product image detail' width={50} height={50} src={product[0].url} />
           </div>
           <div className="grid grid-cols-2 h-fit">
            <div className="h-fit col-span-1">
            <h1 className="text-[1.5em] mt-2">{product[0].productname}</h1>
           <h2 className="text-[1.2em]">{product[0].hargajual}</h2>

            </div>

            {/* <div className="h-full flex justify-center items-center">
             <Image onClick={()=> setLikes(!likes)} className="rounded-lg  ml-auto " alt='like' width={40} height={40} src={!likes ?'/likes/1.png' : '/likes/2.png'} />
            </div> */}
           
           </div>
           <div className="h-fit w-full bg-slate-100 rounded-lg p-2">
            <h2>Spec</h2>
            <p>Ukuran :{product[0].panjang} x {product[0].lebar} x {product[0].tinggi} </p>
            <p>Berat  : {product[0].berat}gr</p>
            <p>Bahan  : {product[0].bahan}</p>
           </div>
           <div className={` ${!read? 'h-[4.5em]' : ''} w-fit overflow-hidden my-2`}>
            <h2>Deskripsi :</h2>
           <p>{product[0].deskripsi}</p>
           </div>
           <a onClick={()=>setRead(!read)} className="text-yellow-500">{ !read?'Baca Selanjutnya...' : 'Tampilkan Lebih Sedikit'}</a>
           
           {/* <button className="w-[19em] h-fit bg-gray-300 flex mx-auto sm:mx-0  sm:w-[50%] my-5 rounded-full md:w-[18em] md:mr-auto">
            <Image className="h-[4em] w-[4em] m-auto" width={200} height={200} alt='ongkir' src={'/ongkir/1.png'} />
          
            <h3 className=" m-auto text-[2em] md:text-[1.8em]">Cek Ongkir</h3>
           
            

            </button> */}

            <div className="w-full h-fit">
            <button onClick={()=>setShow(!show)} className="w-full h-fit bg-gray-100 p-2 text-center rounded-lg">
                    <h2>Beli</h2>
            </button>
            
            </div>
            <div className="w-full h-7">

            </div>

            
            <div className={`w-full ${!show ? 'h-0' : 'h-fit py-[2em]'} overflow-hidden  hp:grid hp:grid-cols-4 xl:grid-cols-4 xl:grid-row-2 hp:gap-1 sm:gap-2 xl:gap-0 w-fit h-fit mt-4 mx-auto `}>
                <div  className={` flex justify-center items-center `} >
                <Link href='https://shopee.co.id/griya.nature'>
                <Image className="hp:w-[3em] sm:w-[8em] xl:w-[8.9em] xl:h-[8.9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/shopee.png'}/>
                </Link>
                </div>
                <div  className={` flex justify-center items-center  `}>
                <Link href='https://www.lazada.co.id/shop/griya-nature/?spm=a2o4j.pdp_revamp.seller.1.141633abyrX2iW&itemId=6619230229&channelSource=pdp'>
                <Image className="hp:w-[4em] hp:h-[4em] md:h-[6em] xl:h-[9em] sm:w-[9em] sm:h-[9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/lazada.png'}/>
                </Link>
                </div>
                <div  className={` flex justify-center items-center`}>
                <Link href='https://www.tokopedia.com/griya-nature?source=universe&st=product'>
                <Image className="hp:w-[3em] sm:w-[8em]  xl:h-[9em] xl:w-[9em] transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/tokped.png'}/>
                </Link>
                </div>
                <div  className={`flex items-center justify-center`}>
                <Link href='https://vm.tiktok.com/ZS84dbpv7/'>
                <Image className="hp:w-[5em] hp:h-[5em] md:h-[7em] sm:w-[9.6em] sm:h-[9.6em] xl:h-[11em]  transition-all hover:scale-[1.1] " alt='teko' width={200} height={200} src={'/start/tiktok.png'}/>
                </Link>
                </div>  
                           
    
            </div>

           

           

            <div className="grid grid-cols-2 gap-2 w-full h-fit px-1 sm:mt-10">
            <div className=" bg-slate-100  rounded-lg grid grid-cols-3 ">
                <button onClick={()=>{qty !== 0 ?setQty(qty-1) : setQty(0)}} className="bg-gray-400 rounded-lg">-</button>
                <div className="text-[1.6em] m-auto">{qty}</div>
                <button onClick={()=>setQty(qty+1)} className="bg-black text-white rounded-lg">+</button>

               

            </div>
             <div className="bg-white  rounded-lg">
                <button onClick={()=>addItemToCart(product[0].id)} className="h-full w-full rounded-lg p-2 bg-yellow-500"> Add to chart</button>
               
                
            </div>
        </div>
        
          

       </div>

       

</div>
       
       {/* <section className=" h-fit w-full bg-white pb-10 md:col-span-2 md:w-[70%] ">


        <form className="h-fit w-full bg-white p-2   mx-auto">
            <h2 className="text-[1.5em]">Comment</h2>
            <textarea className=" border-b-2 border-black w-full" name="komen" id="komen"  placeholder="tambahkan komentar..." />
            <button className="m-2">Kirim</button>

            
        </form>

        <div className="flex flex-col h-fit w-fit ">
            <div className="h-fit w-fit flex  mx-auto   ">
 
                <div className="flex items-center justify-center w-[25%]">
                     <div className=" rounded-full h-[3em] w-[3em] overflow-hidden flex items-center border border-black grow-1">
                    <Image className="  w-full h-full " alt='product image detail' width={50} height={50} src={product[0].url} />
                    </div>

                </div>
            
                    <div className="w-[75%]">
                        <h3>John Doe</h3>
                        <p>
                            very good, very good, fast response, fast delivery, fast forward.
                        </p>
                        <a className="text-gray-500" onClick={()=> setReply(!reply)}>Show reply</a>
                    </div>
            </div>
                    
                        <div className={`m-2 ml-9 flex ${!reply ? 'h-0' : 'h-fit'}  overflow-hidden `}>

                        <div className="flex items-center justify-center w-[25%]">
                            <div className=" rounded-full h-[3em] w-[3em] overflow-hidden flex items-center border border-black grow-1">
                            <Image className="  w-full h-full " alt='product image detail' width={50} height={50} src={product[0].url} />
                            </div>

                        </div>

                            <div className="w-[75%]">
                                <h3>Guevara</h3>
                                <p className="text-[0.8em]">
                                    very good, very good, fast response, fast delivery, fast forward.
                                </p>
                            </div>
                        </div>

                    
           


        </div>

        </section> */}
       </section>

        </>
    )


}