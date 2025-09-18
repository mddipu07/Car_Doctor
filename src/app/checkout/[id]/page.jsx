import CheckoutForm from '@/Components/form/CheckoutForm';
import React from 'react'

export default async function CheckoutPage({params}) {
  const p = await params;
  const res = await fetch(`https://car-doctor-lime-one.vercel.app/api/service/${p.id}`)
  const data = await res.json()
  return ( 
     <div>
       <CheckoutForm data={data}  />
     </div>
  )
}
