import Image from "next/image"
import { useState } from "react"
interface cartProps{
    cState: Array<any>
}
export default function Cartpage(props:cartProps){
    
    const [total, setTotal] = useState()

    const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');

  const{cState} = props
    console.log('anjay')
    console.log(cState)

  const totalPrice = cState.reduce((acc, product) => {
    return acc + product.hargajual * product.qu;
  }, 0);


  const handleSubmit = async (e) => {
    e.preventDefault();

    

      setTotal(totalPrice)
    const formData = {
      username,
      address,
      product_id:cState[0].id,
      price:cState[0].hargajual,
      quantity:cState[0].qu,
      total:totalPrice
      
    };


    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        alert('Order created successfully');
      } else {
        // Handle error response
        console.error('Failed to create order');
      }
    } catch (error) {
      // Handle network error
      console.error('Error:', error.message);
    }
  };

    

    
    return (
        <>
        <section className='w-full min-h-[100vh] bg-white flex flex-col justify-center items-center  pt-0'>
<h1 className="text-center text-[2em]">Rincian Pesanan</h1>

            
            <table className="w-full">  

            <tr className="border border-black bg-blue-400">
            <th>Nama</th>
            <th>Harga</th>                    
            <th>Qty</th>
            
        </tr>

                {cState.map((dat, i=1)=>(
                <tr key={i}>
                     <td className="border border-black text-center h-fit flex flex-col justify-center"><Image className="mx-auto rounded-lg my-2 border-black shadow-sm shadow-black" alt={`product`} width={100} height={100} src={dat.url}/>{dat.productname}</td>
                     <td className="border border-black text-center">Rp. {dat.hargajual}</td>
                <td className="border border-black text-center">{dat.qu}</td> 
           
            

        </tr>




                ))}
               

</table> 
<h2>total: {totalPrice}</h2>

<form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      

      
      <button type="submit">Submit</button>
    </form>
            </section>

           
    
        </>
    )
}