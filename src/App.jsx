import React from 'react';
import { Show, SignIn } from '@clerk/react';
import Dashboard from './pages/Dashboard';
import { Store } from 'lucide-react';

export default function App() {
  return (
    <>
      <Show when="signed-out">
        <div className="min-h-screen bg-canvas flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md bg-surface border border-line rounded-3xl p-8 shadow-[0_12px_40px_rgba(27,29,40,0.08)] flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8367F5] to-[#6238F0] flex items-center justify-center text-white mb-6 shadow-[0_8px_20px_rgba(108,78,242,0.3)]">
              <Store className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-ink tracking-tight mb-1 text-center">Aura Store Admin</h1>
            <p className="text-sm text-muted mb-6 text-center">Sign in to access your e-commerce dashboard</p>
            <SignIn 
              fallbackRedirectUrl="/dashboard" 
              forceRedirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none bg-transparent p-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                }
              }}
            />
          </div>
        </div>
      </Show>

      <Show when="signed-in">
        <Dashboard />
      </Show>
    </>
  );
}
