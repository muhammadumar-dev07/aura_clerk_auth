import React from 'react';

const statusStyles = {
  Delivered: 'bg-mint/12 text-mint border border-mint/20',
  Shipped: 'bg-sky/12 text-sky border border-sky/20',
  Processing: 'bg-violet/12 text-violet border border-violet/20',
  Pending: 'bg-amber/12 text-amber border border-amber/20',
  Refunded: 'bg-coral/12 text-coral border border-coral/20',
};

export default function StatusBadge({ status }) {
  const badgeClass = statusStyles[status] || 'bg-muted/12 text-muted border border-muted/20';

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
      {status}
    </span>
  );
}
