"use server"

const { default: dbConnect } = require("@/lib/dbConnect");

export const loginUser = async (payload)=>{
    const {email, password} = payload;
     const userCollection = dbConnect('userCollection')
     const user = await userCollection.findOne({email})
     if(!user) return null

     return user;
}