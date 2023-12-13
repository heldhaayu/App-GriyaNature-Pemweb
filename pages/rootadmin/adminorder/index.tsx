import React from "react";
import Image from "next/image";
import ProductsAdmin from "../../../components/productsadmin/productsadmin";
import AdminLayout from "../../../components/adminLayout";

interface productsAdminProps{
    orders:Array<any>
}

export default function index(props:productsAdminProps){
const{orders} = props.orders
console.log(orders)

    return(
        <>
        <AdminLayout>
        <section className="w-full h-full bg-white  md:mt-[7em] mb-[10em] ">
        <h1 className="text-center mt-7 md:text-[2em]">Orders</h1>
        
        <div className="w-[90%] h-fit border m-auto rounded-lg my-7 ">
            <table className="h-full w-full mb-10 ">
            <tr className="border border-black bg-blue-400">
            <th>Nama</th>
            <th>Address</th>
            <th>Produk</th>
            <th>Tanggal Order</th>
            
            <th>quantity</th>
            
            
            <th>total</th>
           
        </tr>
        {orders.map((dat,i=1)=>(
            
          

             <tr key={i}>
                <td className="border border-black text-center">{dat.username}</td> 
                <td className="border border-black text-center h-fit  justify-center">{dat.address}</td>
                <td className="border border-black text-center h-fit  justify-center">{dat.productname}</td>
                <td className="border border-black text-center h-fit  justify-center">{dat.order_date}</td>
            
            <td className="border border-black text-center">{dat.quantity}</td>

            <td className="border border-black text-center">{dat.total}</td>
            
            
        </tr>
        ))}
        </table>
        </div>
        </section>
        </AdminLayout>

        </>
    )
}

export async function getServerSideProps(ctx) {

    const res = await fetch("http:localhost:3000/api/orders")
   
      const orders=  await res.json()
     
      return {
        props: {
        orders:orders
          
        }
      }
    }