import React, { useState } from 'react';
import { sidebarNavItems } from '../../data/dashboardData';
import { UserButton, useClerk } from '@clerk/react';
import { Store, LogOut, X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const { signOut } = useClerk();
  const [activeNav, setActiveNav] = useState('dashboard');

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-45 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static top-4 bottom-4 left-4 z-50
        w-[88px] rounded-3xl bg-gradient-to-b from-[#8367F5] to-[#6238F0]
        flex flex-col items-center py-6 px-3 shadow-[0_12px_40px_rgba(108,78,242,0.3)]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute -right-3 top-3 bg-surface text-ink p-1 rounded-full shadow-md hover:bg-line transition-colors"
          title="Close Sidebar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Logo Mark */}
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 shadow-inner shrink-0">
          <Store className="w-6 h-6" />
        </div>

        {/* Nav Stack */}
        <nav className="flex flex-col items-center gap-3 w-full">
          {sidebarNavItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                title={item.label}
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group relative cursor-pointer
                  ${isActive 
                    ? 'bg-white/20 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]' 
                    : 'text-white/55 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <IconComponent className="w-5 h-5" />
                {/* Tooltip for hover on desktop */}
                <span className="absolute left-full ml-3 px-2.5 py-1 bg-ink text-white text-xs rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section: Clerk UserButton & Logout */}
        <div className="mt-auto flex flex-col items-center gap-4 w-full pt-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors overflow-hidden">
            <UserButton afterSignOutUrl="/" />
          </div>

          <button
            onClick={() => signOut(() => window.location.href = '/')}
            title="Sign Out"
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white/55 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  );
}

