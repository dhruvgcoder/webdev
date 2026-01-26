import { z } from "zod";
import express from "express";

const app = express();

// Profile update schema

const updateUserProfile = z.object({
    name : z.string().min(1 ,{message: "Name cannot be empty"}),
    email : z.string().email({message: "Invalid email format"}),
    age : z.number().optional()
}) 

export type FinalUserSchema = z.infer<typeof updateUserProfile>

// automatically infer the type from schema and defines type  

app.put('/user',(req: any,res: any)=>{
    const { success } = updateUserProfile.safeParse(req.body)
    const updateBody: FinalUserSchema = req.body;
    if(!success){
        res.status(411).json({})
        return;
    }
    // update the db here 
    res.json({
        msg : "User Entry Updated"
    })
})
