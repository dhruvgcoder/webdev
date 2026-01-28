import { Client } from "pg";
import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client(process.env.PG_URL)
pgClient.connect();

app.post("/signup",async (req,res)=>{
    const username = req.body.username 
    const email = req.body.email
    const password = req.body.password

    const street = req.body.street
    const city = req.body.city
    const country = req.body.country
    const pincode = req.body.pincode

try {
    const insertQuery = `INSERT INTO users (username , email , password ) VALUES ($1 , $2 , $3) RETURNING id`
    const addressInsertQuery = `INSERT INTO addresses (street , city , country , pincode , user_id) VALUES ($1 , $2 , $3 , $4 , $5)`
    
    // TRANSACTIONS IN SQL 
    await pgClient.query('BEGIN')
    const response = await pgClient.query(insertQuery , [username , email , password])
    const userId = response.rows[0].id
    const addressInsertResponse = await pgClient.query(addressInsertQuery , [street , city , country , pincode, userId])
    await pgClient.query('COMMIT')

    res.status(200).json({
        msg : "You have signed up"
    })
}catch(e){
    res.json({
        msg : "Error during signin"
    })
}
})

app.get('/metadata', async(req,res)=>{
    const id = req.query.id 

    const query1 = `SELECT username , email , password FROM users WHERE id=$1`
    const response1 = await pgClient.query(query1 , [id])

    const query2 = `SELECT * FROM addresses WHERE user_id=$1`
    const response2 = await pgClient.query(query2 , [id])
    res.json({
        user : response1.rows[0] ,
        address : response2.rows[0]
    })
}) 
app.get('/metadata-better' , async(req,res)=>{
    const id = req.query.id 

    // SQL query using JOINS
    const query = `SELECT users.id , users.username , users.email ,
    addresses.street , addresses.city , addresses.country , addresses.pincode
    FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1`

    const response = await pgClient.query(query , [id])

    res.json({
        data : response.rows[0]
    })
})
app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})