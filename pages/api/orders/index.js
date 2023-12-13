import pool from '../../../database/postgress'



export default async function handler(req, res){
    console.log(req.body.username) 

    const client = await pool.connect();
    
    if(req.method === 'POST'){

      console.log(req.body)

    const {username,
      address,
      product_id,
      price,
      quantity,
      total} =req.body;

    

  
    

    const query ={
        text: `
        INSERT INTO orders (username, address, product_id, price, quantity, total)
VALUES ($1, $2,$3, $4, $5, $6);
      `,
      values:[username,
        address,
        product_id,
        price,
        quantity,
        total]
    }

    const orders = await client.query(query)

    

    res.status(200)
    res.json({
        orders
    })

    }else if(req.method=== 'GET'){

      try {
        const client = await pool.connect();
        const query = `SELECT o.* , p.productname
        FROM orders o
        JOIN products p ON o.product_id = p.id;`;
        const result = await client.query(query); 
        client.release();
    
        const orders = result.rows;
    
        res.status(200).json({  orders });
      } catch (error) {
        console.error('Error retrieving products from database:', error);
        res.status(500).json({ success: false, error: 'Error retrieving products from database' });
      }

    }else return res.status(405).end();
    
}