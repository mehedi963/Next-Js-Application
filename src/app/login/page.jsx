"use client"

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';

function LoginPage(props) {
    //const router = useRouter();
         const handleSubmit = async (e)=>{
                 e.preventDefault();
                 const form = e.target;
                 const email = form.email.value;
                 const password = form.password.value;
                    try{
                        await signIn("credentials", {email,password , callbackUrl : '/'}, )
                 alert("Log in successfully")
                 //router.push('/')
                    }catch(error){
                        console.log(error.message);
                        alert("Authentication Failed")
                    }
                      
             }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;