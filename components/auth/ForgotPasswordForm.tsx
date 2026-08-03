"use client";

import Link from "next/link";

import { Mail, ArrowLeft, ShieldCheck } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <div
      className="
      w-full
      max-w-md
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-xl
      "
    >
      {/* Header */}

      <div className="text-center">
        <div
          className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
          "
        >
          <ShieldCheck className="text-blue-600" size={32} />
        </div>

        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          Forgot Password?
        </h1>

        <p className="mt-3 text-slate-600">
          Enter your email and we will send you a password reset link.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-semibold">Email Address</label>

          <div className="relative mt-2">
            <Mail
              size={20}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              rounded-xl
              border
              border-slate-200
              py-3
              pl-12
              outline-none
              transition
              focus:border-blue-500
              "
            />
          </div>
        </div>

        <button
          type="submit"
          className="
          w-full
          rounded-xl
          bg-blue-600
          py-3
          font-semibold
          text-white
          shadow-lg
          shadow-blue-600/30
          transition
          hover:bg-blue-700
          "
        >
          Send Reset Link
        </button>
      </form>

      <Link
        href="/login"
        className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        text-sm
        font-semibold
        text-blue-600
        "
      >
        <ArrowLeft size={18} />
        Back to Login
      </Link>
    </div>
  );
}
