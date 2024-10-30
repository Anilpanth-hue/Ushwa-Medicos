export interface AdminUser {
  username: string;
  role: 'admin';
}

export interface SalesData {
  period: string;
  revenue: number;
  orders: number;
  products: number;
}

export interface StockAlert {
  productId: string;
  productName: string;
  currentStock: number;
  threshold: number;
  createdAt: string;
}

export interface AdminOrder extends Order {
  customerDetails: {
    name: string;
    mobile: string;
    address: string;
  };
  statusHistory: Array<{
    status: OrderStatus;
    timestamp: string;
  }>;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'delivered' | 'cancelled';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  productCount: number;
}