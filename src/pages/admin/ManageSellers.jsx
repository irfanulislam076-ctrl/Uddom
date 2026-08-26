import { useState } from 'react';

export default function ManageSellers() {
  const [activeTab, setActiveTab] = useState('Pending');

  const merchants = [
    { id: 1, name: "Irfan's Tech Solutions", owner: "Irfanul Islam", type: 'Wholesaler', joiningDate: '15 Dec 2025', status: 'Active', revenue: '৳12.4L' },
    { id: 2, name: "Dhaka Garments Ltd", owner: "Abir Hossain", type: 'Manufacturer', joiningDate: '20 April 2026', status: 'Pending', revenue: '৳0' },
    { id: 3, name: "City Electronics", owner: "Tanvir Ahmed", type: 'Retailer', joiningDate: '10 Jan 2026', status: 'Suspended', revenue: '৳2.1L' },
    { id: 4, name: "Organic Valley", owner: "Sadia Afrin", type: 'Distributor', joiningDate: '05 March 2026', status: 'Active', revenue: '৳5.8L' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">
      {/* 1. Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Merchant Control Center</h1>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Verify and manage platform sellers & manufacturers</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <input
               type="text"
               placeholder="Search by store name..."
               className="flex-1 md:w-64 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs focus:border-[#ff5722] outline-none"
             />
             <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition">Audit Log</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">

        {/* 2. Merchant KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Sellers', value: '1,240', icon: '🏪', color: 'text-blue-600' },
            { label: 'Pending KYC', value: '12', icon: '📝', color: 'text-[#ff5722]' },
            { label: 'Top Performers', value: '45', icon: '🏆', color: 'text-green-600' },
            { label: 'Flagged Stores', value: '04', icon: '🚩', color: 'text-red-500' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-xl mb-3">{stat.icon}</div>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className={`text-xl md:text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* 3. Filter Tabs */}
        <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
          {['All Sellers', 'Pending', 'Verified', 'Manufacturers', 'Suspended'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs font-black uppercase tracking-widest transition whitespace-nowrap border-b-2 ${
                activeTab === tab ? 'text-[#ff5722] border-[#ff5722]' : 'text-gray-400 border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4. Merchant Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="py-5 px-8">Merchant & Owner</th>
                  <th className="py-5 px-8">Type</th>
                  <th className="py-5 px-8">Total Revenue</th>
                  <th className="py-5 px-8">Joining Date</th>
                  <th className="py-5 px-8">Status</th>
                  <th className="py-5 px-8 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {merchants.map((seller) => (
                  <tr key={seller.id} className="hover:bg-gray-50/50 transition group">
                    <td className="py-5 px-8">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#ff5722]/10 text-[#ff5722] rounded-xl flex items-center justify-center text-xs font-black uppercase">
                            {seller.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-800">{seller.name}</p>
                            <p className="text-[10px] text-gray-400 font-medium">Owner: {seller.owner}</p>
                          </div>
                       </div>
                    </td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-md uppercase border ${
                         seller.type === 'Manufacturer' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-100 text-gray-600 border-transparent'
                       }`}>
                         {seller.type}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-xs font-black text-gray-900">{seller.revenue}</td>
                    <td className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase">{seller.joiningDate}</td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase ${
                         seller.status === 'Active' ? 'bg-green-100 text-green-700' :
                         seller.status === 'Pending' ? 'bg-orange-100 text-orange-700 animate-pulse' : 'bg-red-100 text-red-700'
                       }`}>
                         {seller.status}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-right">
                       <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black transition">Review KYC</button>
                          <button className="bg-white border border-gray-200 text-gray-400 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:text-red-500 transition">Action</button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Verification & Support Widgets (Bottom) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-6">KYC Verification Logic</h4>
                <p className="text-xs font-medium leading-relaxed mb-6 max-w-sm">
                  Automatic verification is currently <span className="text-green-400 font-bold">Enabled</span> for sellers with a valid Trade License and BIN number.
                </p>
                <button className="bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition">Modify Rules</button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#ff5722]/10 rounded-full blur-[60px]"></div>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-900/5">
              <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
                Seller Support Tickets
              </h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-gray-400 italic">"Payout not received for #ORD-991"</span>
                    <span className="text-orange-500">Urgent</span>
                 </div>
                 <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-gray-400 italic">"How to add bulk wholesale pricing?"</span>
                    <span className="text-gray-400">Low</span>
                 </div>
                 <button className="w-full mt-4 bg-gray-50 text-gray-900 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition">Access Support Desk</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
