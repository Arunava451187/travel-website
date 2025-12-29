
import { Trip, BlogPost } from './types';

export const MOCK_TRIPS: Trip[] = [
  {
    id: 'darjeeling-1',
    title: 'Queen of the Hills Retreat',
    destination: 'Darjeeling, West Bengal',
    price: 4000,
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1626697556651-67eba080911e?q=80&w=1200&auto=format&fit=crop',
    description: 'Wake up to the majestic Kanchenjunga. Includes private tea garden tours, toy train heritage rides, and colonial-style luxury stays. Special offer for family & friends.',
    category: 'Luxury',
    rating: 4.9,
    featured: true
  },
  {
    id: 'puri-1',
    title: 'Divine Puri Pilgrimage & Beach',
    destination: 'Puri, Odisha',
    price: 4000,
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1590732158863-79860b0b3057?q=80&w=1200&auto=format&fit=crop',
    description: 'Experience the spiritual aura of Jagannath Temple combined with the serenity of the Golden Beach. Premium sea-facing resorts. Special offer for family & friends.',
    category: 'Culture',
    rating: 4.8,
    featured: true
  },
  {
    id: 'mandarmani-1',
    title: 'Mandarmani Drive-in Luxury',
    destination: 'Mandarmani, West Bengal',
    price: 2500,
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop',
    description: 'Absolute tranquility on the longest drive-in beach in India. Private beach access, infinity pools, and fresh coastal delicacies. Special offer for family & friends.',
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
    description: 'Explore the rugged beauty of Ajodhya Hills. Witness authentic Chau dance, tribal art, and the vibrant Palash blossoms in spring. Special offer for family & friends.',
    category: 'Adventure',
    rating: 4.6,
    featured: false
  },
  {
    id: 'digha-1',
    title: 'Digha Weekend Escape',
    destination: 'Digha, West Bengal',
    price: 3000,
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1200&auto=format&fit=crop',
    description: 'The classic coastal getaway. Experience the new Digha promenade, marine aquarium tours, and luxury stay by the Bay of Bengal. Special offer for family & friends.',
    category: 'Relaxation',
    rating: 4.5,
    featured: true
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Best Breakfast Spots in Darjeeling',
    excerpt: 'From Keventers to Glenarys, we rank the iconic bakeries...',
    content: 'Full content of the blog post about Darjeeling breakfast goes here.',
    author: 'Ananya S.',
    date: '2024-04-01',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Why Purulia is the next big thing',
    excerpt: 'Beyond the rugged hills lies a cultural treasure waiting to be found...',
    content: 'Full content of the blog post about Purulia goes here.',
    author: 'Rahul D.',
    date: '2024-03-28',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=600&auto=format&fit=crop'
  }
];
