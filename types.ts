
export interface Trip {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  category: 'Adventure' | 'Luxury' | 'Relaxation' | 'Culture';
  rating: number;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

// Fix: Added UserRole to match imports in storageService.ts
export type UserRole = 'Admin' | 'User';

// Fix: Added User interface to match imports in storageService.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Fix: Added Booking interface to resolve errors in AdminDashboard.tsx and storageService.ts
export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  guests: number;
  date: string;
  totalPrice: number;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}
