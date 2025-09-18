"use client";
import Image from 'next/image'
import NavImg from '@/assets/images/banner/logo.svg'
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession()
  console.log(session)
    const navMenu = () => {
        return (
            <>
        <li>
        <Link href={"/"}>Home</Link>
        </li>
        <li>
        <Link href={"/about"}>About</Link>
        </li>
        <li>
        <Link href={"/services"}>Services</Link>
        </li>
        <li>
        <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
        <Link href={"/my-bookings"}>My Bookings</Link>
        </li>

        </>
        )
    }
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navMenu()}
      </ul>
    </div>
    <Link href={"/"} className="text-xl">
        <Image src={NavImg} width={107} height={87}
        alt='Company Logo'
         />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navMenu()}
    </ul>
  </div>
  <div className="navbar-end">
    {status == 'authenticated' ? (<>
    <a className='mr-2'>
      <Image className='rounded-2xl' src={session?.user?.image} width={50} height={50} alt='user-logo' />
    </a>
    <a className='mr-3 bg-red-500 text-white font-bold p-3 rounded-2xl shadow-2xl' onClick={()=> signOut()}>Logout</a>
    </>) : (<>
    <Link className='mr-3' href={"/register"}>
      Register 
    </Link>
     <Link className='mr-3' href={"/login"}>
      Login 
    </Link>
    </>)}
   
    <a className="btn btn-outline">Appointment</a>
  </div>
</div>
</div>
  )
}
