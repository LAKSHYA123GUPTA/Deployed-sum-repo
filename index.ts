import express from 'express'
import cors from 'cors'
import { Request, Response } from "express";
const port = 3000;

const app=express();
app.use(express.json());
app.use(cors());
app.get("/sum",(req:Request,res:Response)=>{
    const a: number = parseInt(req.query.a as string, 10);
  const b: number = parseInt(req.query.b as string, 10);
    res.status(200).send("The sum is:  " +(a+b).toString());
})
app.listen(port);