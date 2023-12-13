import pool from '../../../database/postgress'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req, res){
    
    if(req.method !== 'POST') return res.status(405).end();

    const  {username, password} = req.body;

    console.log(req.body.username)

    const client = await pool.connect();

    const query ={
        text: `
        SELECT * from users
        where  username = $1
        
      `,
      values : [username],
    }

    const checkUser = await client.query(query)


    console.log(checkUser.rows[0])

    if(!checkUser) return status(401).end();

    const checkPassword = await bcrypt.compare(password, checkUser.rows[0].password)
 
    if(!checkPassword) return res.status(401).end()

    const token = jwt.sign({
        id:checkUser.rows[0].id,
        username:checkUser.rows[0].user,

    },'afaiyah?',{
        expiresIn: '7d'
    })
    
    res.status(200)
    res.json({
        message: 'login successfully',
        token
    })
}