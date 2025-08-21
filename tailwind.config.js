/**
 * 
 * "use server"
 
 import dbConnect from "@/lib/dbConnect"
 
 export const loginUser = async (payload) =>{
     const userCollection = dbConnect("userCollection")
     const result = await userCollection.insertOne(payload)
     console.log(result);
     return {
     acknowledged: result.acknowledged,
     insertedId: result.insertedId.toString(), 
   }
 }








 "use client"
 import { useSession, signIn, signOut } from "next-auth/react"
 
 import React from 'react';
 import { loginUser } from "../actions/auth/loginUser";
 
 
 export default function LoginPage() {
     const handleSubmit = async (e)=>{
         e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         const playload = {email, password}
         loginUser(playload);
         
     }
     return (
     <div className="hero bg-base-200 min-h-screen">
   <div className="hero-content flex-col items-center">
     <div className="text-center lg:text-left">
       <h1 className="text-5xl font-bold">Register Now!</h1>
     </div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <div className="card-body">
         <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
           <label className="label">Name</label>
           <input name="name" type="text" className="input" placeholder="Name" />
           <label className="label">Email</label>
           <input name="email" type="email" className="input" placeholder="Email" />
           <label className="label">Password</label>
           <input name="password" type="password" className="input" placeholder="Password" />
           <button type="submit" className="btn btn-neutral mt-4">Register</button>
         </form>
       </div>
     </div>
   </div>
 </div>
 
   )  ;
 }
 
 
 */