"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default  function CheckoutForm({data}) {
  const {data : session} = useSession()
  console.log(session);
  const handleBookService = async (e) => {
     toast("Submitting Booking...");
     e.preventDefault();

     const form = e.target;
     const name = form.name.value;
     const price = form.price.value;
     const email = form.email.value;
     const date = form.date.value;
     const phoneNumber = form.phoneNumber.value;
     const presentAddress = form.presentAddress.value;
     console.log({name,price,email,date,phoneNumber,presentAddress})
     const bookingPayload = {
      customerName:name,
      email,
      price,
      date,
      phoneNumber,
      presentAddress,
      service_id: data?._id,
      service_name: data.title,
      service_img: data.img,
      service_price:data.price
     }
     console.log(bookingPayload);
     const res = await fetch("https://car-doctor-lime-one.vercel.app/api/service", {
      method: "POST",
      body: JSON.stringify(bookingPayload)
     });
     const postedResponse = await res.json()
     console.log("POSTED DATA",postedResponse);
     toast.success("Data Added Succesfully")
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleBookService}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Checkout : {data?.title}
        </h2>

        {/* Personal Info */}
        <div className="space-y-4">
          <input
            defaultValue={session?.user?.name}
            readOnly
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            defaultValue={session?.user?.email}
            readOnly
            type="email"
            name="email"
            placeholder="Email Address"
           
            className="w-full p-3 border rounded-lg"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              defaultValue={data?.price}
              type="text"
              name="price"
              readOnly
              placeholder="Price"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        {/* Payment Info */}
        <div className="space-y-4">
          <input
            type="text"
            name="phoneNumber"
            placeholder="PhoneNumber"
            className="w-full p-3 border rounded-lg"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              placeholder="date"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="presentAddress"
              placeholder="presentAddress"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
}

