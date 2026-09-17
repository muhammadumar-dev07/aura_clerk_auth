import React from 'react';
import { recentActivities } from '../../data/dashboardData';

export default function RecentActivities() {
  return (
    <div className="rounded-2xl bg-surface border border-line p-6 shadow-[0_8px_30px_rgba(27,29,40,0.06)] flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink">Recent Activity</h2>
            <p className="text-sm font-medium text-muted mt-0.5">Latest store updates</p>
          </div>
          <span className="text-xs font-semibold text-violet bg-violet/10 px-2.5 py-1 rounded-lg">Live</span>
        </div>

        <div className="flex flex-col gap-5">
          {recentActivities.map((act) => {
            const IconComponent = act.icon;
            return (
              <div key={act.id} className="flex items-start gap-4 pb-4 border-b border-line/60 last:border-b-0 last:pb-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${act.chipColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-sm font-bold text-ink truncate">{act.title}</span>
                    <span className="text-xs font-medium text-muted shrink-0">{act.time}</span>
                  </div>
                  <span className="text-xs font-medium text-muted line-clamp-1">{act.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-line text-center">
        <span className="text-xs font-medium text-muted">Showing all recent system logs</span>
      </div>
    </div>
  );
}

