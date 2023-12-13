import React  from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


interface data{
    products:Array<any>
}

export default function ProductsAdmin(props:data){

    const{products} =props

    

    const [dataChange, setDataChange] = useState(products);

    
    

    




    
    useEffect(() => {
        setDataChange(products);
      }, [products]);

    const router = useRouter()


    const handleDelete =  async (e,id)=>{
        e.preventDefault()
        const response = await fetch(`/api/delpro/${id}`, {
            method: "PUT"
          });
    
          if (response.ok) {
            console.log("Berhasil Delete Product");
            const updatedData = dataChange.map((data) =>
        data.id === id ? { ...data, isdelete: true } : data
        );
    
      setDataChange(updatedData);
           
          } else {
            console.error("Delete Product Gagal");
          }

        
        
    }



    return(
        <>
        <section className="w-full h-full bg-white  md:mt-[7em] mb-[10em] ">
        <h1 className="text-center mt-7 md:text-[2em]">Products</h1>
        <button onClick={()=>{router.push('./ProductEditorPage')}} className=" w-[80%] h-[3em] bg-yellow-600 mx-auto mt-5 block rounded-lg"> + Tambah product</button>

        <div className="w-[90%] h-fit border m-auto rounded-lg my-7 ">
            <table className="h-full w-full mb-10 ">
            <tr className="border border-black bg-blue-400">
            <th>Id</th>
            <th>Nama</th>
            <th>Harga</th>
            
            
            <th>Stok</th>
            <th>action</th>
        </tr>
        {dataChange.map((dat,i=1)=>(
            !dat.isdelete ? (
          

             <tr key={i}>
                <td className="border border-black text-center">{dat.id}</td> 
            <td className="border border-black text-center h-fit flex flex-col justify-center"><Image className="mx-auto rounded-lg my-2 border-black shadow-sm shadow-black" alt={`product`} width={100} height={100} src={dat.url}/>{dat.productname}</td>
            
            <td className="border border-black text-center">Rp. {dat.hargajual}</td>

            <td className="border border-black text-center">{dat.stok}</td>
            
            <td className="border border-black text-center "><button onClick={(e)=>handleDelete(e ,dat.id)}  className="bg-red-600 border border-black rounded-lg  p-[2px] w-[50%] text-white"> hapus</button> <button onClick={()=>{router.push(`./ProductEditorPage/${dat.id}`)}} className="bg-green-400 border border-black rounded-lg mx-1 p-[3px] w-[50%] my-2 "> edit</button> </td>
        </tr>
        ) : null))}
        </table>
        </div>
        </section>

        </>
    )
}