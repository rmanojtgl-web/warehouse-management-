
export interface Product {
  id: string;
  name: string;
  sku: string;
  description: string;
  supplier: string;
  unitCost: number;
  imageUrl: string;
}

export interface InventoryItem {
  inventoryId: string;
  productId: string;
  quantityOnHand: number;
  location: string; // e.g., Aisle-Shelf-Bin -> "A01-S03-B02"
  lastRestocked: string; // ISO date string
}

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  orderId: string;
  customerName: string;
  orderDate: string; // ISO date string
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  shippingAddress: string;
  items: OrderItem[];
}

export interface User {
  userId: string;
  name: string;
  email: string;
  role: 'Manager' | 'Picker' | 'Packer';
}

export type Page = 'dashboard' | 'inventory' | 'orders';