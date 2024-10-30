import React from 'react';
import { motion } from 'framer-motion';
import { AdminOrder } from '../../types/admin';
import { formatPrice } from '../../utils/format';
import { format } from 'date-fns';

const mockOrders: AdminOrder[] = [
  {
    id: 'ORD001',
    products: [
      {
        product: {
          id: '1',
          name: 'Paracetamol 500mg',
          drugFormula: 'Acetaminophen 500mg',
          unitPrice: 2.5,
          boxPrice: 225,
          imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80',
          category: 'Pain Relief',
          stock: 150
        },
        quantity: 2
      }
    ],
    status: 'delivered',
    totalAmount: 450,
    createdAt: '2024-03-15T10:00:00Z',
    customerDetails: {
      name: 'Dr. John Doe',
      mobile: '+91 98765 43210',
      address: '123 Medical Lane, Garoth'
    },
    statusHistory: [
      {
        status: 'pending',
        timestamp: '2024-03-15T10:00:00Z'
      },
      {
        status: 'delivered',
        timestamp: '2024-03-15T14:00:00Z'
      }
    ]
  }
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  delivered: 'bg-primary-100 text-primary-800',
  cancelled: 'bg-red-100 text-red-800'
};

export const RecentOrders = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <button className="text-primary-600 text-sm hover:text-primary-700">
            View all
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>{order.customerDetails.name}</div>
                  <div className="text-xs">{order.customerDetails.mobile}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {order.products.map((item) => (
                    <div key={item.product.id}>
                      {item.product.name} x {item.quantity}
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatPrice(order.totalAmount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    statusColors[order.status]
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(order.createdAt), 'MMM d, yyyy')}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};