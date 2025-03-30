"use client";

import Panel from "@/components/Panel";

export default function AdminPanel(): JSX.Element {
  return (
    <div className="flex h-screen bg-black text-white">
      <Panel />
      <div className="flex flex-col flex-1 p-6 md:ml-64">
        <h1 className="text-2xl font-bold">Start Admin Panel</h1>
        <p className="text-gray-200 mt-2">Welcome to your admin panel.</p>
      </div>
    </div>
  );
}
