import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { StockAlert } from '../../types/admin';

const mockAlerts: StockAlert[] = [
  {
    productId: '1',
    productName: 'Paracetamol 500mg',
    currentStock: 5,
    threshold: 10,
    createdAt: '2024-03-15T10:00:00Z'
  },
  {
    productId: '2',
    productName: 'Amoxicillin 250mg',
    currentStock: 8,
    threshold: 15,
    createdAt: '2024-03-15T09:00:00Z'
  }
];

export const StockAlerts = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Low Stock Alerts</h2>
        <span className="text-sm text-gray-500">
          {mockAlerts.length} alerts
        </span>
      </div>

      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <motion.div
            key={alert.productId}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg"
          >
            <div className="p-2 bg-red-100 rounded-full">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-red-900">{alert.productName}</h3>
                <span className="text-sm text-red-600">
                  {alert.currentStock} left
                </span>
              </div>
              <p className="text-sm text-red-700 mt-1">
                Stock below minimum threshold ({alert.threshold} units)
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {mockAlerts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No low stock alerts</p>
        </div>
      )}
    </div>
  );
};