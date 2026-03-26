import { createContext, useContext, useState, ReactNode } from 'react';
import { BeeFamily } from '@/data/types';
import { families as initialFamilies } from '@/data/families';

export const TELEGRAM_BOT_URL = 'https://t.me/BeeBro2026_bot';

interface AppState {
  families: BeeFamily[];
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [families] = useState<BeeFamily[]>(initialFamilies);

  return (
    <AppContext.Provider value={{ families }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
