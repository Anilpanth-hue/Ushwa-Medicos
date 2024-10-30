import React from 'react';
import { DashboardStats } from '../../components/admin/DashboardStats';
import { SalesChart } from '../../components/admin/SalesChart';
import { RecentOrders } from '../../components/admin/RecentOrders';
import { StockAlerts } from '../../components/admin/StockAlerts';

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <StockAlerts />
      </div>

      <RecentOrders />
    </div>
  );
};