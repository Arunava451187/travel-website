
import { Trip, BlogPost } from './types';

export const MOCK_TRIPS: Trip[] = [
  {
    id: 'digha-1',
    title: 'Digha Coastal Escape',
    destination: 'Digha, West Bengal',
    price: 3000,
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1200&auto=format&fit=crop',
    description: 'Special offer for family & friends. Experience the vibrant Digha promenade and serene sea views. Perfect for a quick weekend getaway.',
    category: 'Relaxation',
    rating: 4.5,
    featured: true
  },
  {
    id: 'puri-1',
    title: 'Divine Puri Heritage',
    destination: 'Puri, Odisha',
    price: 4000,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1590732158863-79860b0b3057?q=80&w=1200&auto=format&fit=crop',
    description: 'Special offer for family & friends. A spiritual journey to the Jagannath Temple combined with the golden sands of Puri beach.',
    category: 'Culture',
    rating: 4.8,
    featured: true
  },
  {
    id: 'darjeeling-1',
    title: 'Darjeeling Misty Hills',
    destination: 'Darjeeling, West Bengal',
    price: 4000,
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1626697556651-67eba080911e?q=80&w=1200&auto=format&fit=crop',
    description: 'Special offer for family & friends. Tea gardens, toy trains, and the majestic Kanchenjunga views from Tiger Hill.',
    category: 'Luxury',
    rating: 4.9,
    featured: true
  },
  {
    id: 'mandarmani-1',
    title: 'Mandarmani Beachfront',
    destination: 'Mandarmani, West Bengal',
    price: 2500,
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    description: 'Special offer for family & friends. Drive onto the longest beach in India and enjoy high-end resort living with fresh seafood.',
    category: 'Relaxation',
    rating: 4.7,
    featured: true
  },
  {
    id: 'purulia-1',
    title: 'Purulia Tribal Trails',
    destination: 'Purulia, West Bengal',
    price: 2000,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1623150534241-119102283030?q=80&w=1200&auto=format&fit=crop',
    description: 'Special offer for family & friends. Discover the rugged beauty of Ajodhya Hills and the vibrant culture of the tribal heartlands.',
    category: 'Adventure',
    rating: 4.6,
    featured: false
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Family Retreats in the East',
    excerpt: 'Planning your next big family outing? Here is why Eastern India is perfect.',
    content: 'Family and friends discounts are available for all our hubs.',
    author: 'DreamTrips Team',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200'
  }
];
