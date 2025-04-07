'use client'

import { useState } from 'react';
import { Gauge } from '@/components/ui/gauge'; 

export function GaugeDemo() {
  const [value, setValue] = useState(48); // Default value

  return (
    <main className="flex flex-col items-center gap-6">
      {/* Gauges */}
      <div className="flex gap-6">
        <Gauge size={100} primary={"success"} value={value} />
        <Gauge size={100} primary={"danger"} value={value} />
        <Gauge size={100} primary={"info"} value={value} />
        <Gauge size={100} primary={"warning"} value={value} />
      </div>

      {/* Slider to Control Gauge Value */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-64 h-2 mt-10 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
      
      {/* Display Value */}
      <span className="text-lg font-semibold">{value}%</span>
    </main>
  );
}