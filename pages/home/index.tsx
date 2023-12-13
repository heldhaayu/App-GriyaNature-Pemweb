import React,{useState} from "react";
import Layout from "../../components/layout";
import Hotsales from "../../components/hotsales/hotsales";
import OurProducts from "../../components/allprod/allprod";
import Cart from "../../components/cart/cart";


interface homeProps{
    data:Array<any>
}



export default function Home(props:homeProps){
 
    const{data} = props

    

    return(
        <>
        <Layout page='home'>
           <Hotsales data={data}/>
           <OurProducts data={data}/>
          

        </Layout>

        </>
    )


}

export async function getServerSideProps(ctx) {

    const res = await fetch("http:localhost:3000/api/prodImgUp")
   
      const product=  await res.json()
     
      return {
        props: {
          data : product.products.filter((prod)=> prod.isdelete === false)
          
        }
      }
    }
  