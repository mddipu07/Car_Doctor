import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const res = await fetch(`https://car-doctor-flax.vercel.app/api/service/${p.id}`, {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="flex justify-center w-full">
        <figure className="relative w-full">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            alt={"banner"}
            width={1137}
            height={300}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-start ps-16">
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Service Details
            </h1>
          </div>
        </figure>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Service Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={data.img}
              width={800}
              height={500}
              alt={data.title}
              className="w-full h-[350px] object-cover"
            />
          </div>

          <h1 className="font-bold text-3xl text-gray-800">{data.title}</h1>
          <p className="text-gray-600 leading-relaxed">{data?.description}</p>
        </div>

        {/* Right Side: Checkout Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border border-gray-200 h-fit">
          <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
          <p className="text-lg font-bold text-orange-500">
            Price: ${data?.price}
          </p>

          <Link href={`/checkout/${data._id}`}>
            <button className="w-full text-white h-12 bg-orange-500 hover:bg-orange-600 p-3 rounded-xl font-semibold transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
