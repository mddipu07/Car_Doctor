import MyAllBookings from '@/Components/table/MyBookingTable'
import { headers } from 'next/headers';

  const fetchMyBookings = async () =>{
            const res = await fetch("https://car-doctor-flax.vercel.app/api/service" ,{
                headers: new Headers (await headers()),
            })
            const d = await res.json();
            return d;
        };


export default async function MyBookingsPage() {
    const data = await fetchMyBookings()

  return (
    <div>
        <MyAllBookings data={data} />
    </div>
  )
}
