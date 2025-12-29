
import React, { useState } from 'react';
import { Compass, Menu, X, Mail, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Destinations', id: 'trips' },
    { label: 'Journal', id: 'blog' },
  ];

  const handleInquiry = () => {
    window.location.href = "mailto:birbhumboy28@gmail.com?subject=Travel Inquiry";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918597504298?text=Hello! I'm interested in booking a trip with DreamTrips.", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setPage('home')}>
              <Compass className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">DreamTrips</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`text-sm font-semibold transition-colors hover:text-indigo-600 ${
                    currentPage === item.id ? 'text-indigo-600' : 'text-slate-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-6 w-px bg-slate-200" />
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Details</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsApp}
              className="block w-full bg-emerald-600 text-white px-4 py-4 rounded-xl text-center font-bold"
            >
              WhatsApp Us
            </button>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 text-white mb-8">
                <Compass className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-serif font-bold">DreamTrips</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 font-medium">
                The East’s most exclusive travel collective. Specializing in Digha, Puri, Mandarmani, Darjeeling, and Purulia.
              </p>
              <div className="mt-6 flex flex-col space-y-2">
                <a href="mailto:birbhumboy28@gmail.com" className="text-indigo-400 font-bold hover:underline">birbhumboy28@gmail.com</a>
                <a href="https://wa.me/918597504298" className="text-emerald-400 font-bold hover:underline">+91 8597504298</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">The Collection</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => setPage('trips')} className="hover:text-indigo-400 transition-colors">Darjeeling Estates</button></li>
                <li><button onClick={() => setPage('trips')} className="hover:text-indigo-400 transition-colors">Puri Heritage</button></li>
                <li><button onClick={() => setPage('trips')} className="hover:text-indigo-400 transition-colors">Mandarmani Coast</button></li>
                <li><button onClick={() => setPage('trips')} className="hover:text-indigo-400 transition-colors">Purulia Wilderness</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Our Agency</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button className="hover:text-indigo-400 transition-colors">About Us</button></li>
                <li><button className="hover:text-indigo-400 transition-colors">The Journal</button></li>
                <li><button className="hover:text-indigo-400 transition-colors">Special Family Offers</button></li>
                <li><button className="hover:text-indigo-400 transition-colors">Upcoming Tours</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Stay Inspired</h4>
              <p className="text-sm text-slate-400 mb-6 font-medium">Curated travel stories delivered to your inbox.</p>
              <div className="flex bg-slate-900 rounded-2xl p-1 border border-slate-800 focus-within:border-indigo-500 transition-all">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-none px-4 py-3 text-sm w-full outline-none"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-semibold tracking-wider uppercase">
            <p>&copy; 2024 DreamTrips India. Curating the East. Managed by birbhumboy28@gmail.com</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <button className="hover:text-slate-300 transition-colors">Privacy</button>
              <button className="hover:text-slate-300 transition-colors">Terms</button>
              <button className="hover:text-slate-300 transition-colors">Legal</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
