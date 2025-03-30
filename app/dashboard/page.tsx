"use client";

import Panel from "@/components/Panel";

export default function Dashboard(): JSX.Element {
  return (
    <div className="flex h-screen bg-black text-white">
      <Panel />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
            <p className="text-lg">Total Users</p>
            <h2 className="text-3xl font-bold">1,234</h2>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
            <p className="text-lg">Revenue</p>
            <h2 className="text-3xl font-bold">$12,345</h2>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
            <p className="text-lg">Active Sessions</p>
            <h2 className="text-3xl font-bold">56</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
