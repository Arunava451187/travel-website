
import { Trip, Booking, BlogPost, User, UserRole } from '../types';
import { MOCK_TRIPS, MOCK_BLOGS } from '../constants';

const KEYS = {
  TRIPS: 'dt_trips',
  BOOKINGS: 'dt_bookings',
  BLOGS: 'dt_blogs',
  USER: 'dt_user'
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const storageService = {
  // Initialization
  init: () => {
    if (!localStorage.getItem(KEYS.TRIPS)) {
      localStorage.setItem(KEYS.TRIPS, JSON.stringify(MOCK_TRIPS));
    }
    if (!localStorage.getItem(KEYS.BOOKINGS)) {
      localStorage.setItem(KEYS.BOOKINGS, JSON.stringify([]));
    }
    if (!localStorage.getItem(KEYS.BLOGS)) {
      localStorage.setItem(KEYS.BLOGS, JSON.stringify(MOCK_BLOGS));
    }
  },

  // Trips API
  getTrips: async (): Promise<Trip[]> => {
    await delay(500);
    return JSON.parse(localStorage.getItem(KEYS.TRIPS) || '[]');
  },

  updateTrip: async (updatedTrip: Trip) => {
    const trips = await storageService.getTrips();
    const index = trips.findIndex(t => t.id === updatedTrip.id);
    if (index !== -1) {
      trips[index] = updatedTrip;
      localStorage.setItem(KEYS.TRIPS, JSON.stringify(trips));
    }
    return updatedTrip;
  },

  // Bookings API
  getBookings: async (): Promise<Booking[]> => {
    await delay(400);
    return JSON.parse(localStorage.getItem(KEYS.BOOKINGS) || '[]');
  },

  createBooking: async (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    await delay(800);
    const bookings = await storageService.getBookings();
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };
    bookings.push(newBooking);
    localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(bookings));
    return newBooking;
  },

  updateBookingStatus: async (id: string, status: Booking['status']) => {
    const bookings = await storageService.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index].status = status;
      localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(bookings));
    }
  }
};
