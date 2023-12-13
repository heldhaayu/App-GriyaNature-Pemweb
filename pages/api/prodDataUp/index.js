import pool from '../../../database/postgress'
import multer from 'multer'

import path from 'path';

const storage = multer.diskStorage({
    destination: './public/products/',
    filename: (req, file, callback) => {
      const extension = path.extname(file.originalname);
      const filename = Date.now() + extension;
      callback(null, filename);

    },
  });

  const upload = multer({ storage });


export const config = {
    api: {
      bodyParser: false
    }
  }

export default async function  handler (req, res){
    console.log('jancok')
    console.log(req)

   
if(req.method === 'POST'){

    upload.single('image')(req,res, (err)=>{
        if(err){
            console.log('pukimay')
            console.log(err)
            return res.status(500).end('Error uploading image')
        }else {
            if (!req.file) {
                // No file was uploaded
                res.status(400).json({ error: 'No file uploaded' });
              } else {
                const { filename } = req.file;
                res.status(200).json({ filename });
              }
          }
    })
const {productname,harga,category,panjang,lebar,tinggi,berat,bahan,stok,deskripsi,shopeelink,lazadalink,tiktokshoplink,tokpedlink} = req.body
   
const imageURL = `/products/${filename}`

    try {

        // const client = await pool.connect()

        // const query = {
        //     text:`
        //     INSERT INTO products (productname, harga, category, panjang, lebar, tinggi,berat, bahan, stok, deskripsi,
        //         shoppelink, lazadalink, tiktokshoplink, tokpedlink, url)
        //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        //   `,
        //    values : [productname, harga, category, panjang, lebar, tinggi,berat, bahan, stok, deskripsi,shopeelink,lazadalink,tiktokshoplink, tokpedlink, imageURL],
        
        //     }
    
        //     await client.query(query)
        //     client.release();

        //     res.status(200).json({success: true})
        
    } catch (error) {

        console.error('error insert data :', error)
        res.status(500).json({success: false, error: 'Error insert data to database'})
        
    }
   
    // async function postProduct() {

    //     async addToken(token) {
    //         const query = {
    //           text: 'INSERT INTO authentications VALUES ($1)',
    //           values: [token],
    //         };
        
    //         await this._pool.query(query);
    //       }

    //     const client = await pool.connect();
      
    //     try {
    //       const result = await client.query('SELECT * FROM your_table');
    //       // Process the query result
    //       console.log(result.rows);
    //     } catch (error) {
    //       console.error('Error executing query', error);
    //     } finally {
    //       client.release();
    //     }
    //   }



}else if( req.method === 'GET'){
    try {
        const client = await pool.connect();
        const query = 'SELECT * FROM products';
        const result = await client.query(query);
        client.release();
    
        const products = result.rows;
    
        res.status(200).json({ success: true, products });
      } catch (error) {
        console.error('Error retrieving products from database:', error);
        res.status(500).json({ success: false, error: 'Error retrieving products from database' });
      }
}

}