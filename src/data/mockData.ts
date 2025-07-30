// Store-specific mock data

export interface Order {
  id: string;
  storeId: string;
  customer: string;
  items: string;
  amount: number;
  paymentStatus: 'paid' | 'pending' | 'failed';
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  date: string;
  time: string;
}

export interface InventoryItem {
  id: string;
  storeId: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'available' | 'low stock' | 'out of stock';
}

export interface Meal {
  id: string;
  storeId: string;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  price: number;
  status: 'active' | 'inactive';
  image: string;
  description: string;
}

export interface DeliveryAgent {
  id: string;
  storeId: string;
  name: string;
  phone: string;
  vehicle: string;
  status: 'available' | 'on delivery' | 'off duty';
  ordersDelivered: number;
  rating: number;
}

// Mock Orders by Store
export const mockOrdersByStore: Record<string, Order[]> = {
  'store-1': [
    {
      id: 'ORD-001',
      storeId: 'store-1',
      customer: 'John Doe',
      items: '2x Quinoa Bowl, 1x Green Smoothie',
      amount: 850,
      paymentStatus: 'paid',
      status: 'delivered',
      date: '2024-01-20',
      time: '14:30'
    },
    {
      id: 'ORD-002',
      storeId: 'store-1',
      customer: 'Jane Smith',
      items: '1x Protein Salad, 1x Fresh Juice',
      amount: 650,
      paymentStatus: 'paid',
      status: 'preparing',
      date: '2024-01-20',
      time: '15:15'
    }
  ],
  'store-2': [
    {
      id: 'ORD-003',
      storeId: 'store-2',
      customer: 'Mike Johnson',
      items: '1x Avocado Toast, 1x Coffee',
      amount: 450,
      paymentStatus: 'pending',
      status: 'pending',
      date: '2024-01-20',
      time: '16:00'
    }
  ],
  'store-3': [
    {
      id: 'ORD-004',
      storeId: 'store-3',
      customer: 'Sarah Wilson',
      items: '3x Power Bowl, 2x Smoothies',
      amount: 1200,
      paymentStatus: 'paid',
      status: 'ready',
      date: '2024-01-20',
      time: '13:45'
    }
  ]
};

// Mock Inventory by Store
export const mockInventoryByStore: Record<string, InventoryItem[]> = {
  'store-1': [
    {
      id: 'INV-001',
      storeId: 'store-1',
      name: 'Quinoa',
      category: 'Grains',
      price: 150,
      stock: 25,
      status: 'available'
    },
    {
      id: 'INV-002',
      storeId: 'store-1',
      name: 'Organic Spinach',
      category: 'Vegetables',
      price: 80,
      stock: 5,
      status: 'low stock'
    },
    {
      id: 'INV-003',
      storeId: 'store-1',
      name: 'Almond Milk',
      category: 'Dairy Alternatives',
      price: 120,
      stock: 0,
      status: 'out of stock'
    }
  ],
  'store-2': [
    {
      id: 'INV-004',
      storeId: 'store-2',
      name: 'Avocados',
      category: 'Fruits',
      price: 200,
      stock: 30,
      status: 'available'
    },
    {
      id: 'INV-005',
      storeId: 'store-2',
      name: 'Brown Rice',
      category: 'Grains',
      price: 100,
      stock: 8,
      status: 'low stock'
    }
  ],
  'store-3': [
    {
      id: 'INV-006',
      storeId: 'store-3',
      name: 'Chickpeas',
      category: 'Legumes',
      price: 90,
      stock: 50,
      status: 'available'
    }
  ]
};

// Mock Meals by Store
export const mockMealsByStore: Record<string, Meal[]> = {
  'store-1': [
    {
      id: 'MEAL-001',
      storeId: 'store-1',
      name: 'Quinoa Power Bowl',
      category: 'High Protein',
      calories: 520,
      protein: 25,
      carbs: 45,
      price: 420,
      status: 'active',
      image: '/api/placeholder/150/150',
      description: 'Nutrient-packed quinoa bowl with fresh vegetables'
    },
    {
      id: 'MEAL-002',
      storeId: 'store-1',
      name: 'Green Goddess Smoothie',
      category: 'Vegan',
      calories: 280,
      protein: 12,
      carbs: 35,
      price: 320,
      status: 'active',
      image: '/api/placeholder/150/150',
      description: 'Refreshing green smoothie with spinach and fruits'
    }
  ],
  'store-2': [
    {
      id: 'MEAL-003',
      storeId: 'store-2',
      name: 'Avocado Toast Supreme',
      category: 'Vegan',
      calories: 380,
      protein: 15,
      carbs: 28,
      price: 350,
      status: 'active',
      image: '/api/placeholder/150/150',
      description: 'Artisanal sourdough with fresh avocado and seeds'
    }
  ],
  'store-3': [
    {
      id: 'MEAL-004',
      storeId: 'store-3',
      name: 'Mediterranean Bowl',
      category: 'High Protein',
      calories: 450,
      protein: 28,
      carbs: 32,
      price: 480,
      status: 'active',
      image: '/api/placeholder/150/150',
      description: 'Fresh Mediterranean flavors with chickpeas and herbs'
    }
  ]
};

// Mock Delivery Agents by Store
export const mockDeliveryAgentsByStore: Record<string, DeliveryAgent[]> = {
  'store-1': [
    {
      id: 'DEL-001',
      storeId: 'store-1',
      name: 'Raj Patel',
      phone: '9876543210',
      vehicle: 'Motorcycle',
      status: 'available',
      ordersDelivered: 45,
      rating: 4.8
    },
    {
      id: 'DEL-002',
      storeId: 'store-1',
      name: 'Amit Kumar',
      phone: '9876543211',
      vehicle: 'Bicycle',
      status: 'on delivery',
      ordersDelivered: 32,
      rating: 4.6
    }
  ],
  'store-2': [
    {
      id: 'DEL-003',
      storeId: 'store-2',
      name: 'Priya Singh',
      phone: '9876543212',
      vehicle: 'Scooter',
      status: 'available',
      ordersDelivered: 28,
      rating: 4.9
    }
  ],
  'store-3': [
    {
      id: 'DEL-004',
      storeId: 'store-3',
      name: 'Rohit Sharma',
      phone: '9876543213',
      vehicle: 'Motorcycle',
      status: 'off duty',
      ordersDelivered: 52,
      rating: 4.7
    }
  ]
};

// Dashboard Analytics by Store
export const mockAnalyticsByStore: Record<string, any> = {
  'store-1': {
    totalOrders: 156,
    dailySales: 15750,
    topSellingMeal: 'Quinoa Power Bowl',
    avgOrderValue: 675
  },
  'store-2': {
    totalOrders: 89,
    dailySales: 9850,
    topSellingMeal: 'Avocado Toast Supreme',
    avgOrderValue: 485
  },
  'store-3': {
    totalOrders: 134,
    dailySales: 18200,
    topSellingMeal: 'Mediterranean Bowl',
    avgOrderValue: 720
  }
};