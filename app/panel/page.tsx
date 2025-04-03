"use client";

import Panel from "@/components/Panel";

export default function AdminPanel(): JSX.Element {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <Panel />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Start Admin Panel</h1>
        <p className="text-gray-200 mt-2">Welcome to your admin panel.</p>
      </main>
    </div>
  );
}
