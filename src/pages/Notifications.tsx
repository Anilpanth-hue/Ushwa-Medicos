import { motion } from 'framer-motion';
import { Bell, Package, ShoppingCart, Truck } from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    type: 'order',
    title: 'Order Delivered',
    message: 'Your order #ORD001 has been delivered successfully.',
    time: '2 hours ago',
    icon: Truck,
    read: false
  },
  {
    id: 2,
    type: 'stock',
    title: 'Low Stock Alert',
    message: 'Paracetamol 500mg is running low on stock.',
    time: '1 day ago',
    icon: Package,
    read: true
  },
  {
    id: 3,
    type: 'cart',
    title: 'Cart Reminder',
    message: 'You have items waiting in your cart.',
    time: '2 days ago',
    icon: ShoppingCart,
    read: true
  }
];

export const Notifications = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="text-primary-600 text-sm hover:text-primary-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-lg shadow-sm p-4 ${
              !notification.read ? 'border-l-4 border-primary-600' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-full ${
                !notification.read ? 'bg-primary-100' : 'bg-gray-100'
              }`}>
                <notification.icon className={`h-5 w-5 ${
                  !notification.read ? 'text-primary-600' : 'text-gray-600'
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {mockNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No notifications</h2>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      )}
    </div>
  );
};