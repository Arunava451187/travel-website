
import React, { useState } from 'react';
import { MOCK_TRIPS, MOCK_BLOGS } from './constants';
import Layout from './components/Layout';
import TripCard from './components/TripCard';
import AIChatAssistant from './components/AIChatAssistant';
import { ChevronRight, ArrowRight, ShieldCheck, Star, Mail, Globe, Zap, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleWhatsApp = (tripName?: string) => {
    const message = tripName 
      ? `Hello! I'm interested in the ${tripName} tour. Please provide more details.`
      : "Hello! I'm interested in booking a trip with DreamTrips. I saw your special offers for family & friends.";
    window.open(`https://wa.me/918597504298?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:birbhumboy28@gmail.com?subject=Travel Inquiry";
  };

  const renderHome = () => (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582239023422-5264b360b0e5?q=80&w=2400&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Darjeeling Hills"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center md:text-left">
          <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-indigo-600/30 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white text-[10px] font-black mb-8 uppercase tracking-[0.3em]">
              <Zap className="w-3 h-3 text-indigo-300" />
              <span>Special offer for family & friends</span>
            </div>
            <h1 className="text-6xl md:text-8xl text-white font-serif font-bold leading-tight mb-8 drop-shadow-2xl">
              Curating the <br /><span className="text-indigo-300 italic">East</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-12 leading-relaxed font-semibold max-w-2xl drop-shadow-md">
              The specialists in Digha, Puri, Mandarmani, Darjeeling, and Purulia. 
              <br /><span className="text-emerald-300">Upcoming: Digha Tour @ ₹3000 Only!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <button 
                onClick={() => setCurrentPage('trips')}
                className="bg-white text-indigo-900 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                <span>Explore Hubs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleWhatsApp()}
                className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold hover:bg-emerald-700 transition-all flex items-center justify-center space-x-3 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-rose-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest animate-bounce">Upcoming Event</div>
          </div>
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden h-72 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1200" className="w-full h-full object-cover" alt="Digha Beach" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Next Scheduled Departure</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Digha Mega Escape</h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">Join our next coastal group tour. Perfect for friends and families looking for a seamless, budget-friendly beach weekend.</p>
            <div className="flex items-center space-x-4">
               <span className="text-4xl font-black text-white">₹3000</span>
               <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">All Inclusive</span>
            </div>
            <button 
              onClick={() => handleWhatsApp('Upcoming Digha Tour')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center space-x-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Inquire Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">The Collection</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Iconic Hubs</h3>
            <p className="text-slate-500 mt-4 font-bold text-lg">Family & Friends Special Offer on every destination below.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('trips')}
            className="group flex items-center text-slate-900 hover:text-indigo-600 font-bold text-lg transition-colors border-b-2 border-slate-900 hover:border-indigo-600 pb-1"
          >
            All Destinations
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MOCK_TRIPS.filter(t => t.featured).map(trip => (
            <TripCard key={trip.id} trip={trip} onClick={() => handleWhatsApp(trip.title)} />
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
        <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-32 flex flex-col md:flex-row items-center justify-between text-white shadow-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Globe className="w-full h-full transform scale-125" />
          </div>
          <div className="relative z-10 max-w-2xl text-center md:text-left space-y-8">
            <h3 className="text-4xl md:text-7xl font-serif font-bold leading-tight">Ready to begin <br />your trip?</h3>
            <p className="text-xl text-indigo-100 font-medium">Contact birbhumboy28@gmail.com or hit us up on WhatsApp for the best regional rates.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <button 
                onClick={() => handleWhatsApp()}
                className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center space-x-3 shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Details</span>
              </button>
              <button 
                onClick={handleEmail}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center space-x-3"
              >
                <Mail className="w-6 h-6" />
                <span>Email Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderTrips = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <div className="mb-20 text-center md:text-left max-w-3xl">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">Complete Directory</h2>
        <h3 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6">Eastern India Hubs</h3>
        <p className="text-xl text-slate-600 font-medium leading-relaxed">
          Puri, Darjeeling, Mandarmani, Purulia, and Digha. Specialized curation with family offers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MOCK_TRIPS.map(trip => (
          <TripCard key={trip.id} trip={trip} onClick={() => handleWhatsApp(trip.title)} />
        ))}
      </div>
    </div>
  );

  const renderBlog = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <div className="mb-20 text-center">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-4">The Journal</h2>
        <h3 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8">Travel Insights</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {MOCK_BLOGS.map(blog => (
          <div key={blog.id} className="group cursor-pointer" onClick={() => handleWhatsApp('Blog Inquiry')}>
            <div className="h-[400px] sm:h-[500px] rounded-[3rem] overflow-hidden mb-10 shadow-xl">
              <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={blog.title} />
            </div>
            <div className="flex items-center space-x-6 text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-6">
              <span>{blog.date}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
              <span>{blog.author}</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{blog.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentPage) {
      case 'trips': return renderTrips();
      case 'blog': return renderBlog();
      default: return renderHome();
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      {renderContent()}
      <AIChatAssistant />
    </Layout>
  );
};

export default App;
