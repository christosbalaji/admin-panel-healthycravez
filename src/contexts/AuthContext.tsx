import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  manager: string;
}

export interface StoreManager {
  id: string;
  email: string;
  password: string;
  name: string;
  storeId: string;
  store: Store;
}

interface AuthContextType {
  currentManager: StoreManager | null;
  currentStore: Store | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock store data
const mockStores: Store[] = [
  {
    id: 'store-1',
    name: 'Healthy Cravez Downtown',
    address: '123 Main St, Downtown',
    phone: '(555) 123-4567',
    email: 'downtown@healthycravez.com',
    manager: 'John Smith'
  },
  {
    id: 'store-2',
    name: 'Healthy Cravez Uptown',
    address: '456 Oak Ave, Uptown',
    phone: '(555) 987-6543',
    email: 'uptown@healthycravez.com',
    manager: 'Sarah Johnson'
  },
  {
    id: 'store-3',
    name: 'Healthy Cravez Mall',
    address: '789 Shopping Blvd, Mall',
    phone: '(555) 456-7890',
    email: 'mall@healthycravez.com',
    manager: 'Mike Davis'
  }
];

// Mock store managers
const mockManagers: StoreManager[] = [
  {
    id: 'manager-1',
    email: 'john@healthycravez.com',
    password: 'password123',
    name: 'John Smith',
    storeId: 'store-1',
    store: mockStores[0]
  },
  {
    id: 'manager-2',
    email: 'sarah@healthycravez.com',
    password: 'password123',
    name: 'Sarah Johnson',
    storeId: 'store-2',
    store: mockStores[1]
  },
  {
    id: 'manager-3',
    email: 'mike@healthycravez.com',
    password: 'password123',
    name: 'Mike Davis',
    storeId: 'store-3',
    store: mockStores[2]
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentManager, setCurrentManager] = useState<StoreManager | null>(null);
  const [currentStore, setCurrentStore] = useState<Store | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const savedManager = localStorage.getItem('storeManager');
    if (savedManager) {
      const manager = JSON.parse(savedManager);
      setCurrentManager(manager);
      setCurrentStore(manager.store);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const manager = mockManagers.find(m => m.email === email && m.password === password);
    
    if (manager) {
      setCurrentManager(manager);
      setCurrentStore(manager.store);
      localStorage.setItem('storeManager', JSON.stringify(manager));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setCurrentManager(null);
    setCurrentStore(null);
    localStorage.removeItem('storeManager');
  };

  const value = {
    currentManager,
    currentStore,
    login,
    logout,
    isAuthenticated: !!currentManager
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export mock data for use in components
export { mockStores, mockManagers };