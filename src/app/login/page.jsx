import Link from 'next/link'
import React from 'react'
import LoginForm from './Components/LoginForm'

export default function loginPage() {
  return (
    <div>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <LoginForm />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
