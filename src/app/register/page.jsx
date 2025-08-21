"use client"

import React from 'react';
import { registerUser } from '../actions/auth/registerUser';
import { useRouter } from 'next/navigation';


export default function RegisterPage(props) {
    const router = useRouter()
        const handleSubmit = async (e)=>{
         e.preventDefault();
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         const payload = {name,email, password}
         try {
      const result = await registerUser(payload);

      if (result?.insertedId) {
        router.push("/"); // redirect to home after success
      } else {
        console.error("Registration failed:", result);
      }
    } catch (err) {
      console.error("Error registering user:", err);
    }  
     }

    return (
        <div>
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
        </div>
    );
}

