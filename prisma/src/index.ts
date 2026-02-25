import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { z } from "zod";

const app = express();
app.use(express.json());

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });


const signupSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().optional(),
});


app.post("/signup", async (req, res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ errors: result.error.flatten().fieldErrors });
    return;
  }

  try {
    const user = await prisma.user.create({
      data: result.data,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id
      },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(409).json({ error: "Email already exists" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});