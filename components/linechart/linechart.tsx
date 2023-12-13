import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const orders = [
      {
        orderid: 2,
        username: 'hafiz',
        address: 'sepanjang',
        product_id: 1,
        price: '30000',
        quantity: '0',
        total: '0',
        order_date: '2023-06-18T21:42:12.392Z',
        productname: 'jahe instant'
      },
      {
        orderid: 3,
        username: 'hafiz',
        address: 'sepanjang',
        product_id: 1,
        price: '30000',
        quantity: '0',
        total: '0',
        order_date: '2023-06-18T21:43:38.059Z',
        productname: 'jahe instant'
      },
      {
        orderid: 4,
        username: 'aski',
        address: 'wonokromo',
        product_id: 2,
        price: '30000',
        quantity: '2',
        total: '60000',
        order_date: '2023-06-18T21:45:33.609Z',
        productname: 'temulawak'
      },
      {
        orderid: 5,
        username: 'fiki',
        address: 'jetis',
        product_id: 2,
        price: '30000',
        quantity: '2',
        total: '60000',
        order_date: '2023-06-18T21:47:36.697Z',
        productname: 'temulawak'
      }
    ];

    const products = [...new Set(orders.map(order => order.productname))];

    const datasets = products.map(product => {
      const productOrders = orders.filter(order => order.productname === product);
      const data = productOrders.map(order => ({
        x: new Date(order.order_date),
        y: parseInt(order.total)
      }));

      return {
        label: product,
        data: data,
        borderColor: getRandomColor(),
        fill: false
      };
    });

    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;

// Function untuk mendapatkan warna acak
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
