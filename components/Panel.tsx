import { useState } from "react";
import { Menu, X, Home, Settings, Users, BarChart3Icon } from "lucide-react";
import Link from "next/link";

export default function Panel(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
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
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 ease-in-out duration-200"
        >
          <Home size={20} /> <span>Dashboard</span>
        </Link>{" "}
        <Link
          href="/chart"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 ease-in-out duration-200"
        >
          <BarChart3Icon size={20} /> <span>Analytics</span>
        </Link>
        <Link
          href="/users"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 ease-in-out duration-200"
        >
          <Users size={20} /> <span>Users</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 ease-in-out duration-200"
        >
          <Settings size={20} /> <span>Settings</span>
        </Link>
      </nav>
      <div className="flex-1 p-6 md:ml-64">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-gray-600"
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
}
