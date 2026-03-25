import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Order, BeeFamily } from '@/data/types';
import { demoUser, families as initialFamilies } from '@/data/families';

interface AppState {
  user: User | null;
  families: BeeFamily[];
  isLoggedIn: boolean;
  cartFamily: BeeFamily | null;
  cartPlan: string | null;
  isGiftMode: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, phone: string, password: string) => boolean;
  setCartFamily: (f: BeeFamily | null) => void;
  setCartPlan: (p: string | null) => void;
  setGiftMode: (g: boolean) => void;
  placeOrder: (order: Omit<Order, 'id' | 'status' | 'date'>) => string;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [families] = useState<BeeFamily[]>(initialFamilies);
  const [cartFamily, setCartFamily] = useState<BeeFamily | null>(null);
  const [cartPlan, setCartPlan] = useState<string | null>(null);
  const [isGiftMode, setGiftMode] = useState(false);

  const login = (email: string, _password: string) => {
    if (email) {
      setUser(demoUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = (name: string, email: string, phone: string, _password: string) => {
    setUser({ id: 'new-user', name, email, phone, orders: [] });
    return true;
  };

  const placeOrder = (orderData: Omit<Order, 'id' | 'status' | 'date'>) => {
    const orderId = `order-${Date.now()}`;
    const newOrder: Order = {
      ...orderData,
      id: orderId,
      status: 'active',
      date: new Date().toISOString().split('T')[0],
    };
    if (user) {
      setUser({ ...user, orders: [...user.orders, newOrder] });
    }
    setCartFamily(null);
    setCartPlan(null);
    setGiftMode(false);
    return orderId;
  };

  return (
    <AppContext.Provider value={{
      user, families, isLoggedIn: !!user,
      cartFamily, cartPlan, isGiftMode,
      login, logout, register,
      setCartFamily, setCartPlan, setGiftMode,
      placeOrder,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
