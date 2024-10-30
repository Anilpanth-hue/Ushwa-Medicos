import React, { createContext, useContext, useState } from 'react';
import { AdminUser } from '../types/admin';
import toast from 'react-hot-toast';

interface AdminAuthContextType {
  admin: AdminUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<AdminUser | null>(null);

  const login = async (username: string, password: string) => {
    try {
      // In production, this would be an API call
      if (username === 'vivek' && password === 'Vivek@123') {
        const adminUser: AdminUser = {
          username: 'vivek',
          role: 'admin'
        };
        setAdmin(adminUser);
        toast.success('Welcome back, Admin!');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Invalid username or password');
      throw error;
    }
  };

  const logout = () => {
    setAdmin(null);
    toast.success('Logged out successfully');
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        isAuthenticated: !!admin,
        login,
        logout
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};