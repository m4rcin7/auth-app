"use";
import { useState } from "react";
import { Menu, LayoutDashboard, Users, Settings } from "lucide-react";

export default function Dashboard(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex h-screen bg-black text-white">
      <aside
        className={`$ {
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all bg-gray-900 p-4 flex flex-col`}
      >
        <button
          className="mb-4 bg-gray-700 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </button>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 p-2 bg-gray-700 rounded">
            <LayoutDashboard /> {isSidebarOpen && "Dashboard"}
          </button>
          <button className="flex items-center gap-2 p-2 bg-gray-700 rounded">
            <Users /> {isSidebarOpen && "Users"}
          </button>
          <button className="flex items-center gap-2 p-2 bg-gray-700 rounded">
            <Settings /> {isSidebarOpen && "Settings"}
          </button>
        </nav>
      </aside>

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
