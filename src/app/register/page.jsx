import React from 'react'
import RegisterForm from './Components/RegisterForm'

export default function registerPage() {
  return (
    <div>
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <RegisterForm />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
