import connectDB from "@/app/libs/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req:Request, res:Response){
   
    const {name, email, subject,message} = await req.json();

    try{
        await connectDB();
        await Contact.create({name, email, subject, message})
        return NextResponse.json({
            msg:["Message Submitted succesfully"], sucess :true
        })
    }catch(error){
        if(error instanceof mongoose.Error.ValidationError){
            let errorList = [];
            for(let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            console.log(errorList)
            return NextResponse.json({msg:errorList})
        }else{
            return NextResponse.json(error)
        }
    }
}
