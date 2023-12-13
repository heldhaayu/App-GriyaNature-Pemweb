import React, { useEffect, useRef } from 'react';
import AdminLayout from "../../components/adminLayout";
import { authPage } from '../../middlewares/pageAuth'

import Chart from 'chart.js';

interface productsAdminProps{
    orders:Array<any>
}

export default function index(props:productsAdminProps){
    const {orders} = props

    console.log(orders)

    const sumTotal = orders.orders.reduce((total, order) => {
        return total + parseInt(order.total);
      }, 0);

     
const productSales = orders.orders.reduce((result, order) => {
    const { productname, total } = order;
    if (result[productname]) {
      result[productname] += parseInt(total);
    } else {
      result[productname] = parseInt(total);
    }
    return result;
  }, {});
  
  
  const sortedProducts = Object.keys(productSales).sort(
    (a, b) => productSales[b] - productSales[a]
  );
  
  
  const topProduct = sortedProducts[0];

  

  useEffect(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const chartData = getChartData(orders);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Total Orders',
          data: chartData.data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }, [orders]);

  // Function to extract chart data from orders
  const getChartData = (orders: Array<any>) => {
    const labels = orders.orders.map(order => order.order_date);
    const data = orders.orders.map(order => parseInt(order.total));
    return { labels, data };
  };

  
    return(
        <>
        <AdminLayout page={'admin'}>
        <section className="w-full h-full  bg-slate-700 pt-5 md:h-[90vh]  overflow-y-scroll md:mt-20">
            <div className="w-full h-fit flex hp:flex-col md:flex-row   justify-around items-center p-5 ">
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white">
                    <p className="text-center text-[2.2em]">Penjualan : <br></br>{orders.orders.length}</p>
                </div>
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white"> 
                <p className="text-center text-[2.2em]">Pendapatan : <br></br>{sumTotal}</p></div>
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white"><p className="text-center text-[2.2em]">Produk Terlaris : <br></br>{topProduct} </p></div>

            </div>

            <div className="h-[20em] md:h-[23em] w-full ">
                <h2 className="text-white text-center m-5"> Laporan </h2>

                <div className="h-fit w-[80%] bg-white m-auto rounded-lg ">

                <canvas className='pb-[10em' id="myChart"></canvas>

                </div>

            </div>

        </section>

        
        </AdminLayout>

        </>
    )
}

export async function getServerSideProps(ctx) {
    const {token} = await authPage(ctx)

    const res = await fetch("http:localhost:3000/api/orders")
    
   
      const orders=  await res.json()
     
      return {
        props: {
        orders,
        token
          
        }
      }
    }