import React from 'react';

export default function StatCard({ value, label, icon: IconComponent, gradient, shadowColor }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-r ${gradient} p-6 text-white flex items-center justify-between transition-transform duration-300 hover:-translate-y-1`}
      style={{ boxShadow: `0 10px 28px ${shadowColor}` }}
    >
      <div className="flex flex-col">
        <span className="text-3xl font-bold tracking-tight mb-1">{value}</span>
        <span className="text-sm font-medium text-white/80">{label}</span>
      </div>
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 backdrop-blur-sm">
        <IconComponent className="w-6 h-6" />
      </div>
    </div>
  );
}
