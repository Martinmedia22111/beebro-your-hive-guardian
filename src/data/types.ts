export type FamilyStatus = 'available' | 'almost_taken' | 'taken';

export interface BeeFamily {
  id: string;
  number: number;
  name: string;
  image: string;
  status: FamilyStatus;
  description: string;
  character: string;
  strength: number; // 1-5
  season: string;
  price: number;
  progress: number; // 0-100
  features: string[];
  story: string;
  updates: SeasonUpdate[];
}

export interface SeasonUpdate {
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'photo' | 'video' | 'alert';
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  isGift?: boolean;
}

export interface Order {
  id: string;
  familyId: string;
  planId: string;
  status: 'pending' | 'paid' | 'active' | 'completed';
  date: string;
  isGift: boolean;
  giftRecipient?: string;
  giftMessage?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: Order[];
}
