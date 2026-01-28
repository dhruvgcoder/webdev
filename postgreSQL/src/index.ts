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
try {
    let insertQuery = `INSERT INTO users (username , email , password ) VALUES ($1 , $2 , $3)`
    const response = await pgClient.query(insertQuery , [username , email , password])
    res.status(200).json({
        msg : "You have signed up"
    })
}catch(e){
    res.json({
        msg : "Error during signin"
    })
}
})
app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})