import { useState } from 'react';

export default function ManageOrders() {
  const [activeTab, setActiveTab] = useState('All');

  const orders = [
    { id: 'UDY-10025', customer: 'Irfanul Islam', seller: 'Tech Solutions', date: '27 April 2026', total: '৳4,500', type: 'Retail', status: 'Pending' },
    { id: 'UDY-10022', customer: 'Trade In BD Corp', seller: 'Global Garments', date: '26 April 2026', total: '৳75,000', type: 'Wholesale', status: 'Processing' },
    { id: 'UDY-9985', customer: 'Sarah Ahmed', seller: 'Organic Valley', date: '25 April 2026', total: '৳1,200', type: 'Retail', status: 'Shipped' },
    { id: 'UDY-9950', customer: 'Modern Gadgets', seller: 'Apex Electronics', date: '24 April 2026', total: '৳1,20,000', type: 'Wholesale', status: 'Delivered' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Global Order Ledger</h1>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Monitor and audit all marketplace transactions</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Order ID..."
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs focus:border-[#ff5722] outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition shadow-lg">Filter</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">

        {/* 2. Global Order Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Orders', value: '2,450', icon: '🛒', color: 'text-blue-600' },
            { label: 'B2B Wholesale', value: '142', icon: '🏭', color: 'text-[#ff5722]' },
            { label: 'Disputed Orders', value: '05', icon: '⚠️', color: 'text-red-500' },
            { label: 'Completed (MTD)', value: '৳12.4L', icon: '✅', color: 'text-green-600' },
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
          {['All Orders', 'Retail', 'Wholesale', 'Pending', 'Processing', 'Disputed'].map((tab) => (
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

        {/* 4. Main Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="py-5 px-8">Order ID & Date</th>
                  <th className="py-5 px-8">Stakeholders</th>
                  <th className="py-5 px-8">Market Type</th>
                  <th className="py-5 px-8">Gross Total</th>
                  <th className="py-5 px-8">Status</th>
                  <th className="py-5 px-8 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition group">
                    <td className="py-5 px-8">
                      <p className="text-xs font-black text-gray-800">{order.id}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{order.date}</p>
                    </td>
                    <td className="py-5 px-8">
                       <p className="text-[11px] font-bold text-gray-700 leading-tight">👤 {order.customer}</p>
                       <p className="text-[11px] font-bold text-[#ff5722] mt-1 leading-tight">🏪 {order.seller}</p>
                    </td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase border ${
                         order.type === 'Wholesale' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                       }`}>
                         {order.type}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-xs font-black text-gray-900">{order.total}</td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase ${
                         order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                         order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                         order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                       }`}>
                         {order.status}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-right">
                       <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest">Audit</button>
                          <button className="bg-white border border-gray-200 text-red-500 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-red-50">Hold</button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Admin Dispute Management (Bottom Section) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-6">Dispute Resolution Center</h4>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 mb-4">
                   <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-xl animate-pulse">⚠️</div>
                   <div>
                      <p className="text-xs font-bold">New Dispute Filed</p>
                      <p className="text-[10px] text-gray-400">Order #UDY-9912 • Seller: Tech Galaxy</p>
                   </div>
                   <button className="ml-auto bg-white text-gray-900 px-4 py-1.5 rounded-lg text-[9px] font-black uppercase">Resolve</button>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 italic">Global resolution rate: 98.4% within 24h</p>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-gray-800 uppercase tracking-widest mb-4">Payout Integrity Check</h4>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  System is currently validating <span className="font-bold text-gray-800">৳2.4L</span> worth of completed orders for the next payout cycle. No anomalies detected.
                </p>
              </div>
              <div className="flex gap-3 mt-6">
                 <button className="flex-1 bg-green-50 text-green-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-100">Release Funds</button>
                 <button className="flex-1 bg-gray-50 text-gray-400 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">Manual Audit</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
