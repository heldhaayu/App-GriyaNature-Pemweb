import pool from '../../../database/postgress'

import bcrypt from 'bcryptjs'

export default async function handler(req, res){
    console.log(req.body.username) 

    const client = await pool.connect();
    
    if(req.method !== 'POST') return res.status(405).end();
    console.log(req.body)

    const {name, username,email, nomortelpon , password, address} =req.body;

    console.log(req.body)

    console.log(password)
    const salt = bcrypt.genSaltSync(10)
   
    const passwordHash = bcrypt.hashSync(password, salt)
    

    const query ={
        text: `
        INSERT INTO users (name, username, email, nomortelpon, password, address)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `,
      values : [name, username, email, nomortelpon, passwordHash, address],
    }

    const register = await client.query(query)

    const query2 ={
        text: `
        SELECT username from users
        where id = $1
        RETURNING id;
      `,
      values : [register.id],
    }

    const registeredUser = await client.query(query2)

    res.status(200)
    res.json({
        message:'user registered successfully',
        user:registeredUser
    })
}