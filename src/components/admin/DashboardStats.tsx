import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, ShoppingCart, Users } from 'lucide-react';
import { formatPrice } from '../../utils/format';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: number;
  loading?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  loading = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm p-6"
    >
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-primary-100">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        {trend !== undefined && (
          <span className={`text-sm font-medium ${
            trend >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {loading ? (
          <div className="h-8 bg-gray-200 rounded animate-pulse mt-1"></div>
        ) : (
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

export const DashboardStats = () => {
  // This would come from an API in production
  const stats = {
    revenue: 125000,
    orders: 48,
    products: 256,
    customers: 180,
    loading: false
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Revenue"
        value={formatPrice(stats.revenue)}
        icon={TrendingUp}
        trend={12}
        loading={stats.loading}
      />
      <StatsCard
        title="Total Orders"
        value={stats.orders}
        icon={ShoppingCart}
        trend={8}
        loading={stats.loading}
      />
      <StatsCard
        title="Products"
        value={stats.products}
        icon={Package}
        loading={stats.loading}
      />
      <StatsCard
        title="Customers"
        value={stats.customers}
        icon={Users}
        trend={15}
        loading={stats.loading}
      />
    </div>
  );
};