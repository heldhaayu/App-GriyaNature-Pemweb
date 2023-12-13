import Layout from "../../components/layout";
import Image from "next/image";

interface userProps {
    users: Array<any>
}
export default function index(props:userProps){
    const {users} = props

    console.log(props)

    return(
        <>
        <Layout>
        <section className="w-full min-h-[100vh] bg-white flex justify-center items-center">
   <div className="h-[50em] w-[100%] m-[2em] mt-[10em] border border-black bg-gray-200 rounded-md grid grid-cols-2">
        <div className=" grid grid-rows-2 ">
            <div className=" flex justify-center items-center"> 
            <Image src={'/uploaduser/usr.png'} width={200} height={200} alt='anjing'/>
            </div>
            <div className="text-center">
                <h1 className="text-[3em] ">{users[0].name}</h1>
                <p>{users[0].address}</p>
                <p>email      : {users[0].email}</p>
                <p>nomor telp : {users[0].nomortelpon}</p>
                <p>Registered : {users[0].created_at}</p>
                

            </div>
        
        </div>
        <div className="bg-slate-600 grid grid-rows-3 ">

            <div className="flex justify-center items-center">
            <div className="bg-white w-[80%] h-[80%] rounded-md">

            My Order
            </div>
                
                
            </div>
            <div className="flex justify-center items-center">

            <div className="bg-white  w-[80%] h-[80%] rounded-md">
                Favorite
            </div>
            </div>

            <div className=" flex justify-center items-center">
            <div className="bg-white  w-[80%] h-[80%] rounded-md">
                edit
            </div>
            </div>

        
        </div>
    

   </div>
        </section>
    </Layout>
        
        </>


    )
    
}

export async function getServerSideProps(context) {
    
    
    const res = await fetch(`http://localhost:3000/api/users`,{
        method:'GET'
    })
   
    const users =  await res.json()
    console.log('wuhan')
    console.log(users.users)
  
    return {
        props: {
           users :users.users
        }
    }
}