import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Platform GMV', value: '৳45,20,500', trend: '+22%', icon: '📈' },
    { label: 'Active Sellers', value: '1,240', trend: '+12 New', icon: '🏪' },
    { label: 'Total Orders', value: '8,542', trend: '+1.5K', icon: '🛒' },
    { label: 'Pending Payouts', value: '৳1,85,000', trend: 'Urgent', icon: '💳' },
  ];

  const pendingApprovals = [
    { id: 1, name: 'Dhaka Wholesale Ltd', type: 'Manufacturer', date: '27 April 2026', status: 'Pending' },
    { id: 2, name: 'Apex Electronics', type: 'Retailer', date: '26 April 2026', status: 'In Review' },
    { id: 3, name: 'Global Garments', type: 'Wholesaler', date: '26 April 2026', status: 'Pending' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">

      {/* 1. Admin Top Header */}
      <div className="bg-gray-900 text-white shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter">UDDOM <span className="text-[#ff5722]">ADMIN</span></h1>
            <span className="hidden md:block bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest text-orange-400">V2.0 ALPHA</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-xs font-black">Mohammed Irfanul Islam</p>
              <p className="text-[10px] opacity-50 uppercase tracking-widest">Super Admin</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-tr from-[#ff5722] to-orange-400 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-500/20">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-6">

        {/* 2. Global KPIs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-white flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-default">
              <div className="text-2xl mb-4">{stat.icon}</div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-xl md:text-2xl font-black text-gray-900">{stat.value}</h3>
              </div>
              <p className={`text-[10px] mt-3 font-bold ${idx === 3 ? 'text-red-500' : 'text-green-500'}`}>
                {stat.trend} <span className="text-gray-400 font-medium">vs last month</span>
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 3. Central Analytics & Logs (Left Column) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Revenue Graph Placeholder */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xs font-black text-gray-800 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff5722] rounded-full animate-pulse"></span>
                  Platform Revenue Stream
                </h3>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  {['Daily', 'Weekly', 'Monthly'].map(t => (
                    <button key={t} className={`px-4 py-1.5 text-[10px] font-bold rounded-lg ${t === 'Monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="h-72 md:h-96 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-end justify-between px-10 gap-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="bg-[#ff5722] w-full" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-bold italic z-10">Real-time GMV Visualization Area</p>
                <p className="text-[10px] text-gray-300 mt-2 z-10 tracking-widest uppercase">Proprietary Algorithm Active</p>
              </div>
            </div>

            {/* Platform Recent Transactions */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xs font-black text-gray-800 uppercase tracking-widest">Global Transaction Log</h3>
                <button className="text-[10px] font-bold text-[#ff5722] hover:underline">View Ledger</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <tr>
                      <th className="py-4 px-8">Transaction ID</th>
                      <th className="py-4 px-8">Merchant</th>
                      <th className="py-4 px-8">Value</th>
                      <th className="py-4 px-8">Platform Fee</th>
                      <th className="py-4 px-8">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[1, 2, 3, 4].map((i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition">
                        <td className="py-5 px-8 text-xs font-mono font-bold text-gray-800">#TXN-9820{i}</td>
                        <td className="py-5 px-8">
                          <p className="text-xs font-bold text-gray-700">UDDOM Store #{i}</p>
                          <p className="text-[10px] text-gray-400 italic">Wholesale Batch</p>
                        </td>
                        <td className="py-5 px-8 text-xs font-black text-gray-900">৳12,500.00</td>
                        <td className="py-5 px-8 text-xs font-bold text-green-600">+৳1,250.00</td>
                        <td className="py-5 px-8">
                          <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">SETTLED</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4. Action Sidebar (Right Column) */}
          <div className="space-y-8">

            {/* Seller Approval Queue */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black text-gray-800 uppercase tracking-widest">Verification Hub</h3>
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black">{pendingApprovals.length} NEW</span>
              </div>
              <div className="space-y-4">
                {pendingApprovals.map((seller) => (
                  <div key={seller.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-orange-200 transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-black text-gray-800">{seller.name}</p>
                        <p className="text-[9px] text-gray-400 font-medium">{seller.type} • {seller.date}</p>
                      </div>
                      <span className="text-[8px] bg-white border border-gray-200 px-1.5 py-0.5 rounded font-black text-gray-400">PENDING</span>
                    </div>
                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex-1 bg-gray-900 text-white py-1.5 rounded-lg text-[10px] font-black hover:bg-black">Review</button>
                      <button className="flex-1 bg-white border border-gray-200 text-gray-400 py-1.5 rounded-lg text-[10px] font-black hover:text-red-500">Decline</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#ff5722] transition">See All Requests</button>
            </div>

            {/* System Monitor */}
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <h3 className="text-xs font-black opacity-30 uppercase tracking-[0.3em] mb-6">System Health</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-black">99.9<span className="text-green-400">%</span></p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Uptime Stable</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-400">45ms</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Latency</p>
                  </div>
                </div>
                <div className="bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-green-400 h-full w-[85%]"></div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] text-gray-400 italic">Database auto-syncing in 12 mins...</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-400 text-[8px] px-2 py-0.5 rounded border border-green-500/20 font-black">LIVE ENGINE</div>
            </div>

            {/* Platform Promotion Banner */}
            <div className="bg-gradient-to-br from-[#ff5722] to-orange-600 rounded-[2rem] p-6 text-white shadow-xl shadow-orange-500/20">
              <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">Global Ad Push</h4>
              <p className="text-xs opacity-80 leading-relaxed font-medium">Ready to boost Eid-ul-Adha campaign across all Wholesale Hubs?</p>
              <button className="mt-6 bg-white text-gray-900 w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition">
                Launch Campaign
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
