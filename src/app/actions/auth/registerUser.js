"use server"

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload ) =>{
    const userCollection = dbConnect("userCollection")
     const result = await userCollection.insertOne(payload)
     console.log(result);
     return {
     acknowledged: result.acknowledged,
     insertedId: result.insertedId.toString(), 
   }
}