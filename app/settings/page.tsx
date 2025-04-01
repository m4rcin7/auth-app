"use client";

import Panel from "@/components/Panel";

export default function Settings(): JSX.Element {
  return (
    <div className="flex h-screen bg-black text-white">
      <Panel />
      <div className="flex flex-col flex-1 p-6 md:ml-64">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
    </div>
  );
}
