"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";

type Role = "student" | "teacher" | "parent" | "admin";

const roles = [
  { label: "Student", value: "student" as Role },
  { label: "Teacher", value: "teacher" as Role },
  { label: "Parent", value: "parent" as Role },
  { label: "Admin", value: "admin" as Role },
];

export default function LoginForm() {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const selectedRole = roles.find((r) => r.value === role);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await login(email, password, role);
      router.push(`/dashboard/${role}`);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.",
      );
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
          <GraduationCap className="text-blue-600" size={32} />
        </div>

        <h1 className="mt-5 text-3xl font-bold text-slate-900">Welcome Back</h1>
        <p className="mt-3 text-slate-600">Login to your School LMS account</p>
      </div>

      <div className="mt-8">
        <label className="text-sm font-semibold text-slate-900">Login As</label>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {roles.map((item) => (
            <button
              key={item.value}
              type="button"
              disabled={isLoading}
              onClick={() => setRole(item.value)}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${
                role === item.value
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-sm font-semibold text-slate-900">
            Email Address
          </label>

          <div className="relative mt-2">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-900">
            Password
          </label>

          <div className="relative mt-2">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-12 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
            />

            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {errorMessage ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="font-medium text-blue-600 transition hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
        >
          {isLoading ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Signing in...
            </>
          ) : (
            <>Login as {selectedRole?.label}</>
          )}
        </button>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="text-center text-sm text-slate-600">
          Don't have an account?
          <Link
            href="/signup"
            className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Create Account
          </Link>
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          Demo Accounts
        </h3>
        <div className="space-y-2 text-xs text-slate-600">
          <p>🎓 Student — student@school.com</p>
          <p>👨‍🏫 Teacher — teacher@school.com</p>
          <p>👨‍👩‍👧 Parent — parent@school.com</p>
          <p>🛡️ Admin — admin@school.com</p>
          <p className="pt-2 text-slate-500">Password: password123</p>
        </div>
      </div>
    </div>
  );
}
