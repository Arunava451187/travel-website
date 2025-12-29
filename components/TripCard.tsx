
import React from 'react';
import { Star, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Trip } from '../types';

interface TripCardProps {
  trip: Trip;
  onClick: (tripId: string) => void;
}

const TripCard: React.FC<TripCardProps> = ({ trip, onClick }) => {
  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello! I'm interested in the ${trip.title} tour to ${trip.destination} for ₹${trip.price}. Please provide more details.`;
    window.open(`https://wa.me/918597504298?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col h-full"
      onClick={handleDetailsClick}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200';
          }}
        />
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-slate-900 shadow-xl uppercase tracking-widest">
          {trip.category}
        </div>
        <div className="absolute bottom-6 right-6 bg-indigo-600 text-white px-5 py-2 rounded-2xl text-lg font-black shadow-2xl">
          ₹{trip.price}
        </div>
        {trip.price <= 3000 && (
          <div className="absolute top-6 right-6 bg-rose-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black shadow-xl uppercase tracking-widest animate-pulse">
            Upcoming Tour
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-indigo-500" />
            {trip.destination}
          </div>
          <div className="flex items-center text-amber-500 font-bold text-sm bg-amber-50 px-2 py-0.5 rounded-lg">
            <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
            {trip.rating}
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
          {trip.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
          {trip.description}
        </p>
        
        <div className="mt-auto space-y-6">
          <div className="flex items-center text-slate-400 text-xs font-bold pt-6 border-t border-slate-50">
            <Clock className="w-3.5 h-3.5 mr-2 text-indigo-400" />
            {trip.duration}
          </div>
          
          <button 
            onClick={handleDetailsClick}
            className="w-full bg-slate-900 group-hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all transform active:scale-95 shadow-xl hover:shadow-emerald-200"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
