import React, { useState } from 'react';
import { earningsOverview } from '../../data/dashboardData';
import EarningsChart from './EarningsChart';

export default function EarningsCard() {
  const [activeTab, setActiveTab] = useState('MONTHLY');
  const tabs = ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];

  const currentTabData = earningsOverview.tabsData[activeTab];

  return (
    <div className="rounded-2xl bg-surface border border-line p-6 shadow-[0_8px_30px_rgba(27,29,40,0.06)] flex flex-col justify-between h-full">
      <div>
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink">{earningsOverview.title}</h2>
            <p className="text-sm font-medium text-muted mt-0.5">{earningsOverview.subtitle}</p>
          </div>

          {/* Middle Tabs */}
          <div className="flex items-center gap-1 bg-canvas p-1 rounded-xl self-start sm:self-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all relative ${
                    isActive
                      ? 'bg-surface text-violet shadow-sm'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-violet rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Dot Legends */}
          <div className="flex items-center gap-4 text-xs font-medium text-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-violet" />
              <span>Online Store</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber" />
              <span>Retail</span>
            </div>
          </div>
        </div>

        {/* Content Grid: Left stats & button / Right chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div>
              <span className="text-sm font-medium text-muted block mb-1">{currentTabData.revenueLabel}</span>
              <span className="text-3xl font-bold tracking-tight text-ink">{currentTabData.revenue}</span>
            </div>

            <div>
              <span className="text-sm font-medium text-muted block mb-1">{currentTabData.ordersLabel}</span>
              <span className="text-2xl font-bold text-ink">{currentTabData.orders}</span>
            </div>

            <button className="bg-violet text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-violet/90 transition-colors shadow-[0_6px_20px_rgba(108,78,242,0.3)] self-start">
              {earningsOverview.buttonText}
            </button>
          </div>

          {/* Right Column (Chart) */}
          <div className="lg:col-span-8">
            <EarningsChart
              seriesData={currentTabData.series}
              categories={currentTabData.categories}
            />
          </div>
        </div>
      </div>

      {/* Bottom 4 Chips Row */}
      <div className="pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-auto">
        {earningsOverview.bottomChips.map((chip, idx) => {
          const IconComp = chip.icon;
          const colorMap = {
            violet: 'bg-violet/12 text-violet',
            sky: 'bg-sky/12 text-sky',
            amber: 'bg-amber/12 text-amber',
            mint: 'bg-mint/12 text-mint',
          };

          return (
            <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-canvas border border-line/60">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colorMap[chip.color]}`}>
                <IconComp className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-muted truncate">{chip.label}</span>
                <span className="text-sm font-bold text-ink truncate">{chip.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


