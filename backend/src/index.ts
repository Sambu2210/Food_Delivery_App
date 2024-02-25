import express,{Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{console.log("database was connected")})

app.get("/test",async(req:Request, res:Response)=>{
    res.json({message:"Hello"});
})

app.listen("7000", ()=>{
    console.log("server started");
});
