import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="flex items-center justify-between py-2 mb-6 flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <button 
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl bg-surface border border-line text-ink hover:bg-line transition-colors"
          title="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold tracking-tight text-ink">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        {/* Static Date Select 1 */}
        <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink shadow-[0_2px_8px_rgba(27,29,40,0.02)] cursor-pointer hover:border-violet/40 transition-colors">
          <span>Oct 01, 2026 - Oct 31, 2026</span>
          <ChevronDown className="w-4 h-4 text-muted" />
        </div>

        {/* Static Date Select 2 */}
        <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink shadow-[0_2px_8px_rgba(27,29,40,0.02)] cursor-pointer hover:border-violet/40 transition-colors">
          <span>Monthly</span>
          <ChevronDown className="w-4 h-4 text-muted" />
        </div>
      </div>
    </header>
  );
}

