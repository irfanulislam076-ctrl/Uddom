import { useState } from 'react';

export default function Finance() {
  const [activeTab, setActiveTab] = useState('Payouts');

  const stats = [
    { label: 'Total Earnings', value: '৳2,45,600', icon: '💰', trend: '+12% this month' },
    { label: 'Pending Balance', value: '৳35,400', icon: '🕒', trend: 'Processing' },
    { label: 'Available to Withdraw', value: '৳18,200', icon: '🏧', trend: 'Ready' },
    { label: 'Total Withdrawn', value: '৳1,92,000', icon: '🧾', trend: 'Last: 20 April' },
  ];

  const transactions = [
    { id: 'TX-5501', date: '26 April 2026', order: 'UDY-98210', amount: '৳3,200', type: 'Sale Release', status: 'Completed' },
    { id: 'TX-5500', date: '25 April 2026', order: 'UDY-98105', amount: '৳12,500', type: 'Wholesale Set.', status: 'Processing' },
    { id: 'TX-5490', date: '22 April 2026', order: 'WDR-1102', amount: '৳15,000', type: 'Withdrawal', status: 'Success' },
    { id: 'TX-5488', date: '20 April 2026', order: 'UDY-97500', amount: '৳1,150', type: 'Sale Release', status: 'Completed' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Finance & Payouts</h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Manage your earnings, bank transfers and taxes</p>
            </div>
            <button className="bg-green-600 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-green-700 transition flex items-center justify-center gap-2">
              <span>🏧</span> Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Finance Summary Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-xl mb-2">{stat.icon}</div>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-lg md:text-2xl font-black text-gray-800 mt-1">{stat.value}</h3>
              <p className={`text-[9px] md:text-[10px] mt-2 font-bold ${idx === 1 ? 'text-orange-500' : 'text-green-500'}`}>
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* 3. Transaction History (Left Column) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                {['Payouts', 'Statements', 'Tax Invoices'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-xs md:text-sm font-bold transition-all ${
                      activeTab === tab ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-4 md:p-6 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-wider border-b border-gray-50">
                      <th className="pb-4 px-2">Date & ID</th>
                      <th className="pb-4 px-2">Type / Order</th>
                      <th className="pb-4 px-2">Amount</th>
                      <th className="pb-4 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50 transition group">
                        <td className="py-4 px-2">
                          <p className="text-xs md:text-sm font-bold text-gray-800">{tx.date}</p>
                          <p className="text-[9px] text-gray-400">{tx.id}</p>
                        </td>
                        <td className="py-4 px-2">
                          <p className="text-[10px] md:text-xs text-gray-600 font-bold">{tx.type}</p>
                          <p className="text-[9px] text-[#ff5722] font-medium">{tx.order}</p>
                        </td>
                        <td className="py-4 px-2 text-xs md:text-sm font-black text-gray-800">{tx.amount}</td>
                        <td className="py-4 px-2">
                          <span className={`text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            tx.status === 'Completed' || tx.status === 'Success'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-orange-50 text-orange-700'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4. Bank Account & Support (Right Column) */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm md:text-base font-bold text-gray-800 mb-4 flex justify-between items-center">
                Default Bank Account
                <button className="text-[#ff5722] text-[10px] font-bold hover:underline">Edit</button>
              </h3>
              <div className="bg-gray-900 text-white rounded-xl p-5 relative overflow-hidden">
                <p className="text-[10px] opacity-60 uppercase font-black tracking-widest mb-4">Payout Method</p>
                <div className="flex justify-between items-start mb-6">
                   <div>
                     <p className="text-lg font-bold">Irfanul Islam</p>
                     <p className="text-xs opacity-80 mt-1">Dutch-Bangla Bank PLC</p>
                   </div>
                   <span className="text-2xl">🏦</span>
                </div>
                <p className="text-xs font-medium tracking-widest">**** **** 4567</p>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full"></div>
              </div>
            </div>

            {/* Billing Support Ad */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 relative">
               <h4 className="text-sm font-bold text-orange-900 mb-2">Billing Issue?</h4>
               <p className="text-xs text-orange-700 mb-4">Facing delays in your payout? Contact our 24/7 Seller Finance team.</p>
               <button className="w-full bg-white text-orange-900 py-2 rounded-lg text-xs font-bold border border-orange-200 shadow-sm hover:bg-orange-100 transition">
                 Create Ticket
               </button>
               <div className="absolute top-1 right-2 text-[7px] text-orange-300">Sponsored</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
