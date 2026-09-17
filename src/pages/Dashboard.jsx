import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StatCardsRow from '../components/dashboard/StatCardsRow';
import EarningsCard from '../components/dashboard/EarningsCard';
import AnalyticsCard from '../components/dashboard/AnalyticsCard';
import RecentActivities from '../components/dashboard/RecentActivities';
import OrderStatusTable from '../components/dashboard/OrderStatusTable';

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* 1. Stat Cards Row */}
      <StatCardsRow />

      {/* 2. Middle Grid: Revenue Earnings (2/3) & Analytics Donut (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col">
          <EarningsCard />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <AnalyticsCard />
        </div>
      </div>

      {/* 3. Bottom Grid: Recent Activities (1/3) & Order Status Table (2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 flex flex-col">
          <RecentActivities />
        </div>
        <div className="lg:col-span-8 flex flex-col">
          <OrderStatusTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
