import { useState } from 'react';

export default function ManageCustomers() {
  const [activeTab, setActiveTab] = useState('All');

  const customers = [
    { id: 1, name: 'Mohammed Irfanul Islam', email: 'irfan@example.com', orders: 12, spent: '৳45,200', status: 'Active', type: 'Premium' },
    { id: 2, name: 'Tuhin Ahmed', email: 'tuhin@example.com', orders: 5, spent: '৳12,000', status: 'Active', type: 'Regular' },
    { id: 3, name: 'Sarah Khan', email: 'sarah@example.com', orders: 0, spent: '৳0', status: 'Blocked', type: 'Guest' },
    { id: 4, name: 'Corporate Buyer Ltd', email: 'procure@corp.com', orders: 45, spent: '৳8,50,000', status: 'Active', type: 'B2B' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">
      {/* 1. Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Customer Management</h1>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Monitor user activity and global CRM logs</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <input
               type="text"
               placeholder="Search by name or email..."
               className="flex-1 md:w-64 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs focus:border-[#ff5722] outline-none"
             />
             <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition">Export CSV</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">

        {/* 2. Global Customer Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: '85.4K', icon: '👥', color: 'text-blue-600' },
            { label: 'New Today', value: '+142', icon: '✨', color: 'text-[#ff5722]' },
            { label: 'Active Sessions', value: '1.2K', icon: '📡', color: 'text-green-600' },
            { label: 'Blocked Users', value: '24', icon: '🚫', color: 'text-red-500' },
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
          {['All Users', 'B2B Buyers', 'Premium Members', 'New Registrations', 'Flagged'].map((tab) => (
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

        {/* 4. Customer Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="py-5 px-8">User Profile</th>
                  <th className="py-5 px-8">Member Type</th>
                  <th className="py-5 px-8">Total Orders</th>
                  <th className="py-5 px-8">Lifetime Spend</th>
                  <th className="py-5 px-8">Status</th>
                  <th className="py-5 px-8 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {customers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition group">
                    <td className="py-5 px-8">
                       <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center text-[10px] font-black uppercase">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-800">{user.name}</p>
                            <p className="text-[10px] text-gray-400 font-medium">{user.email}</p>
                          </div>
                       </div>
                    </td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
                         user.type === 'B2B' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                         user.type === 'Premium' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' : 'bg-gray-100 text-gray-600'
                       }`}>
                         {user.type}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-xs font-bold text-gray-700">{user.orders} Orders</td>
                    <td className="py-5 px-8 text-xs font-black text-gray-900">{user.spent}</td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase ${
                         user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                       }`}>
                         {user.status}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-right">
                       <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="bg-gray-100 text-gray-700 p-2 rounded-lg text-[10px] hover:bg-gray-200 transition font-bold">Details</button>
                          <button className="bg-white border border-gray-200 text-red-500 p-2 rounded-lg text-[10px] hover:bg-red-50 transition font-bold">Block</button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Support & Loyalty (Bottom Section) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-2 bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Loyalty Program Manager</h4>
              <p className="text-xs font-medium leading-relaxed mb-6 max-w-md">
                Adjust point multipliers for high-value B2B customers. Current global rate: <span className="text-[#ff5722] font-bold">1 Point = ৳1.00</span>
              </p>
              <div className="flex gap-3">
                 <button className="bg-white text-gray-900 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest">Update Global Rate</button>
                 <button className="bg-white/10 border border-white/20 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest">View VIP List</button>
              </div>
           </div>

           <div className="bg-[#ff5722] rounded-[2.5rem] p-8 text-white shadow-xl shadow-orange-900/10 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">Report Hub</h4>
                <p className="text-[10px] opacity-80 leading-relaxed font-medium">Export monthly user behavior reports and churn analysis for the marketing team.</p>
              </div>
              <button className="mt-6 w-full bg-white text-[#ff5722] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg transition">Generate Report</button>
           </div>
        </div>
      </div>
    </div>
  );
}
