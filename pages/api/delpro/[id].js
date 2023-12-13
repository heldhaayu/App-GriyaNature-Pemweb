import pool  from "../../../database/postgress";


export default async function handler(req, res){
    if(req.method === 'PUT') {
        
      
            try {
              const client = await pool.connect();
      
              const query = {
                text: `
                  UPDATE products
                  SET
                   isdelete = true
                  WHERE
                    id = $1
                `,
                values: [
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
        }
    }
        
