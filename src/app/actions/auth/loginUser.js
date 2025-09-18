"use server";
import bcrypt from "bcrypt"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload) =>{
       const {email,password} = payload;
       const userCollection = dbConnect(collectionNameObj.userCollection)
       const user = await userCollection.findOne({ email })


       if(!user) return null
       const isPassword = bcrypt.compare(user.password, password)
       if(!isPassword) return null

       return user;
}