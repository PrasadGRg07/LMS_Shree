"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Role = "student" | "teacher" | "parent" | "admin";

interface User {
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;

  login: (email: string, password: string, role: Role) => void;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: Role) => {
    // Temporary login
    // Later connect with backend API

    setUser({
      name: "Prasad Gurung",

      email,

      role,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
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
