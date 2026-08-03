"use client";

import { useState } from "react";
import Link from "next/link";

import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

const roles = ["Student", "Teacher", "Parent"];

export default function SignupForm() {
  const [role, setRole] = useState("Student");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="
      w-full
      max-w-lg
      rounded-3xl
      border
      bg-white
      p-8
      shadow-xl
      "
    >
      {/* Header */}

      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

        <p className="mt-3 text-slate-600">Join our School LMS platform</p>
      </div>

      {/* Role Selection */}

      <div className="mt-8">
        <label className="text-sm font-semibold">Register As</label>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {roles.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item)}
              className={`
              rounded-xl
              border
              px-3
              py-3
              text-sm
              font-semibold
              transition

              ${
                role === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "hover:bg-blue-50"
              }

              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}

      <form className="mt-8 space-y-5">
        {/* Name */}

        <div>
          <label className="text-sm font-semibold">Full Name</label>

          <div className="relative mt-2">
            <User
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
              size={20}
            />

            <input
              type="text"
              placeholder="Enter your name"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-12
              outline-none
              focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="text-sm font-semibold">Email</label>

          <div className="relative mt-2">
            <Mail
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
              size={20}
            />

            <input
              type="email"
              placeholder="Enter email"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-12
              outline-none
              focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="text-sm font-semibold">Phone Number</label>

          <div className="relative mt-2">
            <Phone
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
              size={20}
            />

            <input
              type="tel"
              placeholder="Enter phone number"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-12
              outline-none
              focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="text-sm font-semibold">Password</label>

          <div className="relative mt-2">
            <Lock
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-12
              pr-12
              outline-none
              focus:border-blue-500
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              "
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="text-sm font-semibold">Confirm Password</label>

          <div className="relative mt-2">
            <Lock
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
              size={20}
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="
              w-full
              rounded-xl
              border
              py-3
              pl-12
              pr-12
              outline-none
              focus:border-blue-500
              "
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              "
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          className="
          w-full
          rounded-xl
          bg-blue-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          "
        >
          Create {role} Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?
        <Link href="/login" className="ml-2 font-semibold text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
}
