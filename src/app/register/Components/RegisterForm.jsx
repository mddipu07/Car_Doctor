"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/Components/SocialLogin";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    toast.loading("Registering... 🚀", { id: "registerToast" });

    try {
      await registerUser({ name, email, password });
      toast.success("Registered Successfully ✅", { id: "registerToast" });
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed ⚠️", { id: "registerToast" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Create Account 📝
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-gray-700 font-medium">Name</label>
            <input
              name="name"
              required
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-2"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>

        <div className="divider">OR</div>

        <SocialLogin />
      </div>
    </div>
  );
}

