import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import toast from 'react-hot-toast';

// Temporary mock data
const cartItems = [
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
];

export const Cart = () => {
  const handleCheckout = () => {
    toast.success('Order placed successfully!');
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.unitPrice * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600">Start adding products to your cart</p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm">
            {cartItems.map(({ product, quantity }) => (
              <motion.div
                key={product.id}
                className="flex items-center p-4 border-b last:border-b-0"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.drugFormula}</p>
                  <div className="text-primary-600 mt-1">
                    {formatPrice(product.unitPrice)} per unit
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                      -
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                      +
                    </button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{formatPrice(totalAmount)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};