"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

type Role = "student" | "teacher" | "parent";

const roles: Array<{ label: string; value: Role }> = [
  { label: "Student", value: "student" },
  { label: "Teacher", value: "teacher" },
  { label: "Parent", value: "parent" },
];

export default function SignupForm() {
  const router = useRouter();
  const { signup, isLoading } = useAuth();

  const [role, setRole] = useState<Role>("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await signup({
        fullName,
        email,
        password,
        phone,
        role,
      });

      setSuccessMessage(response.message);

      if (response.success) {
        router.push("/confirm");
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again.",
      );
    }
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border bg-white p-8 shadow-xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
        <p className="mt-3 text-slate-600">Join our School LMS platform</p>
      </div>

      <div className="mt-8">
        <label className="text-sm font-semibold">Register As</label>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {roles.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setRole(item.value)}
              className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                role === item.value
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "hover:bg-blue-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-semibold">Full Name</label>
          <div className="relative mt-2">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border py-3 pl-12 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Email</label>
          <div className="relative mt-2">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full rounded-xl border py-3 pl-12 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Phone Number</label>
          <div className="relative mt-2">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full rounded-xl border py-3 pl-12 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Password</label>
          <div className="relative mt-2">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              required
              className="w-full rounded-xl border py-3 pl-12 pr-12 outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold">Confirm Password</label>
          <div className="relative mt-2">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
              className="w-full rounded-xl border py-3 pl-12 pr-12 outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {errorMessage ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {errorMessage}
          </p>
        ) : null}

        {successMessage ? (
          <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-600">
            {successMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading
            ? "Creating account..."
            : `Create ${role.charAt(0).toUpperCase() + role.slice(1)} Account`}
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
