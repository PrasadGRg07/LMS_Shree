"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createClient } from "@/utils/supabase/client";

type Role = "student" | "teacher" | "parent" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface SignupPayload {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, role: Role) => Promise<void>;
  signup: (
    payload: SignupPayload,
  ) => Promise<{ success: boolean; message: string }>;
  resendConfirmation: (
    email: string,
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const mapUser = (sessionUser: any, fallbackRole: Role): User => ({
    id: sessionUser?.id ?? "",
    name:
      sessionUser?.user_metadata?.full_name ??
      sessionUser?.email?.split("@")[0] ??
      "User",
    email: sessionUser?.email ?? "",
    role:
      (sessionUser?.user_metadata?.role as Role | undefined) ?? fallbackRole,
  });

  useEffect(() => {
    const initializeSession = async () => {
      setIsLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(mapUser(session.user, "student"));
      }

      setIsLoading(false);
    };

    initializeSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(mapUser(session.user, "student"));
        } else {
          setUser(null);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  const login = async (email: string, password: string, role: Role) => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setIsLoading(false);
      throw error;
    }

    setUser(mapUser(data.user, role));
    setIsLoading(false);
  };

  const signup = async ({
    fullName,
    email,
    password,
    phone,
    role,
  }: SignupPayload) => {
    setIsLoading(true);

    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/confirm`
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/confirm";

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone,
          role,
        },
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      setIsLoading(false);
      throw error;
    }

    setIsLoading(false);

    if (data.user && !data.session) {
      return {
        success: true,
        message:
          "Account created. Please check your email to confirm your account.",
      };
    }

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const resendConfirmation = async (email: string) => {
    setIsLoading(true);

    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/confirm`
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/confirm";

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    setIsLoading(false);

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Confirmation email sent again. Please check your inbox.",
    };
  };

  const logout = async () => {
    setIsLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        resendConfirmation,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
