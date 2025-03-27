"use client";
import { useState } from "react";
import { Menu, X, Home, Settings, Users } from "lucide-react";

export default function AdminPanel(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-800">
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-gray-700 shadow-lg w-64 p-5 transition-transform duration-300 ease-in-out 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 text-gray-100"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold text-gray-300 mb-6">
          Admin Panel
        </h2>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
          >
            <Home size={20} /> <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
          >
            <Users size={20} /> <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
          >
            <Settings size={20} /> <span>Settings</span>
          </a>
        </nav>
      </div>
      <div className="flex-1 p-6 md:ml-64">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-gray-600"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-200 mt-2">Welcome to your admin panel.</p>
      </div>
    </div>
  );
}
