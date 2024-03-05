import { Request,Response } from "express";
import User from "../models/User";

const createCurrentUser = async(req:Request, res:Response)=>{
    //1. Check if user is exists
    //2. create the user if dosen't exists
    //3. return the user object to calling client

    try{
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});

        if(existingUser)
        {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();
        
        res.status(201).json(newUser.toObject());
    }
    catch(error){
        console.log("error " + error);
        res.status(500).json({Message : "error creating user"});
    }

};

export default{ createCurrentUser};