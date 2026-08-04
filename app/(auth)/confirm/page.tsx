"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function ConfirmContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const { resendConfirmation, isLoading } = useAuth();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasAttemptedResend, setHasAttemptedResend] = useState(false);

  const handleResend = async () => {
    if (!email || hasAttemptedResend) return;

    setMessage("");
    setErrorMessage("");
    setHasAttemptedResend(true);

    try {
      const result = await resendConfirmation(email);
      setMessage(result.message);
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "Unable to resend confirmation email.";
      setErrorMessage(
        fallbackMessage.includes("rate limit")
          ? "Too many emails were sent recently. Please wait a few minutes and try again."
          : fallbackMessage,
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-slate-900">Check your email</h1>
        <p className="mt-4 text-slate-600">
          We sent a confirmation link to your email. Please open it to verify
          your Supabase account.
        </p>

        {email ? (
          <button
            type="button"
            onClick={handleResend}
            disabled={isLoading || hasAttemptedResend}
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading
              ? "Sending..."
              : hasAttemptedResend
                ? "Email sent"
                : "Resend confirmation email"}
          </button>
        ) : null}

        {message ? (
          <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
            {message}
          </p>
        ) : null}

        {errorMessage ? (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        ) : null}

        <Link
          href="/login"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Go to login
        </Link>
      </div>
    </main>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  );
}
