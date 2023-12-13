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

    if(req.method ==='GET'){
        try {
            const client = await pool.connect();
            const query = {
                text:'SELECT * FROM products where id = $1',
                values:[id]

            }
            const result = await client.query(query);
            client.release();
        
            const products = result.rows;
        
            res.status(200).json({ success: true, products });
          } catch (error) {
            console.error('Error retrieving products from database:', error);
            res.status(500).json({ success: false, error: 'Error retrieving products from database' });
          }

    }else if(req.method === 'PUT') {
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

            console.log(req.body)
      
            const imageURL = req.file ? `/products/${req.file.filename}` : '';
      
            try {
              const client = await pool.connect();
      
              const query = {
                text: `
                  UPDATE products
                  SET
                    productname = $1,
                    hargabeli = $2,
                    hargajual = $3,
                    category = $4,
                    panjang = $5,
                    lebar = $6,
                    tinggi = $7,
                    berat = $8,
                    bahan = $9,
                    stok = $10,
                    deskripsi = $11,
                    shoppelink = $12,
                    lazadalink = $13,
                    tiktokshoplink = $14,
                    tokpedlink = $15,
                    url = $16
                  WHERE
                    id = $17
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
                  req.query.id, // assuming you have an "id" parameter in the request URL
                ],
              };
      
              await client.query(query);
              client.release();
      
              res.status(200).json({ success: true });
            } catch (error) {
              console.error('Error updating data:', error);
              res.status(500).json({ success: false, error: 'Error updating data in the database' });
            }
          });
        });
}

}