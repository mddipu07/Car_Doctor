"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/Components/SocialLogin';
import Link from 'next/link';
import React from 'react'
export default function RegisterForm() {
    const handleSubmit = async (e) => {
           e.preventDefault();
           const form = e.target;
           const name = form.name.value;
           const email = form.email.value;
           const password = form.password.value;
           registerUser({name,email,password});
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Already Have An Account <Link href={"/login"} className='text-green-500 font-bold'>Login</Link></p>
        </form>
    </div>
  )
}
