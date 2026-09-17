import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function DashboardLayout({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas flex text-ink font-sans p-4 lg:p-6 gap-6 relative overflow-x-hidden">
      {/* Floating Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 max-w-7xl mx-auto w-full">
        <Topbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="flex flex-col gap-6 flex-1 pb-8 lg:pb-12">
          {children}
        </div>
      </main>
    </div>
  );
}

