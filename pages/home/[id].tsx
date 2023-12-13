import React, {useState} from "react";
import Layout from "../../components/layout";
import ProductDetails from "../../components/detail/detail";
import Cart from "../../components/cart/cart";

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
    console.log('bagaimana?')

    console.log(props)

    const {addToCartProps} =props
    const [cart,setCart] = useState(0)

  
    const handleAddToCart = () => {
        setCart(cart + 1);
        addToCartProps(); // Call the addToCartProps function
      };

    

  

    return(
        <>
           <Layout page='details'>
           <ProductDetails DetailProps={props}/>
    
           </Layout>
           

        

        </>
    )


}

export async function getServerSidePaths() {
    const res = await fetch(`http://localhost:3000/api/prodImgUp`)
    const dataProducts =  await res.json()
    console.log('ini')
    console.log(dataProducts)
    const paths = dataProducts.products.map((product: Product) => {
        return {
            params: {
                id: `${product.productname}`,
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
        id:String
    }
}

export async function getServerSideProps(context: GetStaticProps) {
    const { id } = context.params
    console.log('iya')
    console.log(id)
    const res = await fetch(`http://localhost:3000/api/prodImgUp`)
    const product =  await res.json()

    console.log('apa')
    console.log(product.products.filter((prod)=> prod.productname === id))
         
    return {
        props: {
            product : product.products.filter((prod)=> prod.productname === id)
        }
    }
}