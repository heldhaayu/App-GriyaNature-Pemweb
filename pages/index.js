import { ReactNode, useEffect, useRef, useState} from 'react'
import Head from 'next/head'
import Jumbo from '../components/jumbotron/jumbotron.tsx';
import Benefits from '../components/benefits/benefits.tsx';
import Products from '../components/products/products.tsx'; 
import Testi from '../components/testi/testi.tsx';
import About from '../components/about/about.tsx';
import Start  from '../components/start/start.tsx';
import Layout from '../components/layout';



export default function Home(props) {

  const {data} = props
 
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
    console.log(scrollPosition)
  }

  useEffect(() =>{
    
    window.addEventListener('scroll', handleScroll)
  },[scrollPosition])
 
  return (
    
    <>
    <Head>
      <title>Griya Nature</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta http-equiv="Content-Language" content="en"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
{/*      
     <div className="scroll  scroll-smooth  " ref={scrollY2} onScroll={handleScroll} style={{scrollBehavior:'smooth'}}>
    
    
     <Header scrollPosition={scrollPosition}  class="scroll scroll-smooth " ref={scrollY2} onScroll={handleScroll} style={{scrollBehavior:'smooth'}}/>
    
      
      <Jumbotron/>
      <Benefits scrollPosition={scrollPosition}></Benefits>                                      
      <ProductsComponent scrollPosition={scrollPosition}/>
     <Testi scrollPosition={scrollPosition}/> 
     <div  className='xl:absolute xl:h-fit md:h-fit  sm:h-[1300px] xl:top-[4300px] border border-white '>
     <About className={``}/>      
      <Faq scrollPosition={scrollPosition}/>       
     </div>           
<Start scrollPosition={scrollPosition}/>          
<Contact/>


                                                                                                                   
      </div>   */}

      <Layout page={'landing'}>


       
        <Jumbo />
        <Benefits scrollPosition={scrollPosition}/>
        <Products scrollPosition={scrollPosition} data={data}/>
        <Testi scrollPosition={scrollPosition}/>
        <About scrollPosition={scrollPosition}/>
        <Start scrollPosition={scrollPosition}/>
       

      </Layout>


     
     
                                                             
    </>
   
  )

  
}

export async function getServerSideProps(ctx) {

  const res = await fetch("http:localhost:3000/api/prodImgUp")
 
    const data=  await res.json()
   
    return {
      props: {
        data:data
        
      }
    }
  }





 