"use client";

import Panel from "@/components/Panel";

export default function AdminPanel(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Panel />
      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-pink-400">Start Admin Panel</h2>
        <p className="text-gray-300 mt-3 text-lg">
          Welcome to your admin panel.
        </p>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Manage Users",
              description: "Add, edit or remove users.",
            },
            {
              title: "View Analytics",
              description: "Check system statistics.",
            },
            {
              title: "Settings",
              description: "System preferences & configuration.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-800 p-5 rounded-xl shadow-md hover:bg-zinc-700 transition duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
