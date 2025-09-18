"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 py-16 space-y-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-indigo-400">
          About Car Doctor
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At <span className="font-bold text-blue-500 dark:text-indigo-300">Car Doctor</span>, we provide top-notch car maintenance and repair services to ensure your vehicle stays in perfect condition. Your satisfaction is our top priority!
        </p>
      </section>

      {/* Mission Section */}
      <section className="p-10 rounded-xl bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 dark:from-pink-900 dark:via-yellow-900 dark:to-green-900 text-center">
        <h2 className="text-4xl font-semibold text-pink-600 dark:text-pink-300">Our Mission</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          We aim to make car maintenance <span className="font-bold text-green-600 dark:text-green-300">stress-free</span>, <span className="font-bold text-yellow-600 dark:text-yellow-300">reliable</span>, and <span className="font-bold text-pink-600 dark:text-pink-300">fast</span> for every customer.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-4xl font-semibold text-center text-blue-600 dark:text-indigo-400 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 text-center shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Engine Repair</h3>
            <p>Expert mechanics to keep your engine running smoothly.</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700 text-center shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">Oil Change</h3>
            <p>Quick and affordable oil changes for all car models.</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-700 text-center shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-2">Tire Services</h3>
            <p>Complete tire care including replacement, alignment, and balancing.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="p-10 rounded-xl bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 text-center">
        <h2 className="text-4xl font-semibold text-green-700 dark:text-green-300">What Our Clients Say</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 italic max-w-2xl mx-auto text-lg md:text-xl">
          "Car Doctor is amazing! They fixed my car in no time and at a very reasonable price. Highly recommend!"
        </p>
        <p className="mt-2 font-bold text-gray-800 dark:text-white">- Alex Johnson</p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold text-blue-600 dark:text-indigo-400">Ready to Book a Service?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-lg md:text-xl">Contact us today and get your car serviced by experts!</p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg hover:scale-105 transform transition">
          Book Now
        </button>
      </section>
    </div>
  );
}
