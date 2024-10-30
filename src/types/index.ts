export interface Product {
  id: string;
  name: string;
  drugFormula: string;
  unitPrice: number;
  boxPrice: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export interface Order {
  id: string;
  products: Array<{
    product: Product;
    quantity: number;
  }>;
  status: 'pending' | 'completed' | 'delivered';
  totalAmount: number;
  createdAt: string;
}

export interface User {
  id: string;
  prefix: string;
  name: string;
  mobile: string;
  address: string;
  profileImage?: string;
  email: string;
}