import React from 'react';
import { Package, Truck } from 'lucide-react';
import { Order } from '../types';
import { formatPrice } from '../utils/format';
import { format } from 'date-fns';

interface OrderCardProps {
  order: Order;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    delivered: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-sm text-gray-600">Order ID</div>
          <div className="font-medium">{order.id}</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </div>
      </div>

      <div className="space-y-4">
        {order.products.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center space-x-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.drugFormula}</p>
            </div>
            <div className="text-right">
              <div className="font-medium">{formatPrice(product.unitPrice * quantity)}</div>
              <div className="text-sm text-gray-600">Qty: {quantity}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-600">Total Amount</div>
          <div className="text-lg font-semibold">{formatPrice(order.totalAmount)}</div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Package className="h-4 w-4" />
            <span>Ordered on {format(new Date(order.createdAt), 'MMM d, yyyy')}</span>
          </div>
          {order.status === 'delivered' && (
            <div className="flex items-center space-x-1 text-primary-600">
              <Truck className="h-4 w-4" />
              <span>Delivered</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};