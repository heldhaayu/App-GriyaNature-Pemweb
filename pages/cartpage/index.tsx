import {useRecoilState} from 'recoil'
import {cartState} from '../../atoms/cartstate'
import Cartpage from '../../components/cartpage/cartpage'
import Layout from '../../components/layout'


export default function index(){

    const [cartItem, setCartItem] = useRecoilState(cartState)

    console.log(cartItem)

    return (
        <>
      


<Layout>

    <Cartpage cState={cartItem}/>

</Layout>


            
       
            
        
        </>
    )
}