import pool from '../../../database/postgress'
import multer from 'multer'
import bodyParser from 'body-parser';


const jsonParser = bodyParser.json();

import path from 'path';
let file 

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
    
if(req.method === 'POST'){

  upload.single('image')(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).end('Error uploading image');
    }

    jsonParser(req, res, async () => {
      const {
        productname,
        hargaBeli,
        hargaJual,
        category,
        panjang,
        lebar,
        tinggi,
        berat,
        bahan,
        stok,
        deskripsi,
        shoppelink,
        lazadalink,
        tiktokshoplink,
        tokpedlink,
      } = req.body;
     
      console.log(file)
      const imageURL = `/products/${req.file.filename}`;

      try {
        const client = await pool.connect();

        const query = {
          text: `
            INSERT INTO products (productname, hargabeli, hargajual, category, panjang, lebar, tinggi, berat, bahan, stok, deskripsi,
              shoppelink, lazadalink, tiktokshoplink, tokpedlink, url)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,$16)
          `,
          values: [
            productname,
            hargaBeli,
            hargaJual,
            category,
            panjang,
            lebar,
            tinggi,
            berat,
            bahan,
            stok,
            deskripsi,
            shoppelink,
            lazadalink,
            tiktokshoplink,
            tokpedlink,
            imageURL,
          ],
        };

        await client.query(query);
        client.release();

        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error inserting data:', error);
        res
          .status(500)
          .json({ success: false, error: 'Error inserting data into the database' });
      }
    });
  });


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
else{
  return res.status(400).end('end');
}


}