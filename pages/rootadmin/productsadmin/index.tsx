import React from "react";
import ProductsAdmin from "../../../components/productsadmin/productsadmin";
import AdminLayout from "../../../components/adminLayout";

interface productsAdminProps{
    products:Array<any>
}

export default function index(props:productsAdminProps){
const{products} = props
console.log(products)
    return(
        <>
        <AdminLayout>
            <ProductsAdmin products={products}/>
        </AdminLayout>

        </>
    )
}

export async function getServerSideProps(ctx) {

    const res = await fetch("http:localhost:3000/api/prodImgUp")
   
      const product=  await res.json()
     
      return {
        props: {
             products : product.products.filter((prod)=> prod.isdelete === false)
          
        }
      }
    }