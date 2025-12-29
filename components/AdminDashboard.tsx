
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { Users, CreditCard, Calendar, TrendingUp, Package, MessageSquare, Check, X, Edit, Trash2 } from 'lucide-react';
import { Trip, Booking } from '../types';
import { storageService } from '../services/storageService';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'trips'>('overview');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [t, b] = await Promise.all([
      storageService.getTrips(),
      storageService.getBookings()
    ]);
    setTrips(t);
    setBookings(b);
    setLoading(false);
  };

  const handleStatusUpdate = async (id: string, status: Booking['status']) => {
    await storageService.updateBookingStatus(id, status);
    loadData();
  };

  const totalRevenue = bookings
    .filter(b => b.status === 'Confirmed')
    .reduce((sum, b) => sum + b.totalPrice, 0);

  const chartData = [
    { name: 'Digha', val: bookings.filter(b => b.tripId.includes('digha')).length },
    { name: 'Puri', val: bookings.filter(b => b.tripId.includes('puri')).length },
    { name: 'Mandrmni', val: bookings.filter(b => b.tripId.includes('mandarmani')).length },
    { name: 'Darjlg', val: bookings.filter(b => b.tripId.includes('darjeeling')).length },
    { name: 'Purulia', val: bookings.filter(b => b.tripId.includes('purulia')).length },
  ];

  if (loading) return (
    <div className="flex items-center justify-center h-96">
      <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Management Suite</h2>
          <p className="text-slate-500 text-sm">Control center for Eastern India operations.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100">
          {(['overview', 'bookings', 'trips'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Confirmed Revenue', value: `₹${totalRevenue.toLocaleString()}`, change: '+12%', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { label: 'Total Requests', value: bookings.length, change: '+5%', icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-100' },
              { label: 'Regional Partners', value: '24', change: 'Stable', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
              { label: 'Avg Booking', value: `₹${bookings.length ? Math.round(totalRevenue/bookings.length) : 0}`, change: '+2%', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-100' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-400 text-xs font-bold uppercase">{stat.change}</span>
                </div>
                <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6">Booking Popularity by Destination</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Bar dataKey="val" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {bookings.slice(0, 5).map(b => (
                  <div key={b.id} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-slate-900">New request for {trips.find(t=>t.id===b.tripId)?.destination}</p>
                      <p className="text-xs text-slate-500">{new Date(b.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                      b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer/Trip</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Guests</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Total</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {bookings.length === 0 ? (
                <tr><td colSpan={6} className="p-12 text-center text-slate-400">No bookings found in database.</td></tr>
              ) : bookings.map(b => (
                <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900">{b.userId}</div>
                    <div className="text-xs text-slate-500">{trips.find(t=>t.id===b.tripId)?.title}</div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{b.guests} Persons</td>
                  <td className="p-4 text-sm text-slate-600">{b.date}</td>
                  <td className="p-4 text-sm font-bold text-indigo-600">₹{b.totalPrice}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 
                      b.status === 'Cancelled' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleStatusUpdate(b.id, 'Confirmed')}
                        className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Confirm Booking"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(b.id, 'Cancelled')}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Cancel Booking"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'trips' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map(trip => (
            <div key={trip.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group">
              <img src={trip.image} className="w-full h-32 object-cover rounded-xl mb-4" />
              <h4 className="font-bold text-slate-900">{trip.title}</h4>
              <p className="text-xs text-slate-500 mb-4">{trip.destination}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="font-bold text-indigo-600">₹{trip.price}</span>
                <div className="flex space-x-2">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 rounded-lg transition-all">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="h-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-indigo-400 hover:text-indigo-600 transition-all">
            <Package className="w-8 h-8 mb-2" />
            <span className="font-bold">Add New Hub</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
