import React from 'react';
import { OrderCard } from '../components/OrderCard';
import { Order } from '../types';

// Temporary mock data
const mockOrders: Order[] = [
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
    createdAt: '2024-03-15T10:00:00Z'
  }
];

export const Orders = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      
      <div className="space-y-6">
        {mockOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};