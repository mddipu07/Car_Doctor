"use client";
import { useRouter } from "next/navigation";

export default function DeleteBookingButton({id}) {
    const router = useRouter()
    const handleDelete = async(id) => {

        const res = await fetch(`https://car-doctor-lime-one.vercel.app/api/service/${id}`,{
            method: "DELETE",
        });
        const data = await res.json()
        console.log(data);
        router.refresh()
    }
  return (
    <>
       <button onClick={()=> handleDelete(id)} className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
        Delete
        </button>
    </>
  )
}
