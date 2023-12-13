import React, {useState} from "react";
import AdminLayout from "../../../components/adminLayout";
import EditorProduct from "../../../components/editorProduct/editorproduct";


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
interface ProductDetailProps{
    product: Product
    addToCartProps: ()=> void

}


export default function productDetails(props:ProductDetailProps){

const {product} =props

console.log('aku')
console.log(props)


    const [cart,setCart] = useState(0)

  
    const handleAddToCart = () => {
        setCart(cart + 1);
        addToCartProps(); // Call the addToCartProps function
      };

    

  

    return(
        <>
          <AdminLayout>
          <EditorProduct {...props}/>

          </AdminLayout>
          
           
           

        

        </>
    )


}

export async function getServerSidePaths() {
    const res = await fetch(`http://localhost:3000/api/prodImgUp`)
    const dataProducts =  await res.json()
    const paths = dataProducts.map((product: Product) => {
        return {
            params: {
                id: `${product.id}`,
               }
        }
     
    });
    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps{
    params:{
        id:string
    }
}

export async function getServerSideProps(context: GetStaticProps) {
    const { id } = context.params
    console.log(id)
    const res = await fetch(`http://localhost:3000/api/prodImgUp`,{
        method:'GET'
    })
   
    const product =  await res.json()
    console.log('wuhan')
  
    return {
        props: {
            product : product.products.filter((product)=> product.id === Number(id))
        }
    }
}