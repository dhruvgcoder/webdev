import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config()

const pgClient = new Client({
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    port : 5432,
    host : process.env.PG_HOST ,
    database : "neondb"
})

async function main(){
    await pgClient.connect();

    const response = pgClient.query("SELECT * FROM users")
    console.log(response)
}