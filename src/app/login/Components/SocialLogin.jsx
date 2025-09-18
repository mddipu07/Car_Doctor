"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  const router = useRouter();
  const { status } = useSession();

  const handleSocialLogin = (providerName) => {
    signIn(providerName, { callbackUrl: "/" });
  };

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Successfully Logged In 🎉");
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex justify-center gap-6 mt-3">
      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        className="p-3 rounded-full bg-white border shadow-md hover:bg-red-50 hover:scale-110 transition-all duration-300"
      >
        <FaGoogle className="text-red-500 text-xl" />
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("github")}
        className="p-3 rounded-full bg-white border shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-300"
      >
        <FaGithub className="text-gray-800 text-xl" />
      </button>
    </div>
  );
}
