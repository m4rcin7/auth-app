"use client";

import Panel from "@/components/Panel";

export default function Settings(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Panel />
      <main className="flex-1 p-6 md:p-10">
        <h2 className="text-3xl font-bold text-pink-400">Settings</h2>
        <p className="text-gray-300 mt-3 text-lg">
          Customize your preferences below.
        </p>

        <div className="mt-8 space-y-6">
          {["Dark Mode", "Email Notifications", "Auto Save"].map((setting) => (
            <div
              key={setting}
              className="bg-zinc-800 p-4 rounded-xl shadow-md flex items-center justify-between hover:bg-zinc-700 transition duration-200"
            >
              <div>
                <p className="text-lg font-medium">{setting}</p>
                <p className="text-sm text-gray-400">
                  This is a placeholder option.
                </p>
              </div>
              <button className="bg-zinc-900 px-4 py-1.5 rounded-full text-sm text-gray-300 hover:bg-pink-500 hover:text-white transition duration-200">
                Save
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
