import { useState } from 'react';

export default function AdsManager() {
  const [activeTab, setActiveTab] = useState('Campaigns');

  const stats = [
    { label: 'Total Spent', value: '৳12,450', icon: '💸' },
    { label: 'Impressions', value: '45.2K', icon: '👁️' },
    { label: 'Clicks', value: '3,120', icon: '🖱️' },
    { label: 'ROI (Revenue)', value: '৳85,000', icon: '📈' },
  ];

  const campaigns = [
    { id: 1, name: 'Flash Sale Boost - Headphones', status: 'Active', budget: '৳2,000', spent: '৳850', type: 'Product Boost' },
    { id: 2, name: 'Wholesale Awareness May', status: 'Paused', budget: '৳5,000', spent: '৳1,200', type: 'Banner Ad' },
    { id: 3, name: 'Grocery Essentials Promo', status: 'Completed', budget: '৳1,500', spent: '৳1,500', type: 'Search Ad' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Ads Manager</h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Boost your products and store visibility on UDDOM</p>
            </div>
            <button className="bg-[#ff5722] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-[#e64a19] transition flex items-center justify-center gap-2">
              <span>+</span> Create New Campaign
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-lg md:text-2xl font-black text-gray-800 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* 3. Campaign Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            {['Campaigns', 'Ad Creative', 'Analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-xs md:text-sm font-bold transition-all ${activeTab === tab ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-400'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 md:p-6">
            {/* Campaign Table (Responsive) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-wider border-b border-gray-50">
                    <th className="pb-4 px-2">Campaign Name</th>
                    <th className="pb-4 px-2">Status</th>
                    <th className="pb-4 px-2">Type</th>
                    <th className="pb-4 px-2">Budget</th>
                    <th className="pb-4 px-2">Spent</th>
                    <th className="pb-4 px-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {campaigns.map((camp) => (
                    <tr key={camp.id} className="hover:bg-gray-50 transition group">
                      <td className="py-4 px-2">
                        <p className="text-xs md:text-sm font-bold text-gray-800">{camp.name}</p>
                        <p className="text-[10px] text-gray-400">ID: #CAM-00{camp.id}</p>
                      </td>
                      <td className="py-4 px-2">
                        <span className={`text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-full ${camp.status === 'Active' ? 'bg-green-100 text-green-700' :
                            camp.status === 'Paused' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                          {camp.status}
                        </span>
                      </td>
                      <td className="py-4 px-2 text-[10px] md:text-xs text-gray-600 font-medium">
                        {camp.type}
                      </td>
                      <td className="py-4 px-2 text-xs md:text-sm font-bold text-gray-800">{camp.budget}</td>
                      <td className="py-4 px-2 text-xs md:text-sm text-gray-500">{camp.spent}</td>
                      <td className="py-4 px-2 text-right">
                        <button className="text-gray-400 hover:text-gray-900 font-bold text-lg">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. Help Section for Sellers */}
        <div className="mt-8 bg-gray-900 rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Grow Your Sales with UDDOM Ads</h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-lg mb-6">
              Promoted products receive 3x more clicks and 2x more wholesale inquiries. Set your budget and only pay when customers click.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition">
                View Tutorials
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-white/20 transition">
                Talk to Ad Expert
              </button>
            </div>
          </div>
          {/* Background Graphic */}
          <div className="absolute top-0 right-0 w-64 h-full bg-[#ff5722] opacity-10 skew-x-12 translate-x-10"></div>
        </div>
      </div>
    </div>
  );
}
