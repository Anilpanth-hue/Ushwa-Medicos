import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  ShoppingBag, 
  Bell, 
  ShoppingCart, 
  ClipboardList, 
  User,
  Info,
  Phone,
  LogIn
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const publicLinks = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: ShoppingBag, label: 'Products' },
    { to: '/about', icon: Info, label: 'About Us' },
    { to: '/contact', icon: Phone, label: 'Contact' },
  ];

  const authLinks = [
    { to: '/notifications', icon: Bell, label: 'Notifications' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart' },
    { to: '/orders', icon: ClipboardList, label: 'Orders' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="flex items-center space-x-6">
      {publicLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center space-x-1 text-sm font-medium transition-colors
            ${isActive 
              ? 'text-primary-600' 
              : 'text-gray-600 hover:text-primary-500'}`
          }
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon className="h-5 w-5" />
          </motion.div>
          <span>{link.label}</span>
        </NavLink>
      ))}

      {isAuthenticated ? (
        <>
          {authLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-1 text-sm font-medium transition-colors
                ${isActive 
                  ? 'text-primary-600' 
                  : 'text-gray-600 hover:text-primary-500'}`
              }
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
              </motion.div>
              <span>{link.label}</span>
            </NavLink>
          ))}
          <button
            onClick={logout}
            className="text-sm font-medium text-gray-600 hover:text-primary-500"
          >
            Logout
          </button>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex items-center space-x-1 text-sm font-medium transition-colors
            ${isActive 
              ? 'text-primary-600' 
              : 'text-gray-600 hover:text-primary-500'}`
          }
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn className="h-5 w-5" />
          </motion.div>
          <span>Login</span>
        </NavLink>
      )}
    </nav>
  );
};