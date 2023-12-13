import pool from '../../../database/postgress'

export default async function handler(req,res){

    if( req.method === 'GET'){
        try {
            const client = await pool.connect();
            const query = 'SELECT * FROM users';
            const result = await client.query(query);
            client.release();
        
            const users = result.rows;
        
            res.status(200).json({ success: true, users });
          } catch (error) {
            console.error('Error retrieving products from database:', error);
            res.status(500).json({ success: false, error: 'Error retrieving products from database' });
          }
    }
}