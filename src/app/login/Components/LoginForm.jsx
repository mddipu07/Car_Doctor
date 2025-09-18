"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    toast.loading("Submitting... 🚀", { id: "loginToast" });

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Logged In Successfully ✅", { id: "loginToast" });
        router.push("/");
      } else {
        toast.error(response?.error || "Invalid credentials ❌", { id: "loginToast" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Authentication Failed ⚠️", { id: "loginToast" });
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      
      {/* Centered Form */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-600 font-semibold">
            Register
          </Link>
        </p>

        <div className="divider">OR</div>

        <SocialLogin />
      </div>
    </div>
  );
}

