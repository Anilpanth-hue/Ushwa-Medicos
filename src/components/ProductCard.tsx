"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.drugFormula}</p>

        <div className="flex justify-between items-center pt-2">
          <div>
            <p className="text-lg font-bold text-teal-600">
              ₹{product.unitPrice.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">per unit</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-teal-600">
              ₹{product.boxPrice.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">per box</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">{product.stock}</span> in stock
          </p>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center space-x-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
