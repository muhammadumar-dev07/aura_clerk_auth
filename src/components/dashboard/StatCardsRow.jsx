import React from 'react';
import StatCard from './StatCard';
import { statCardsData } from '../../data/dashboardData';

export default function StatCardsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCardsData.map((card) => (
        <StatCard
          key={card.id}
          value={card.value}
          label={card.label}
          icon={card.icon}
          gradient={card.gradient}
          shadowColor={card.shadowColor}
        />
      ))}
    </div>
  );
}
