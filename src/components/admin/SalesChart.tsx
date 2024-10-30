import React from 'react';
import { motion } from 'framer-motion';
import { SalesData } from '../../types/admin';
import { formatPrice } from '../../utils/format';

// Mock data - would come from API in production
const mockSalesData: SalesData[] = [
  { period: 'Jan', revenue: 45000, orders: 15, products: 45 },
  { period: 'Feb', revenue: 52000, orders: 18, products: 52 },
  { period: 'Mar', revenue: 48000, orders: 16, products: 48 },
  // Add more months...
];

export const SalesChart = () => {
  const maxRevenue = Math.max(...mockSalesData.map(d => d.revenue));

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <select className="px-3 py-1 border border-gray-200 rounded-md text-sm">
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between">
          {mockSalesData.map((data, index) => (
            <div key={data.period} className="flex flex-col items-center w-16">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-8 bg-primary-500 rounded-t-lg"
              />
              <div className="mt-2 text-sm text-gray-600">{data.period}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
        {mockSalesData.slice(-1).map((data) => (
          <React.Fragment key="current">
            <div>
              <div className="text-sm text-gray-500">Revenue</div>
              <div className="text-lg font-semibold text-primary-600">
                {formatPrice(data.revenue)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Orders</div>
              <div className="text-lg font-semibold">{data.orders}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Products Sold</div>
              <div className="text-lg font-semibold">{data.products}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};