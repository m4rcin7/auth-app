"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Settings, Users, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export default function Panel(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/panel", icon: <Globe size={20} />, label: "Panel" },
    { href: "/dashboard", icon: <Home size={20} />, label: "Dashboard" },
    { href: "/chart", icon: <BarChart3 size={20} />, label: "Analytics" },
    { href: "/users", icon: <Users size={20} />, label: "Users" },
    { href: "/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-gray-100 bg-gray-700 rounded-md shadow-md"
      >
        <Menu size={24} />
      </button>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-lg p-5 transform transition-transform duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative flex flex-col h-screen`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 text-gray-300 self-end"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold text-gray-300 mb-6">
          Admin Panel
        </h2>

        <nav className="space-y-4 flex-1">
          {navLinks.map(({ href, icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-3 p-3 rounded-lg transition duration-200
                  ${
                    isActive
                      ? "bg-gray-600 text-pink-400"
                      : "text-gray-300 hover:bg-gray-700 active:bg-gray-600 active:text-pink-400"
                  }`}
              >
                {icon} <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
