import { AuthProvider } from "@/context/AuthContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-slate-50">{children}</main>
    </AuthProvider>
  );
}
