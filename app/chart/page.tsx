"use client";

import Panel from "@/components/Panel";
import { useState, useEffect, useRef } from "react";

interface DataItem {
  label: string;
  value: number;
}

type Period = "week" | "month" | "year";

type DataStructure = {
  [key in Period]: DataItem[];
};

const data: DataStructure = {
  week: [
    { label: "Mon", value: 4000 },
    { label: "Tue", value: 3000 },
    { label: "Wed", value: 5000 },
    { label: "Thu", value: 2780 },
    { label: "Fri", value: 1890 },
    { label: "Sat", value: 2390 },
    { label: "Sun", value: 3490 },
  ],
  month: [
    { label: "Week 1", value: 15000 },
    { label: "Week 2", value: 18000 },
    { label: "Week 3", value: 12000 },
    { label: "Week 4", value: 21000 },
  ],
  year: [
    { label: "Jan", value: 45000 },
    { label: "Feb", value: 52000 },
    { label: "Mar", value: 49000 },
    { label: "Apr", value: 63000 },
    { label: "May", value: 58000 },
    { label: "Jun", value: 72000 },
    { label: "Jul", value: 78000 },
    { label: "Aug", value: 69000 },
    { label: "Sep", value: 74000 },
    { label: "Oct", value: 82000 },
    { label: "Nov", value: 91000 },
    { label: "Dec", value: 110000 },
  ],
};

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
};

export default function Chart(): JSX.Element {
  const [period, setPeriod] = useState<Period>("week");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const totalSales: number = data[period].reduce(
    (sum, item) => sum + item.value,
    0
  );
  const percentChange: number =
    period === "week" ? 12.5 : period === "month" ? 8.3 : 15.7;
  const isPositive: boolean = percentChange > 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const padding = 40;
    const chartWidth = rect.width - padding * 2;
    const chartHeight = rect.height - padding * 2;
    const currentData = data[period];
    const maxValue = Math.max(...currentData.map((item) => item.value)) * 1.1;
    const pointWidth = chartWidth / (currentData.length - 1);

    ctx.strokeStyle = "#4B5563";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, rect.height - padding);
    ctx.lineTo(rect.width - padding, rect.height - padding);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(padding, rect.height - padding);
    currentData.forEach((item, index) => {
      const x = padding + index * pointWidth;
      const y = rect.height - padding - (item.value / maxValue) * chartHeight;
      ctx.lineTo(x, y);
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.label, x, rect.height - padding + 20);
    });

    ctx.strokeStyle = "#6366F1";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [period]);

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <Panel />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Sales Overview</h2>
              <p className="text-sm text-gray-400">
                Track your sales performance
              </p>
            </div>
            <div className="flex bg-gray-800 rounded-md p-1">
              {["week", "month", "year"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p as Period)}
                  className={`px-3 py-1.5 text-sm font-medium rounded ${
                    period === p
                      ? "bg-gray-700 text-white"
                      : "text-gray-400 hover:text-white"
                  } transition-colors`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="transition-all duration-300 ease-in-out">
              <p className="text-sm font-medium text-gray-400">Total Sales</p>
              <h3 className="text-2xl font-bold text-white">
                {formatCurrency(totalSales)}
              </h3>
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <p className="text-sm font-medium text-gray-400">Growth</p>
              <div className="flex items-center">
                <span
                  className={`text-2xl font-bold ${
                    isPositive ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {percentChange}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full px-4 pb-4">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </main>
    </div>
  );
}
