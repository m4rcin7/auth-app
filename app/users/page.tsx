"use client";

import Panel from "@/components/Panel";

export default function Users(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Panel />
      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-pink-400">Users</h2>
        <p className="text-gray-300 mt-3 text-lg">Welcome to the Users page.</p>
        <div className="mt-6 space-y-4">
          {["Alice", "Bob", "Charlie"].map((user) => (
            <div
              key={user}
              className="bg-zinc-800 p-4 rounded-lg shadow-md hover:bg-zinc-700 transition duration-200"
            >
              <p className="text-xl font-semibold">{user}</p>
              <p className="text-gray-400 text-sm">
                {user.toLocaleLowerCase()}@example.com
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
