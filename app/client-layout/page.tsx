"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    router.push("/panel");
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <SignedOut>
          <div className="h-screen flex flex-col justify-center items-center p-4 gap-4 bg-gray-300 text-gray-800">
            <h1 className="text-3xl font-bold text-pink-400">
              Welcome to the Home Page
            </h1>
            <SignInButton />
            <SignUpButton />
          </div>
        </SignedOut>

        <SignedIn>
          <header className="flex justify-between items-center p-4 bg-gray-700 text-white border-b border-white">
            <div className="text-2xl font-bold">My App</div>
            <UserButton />
          </header>
          {children}
        </SignedIn>
      </body>
    </html>
  );
}
