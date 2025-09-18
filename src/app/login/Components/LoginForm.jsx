"use client"
import Link from 'next/link';
import React from 'react'
import { signIn } from "next-auth/react"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';


export default function LoginForm() {
   const router = useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submitting........!!!")
        try {
            const response = await signIn("credentials", {email,  password, callbackUrl:"/" ,redirect:false});
             console.log({email,password});
             if(response.ok){
               toast.success("Logged In Successfully")
               router.push("/");
               form.reset();
             }else{
              toast.error("Failed to login")
             }
        } catch (error) {
            console.log(error);
            alert("Authentication Failed")
            
        }
       
    }
  return (
       <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Email</label>
          <input name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <p>Don't Have An Account?<Link href={"/register"} className='text-green-500 font-bold'>Register</Link></p>
           <p className='text-center'>Or Sign In With</p>
           <SocialLogin />
        </form>
  )
}
