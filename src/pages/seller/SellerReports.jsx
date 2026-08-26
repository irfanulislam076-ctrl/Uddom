import { useState } from 'react';

export default function SellerReports() {
  const [dateRange, setDateRange] = useState('Last 30 Days');

  const reportStats = [
    { label: 'Net Revenue', value: '৳4,52,000', growth: '+18.5%', desc: 'After commissions' },
    { label: 'Total Orders', value: '852', growth: '+5.2%', desc: 'Retail & Wholesale' },
    { label: 'Avg. Order Value', value: '৳530', growth: '-2.1%', desc: 'Per checkout' },
    { label: 'Conversion Rate', value: '3.8%', growth: '+1.2%', desc: 'Visitor to Buyer' },
  ];

  const topProducts = [
    { id: 1, name: 'Premium Wireless Mouse G-Pro', sales: 245, revenue: '৳3,67,500' },
    { id: 2, name: 'Mechanical Keyboard K85', sales: 112, revenue: '৳3,58,400' },
    { id: 3, name: 'Cotton Polo T-Shirt (Bulk)', sales: 15, revenue: '৳2,25,000' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Header & Date Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Business Reports</h1>
            <p className="text-[10px] md:text-sm text-gray-500 font-medium">Deep dive into your store's sales and growth metrics</p>
          </div>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            {['7D', '30D', '3M', '1Y'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 text-[10px] md:text-xs font-black rounded-lg transition ${dateRange.includes(range) ? 'bg-white text-[#ff5722] shadow-sm' : 'text-gray-400'
                  }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Key Performance Indicators (KPIs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {reportStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <h3 className="text-lg md:text-2xl font-black text-gray-900">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-2">
                <span className={`text-[9px] md:text-xs font-bold ${stat.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.growth}
                </span>
                <span className="text-[9px] text-gray-400 font-medium">{stat.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3. Main Sales Chart (Placeholder) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs md:text-sm font-black text-gray-800 uppercase tracking-widest">Revenue Growth</h3>
              <button className="text-[10px] font-bold text-[#ff5722] border border-orange-100 px-3 py-1 rounded-full hover:bg-orange-50 transition">Export PDF</button>
            </div>
            <div className="h-64 md:h-80 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-100 relative overflow-hidden group">
              {/* Visual Hint for Graph */}
              <div className="absolute inset-x-10 bottom-10 h-1/2 flex items-end justify-between gap-2 opacity-20">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-[#ff5722] w-full" style={{ height: `${Math.random() * 100}%` }}></div>
                ))}
              </div>
              <p className="text-gray-400 text-xs font-bold italic z-10">Sales Analytics Visualization Area</p>
              <p className="text-[10px] text-gray-300 mt-2 z-10">Integrate with Chart.js or Recharts</p>
            </div>
          </div>

          {/* 4. Top Selling Products */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xs md:text-sm font-black text-gray-800 uppercase tracking-widest mb-6">Top Products</h3>
            <div className="space-y-6">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center text-[10px] font-bold">
                      #{product.id}
                    </div>
                    <div>
                      <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 group-hover:text-[#ff5722] transition">{product.name}</p>
                      <p className="text-[9px] text-gray-400 font-medium">{product.sales} Sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] md:text-xs font-black text-gray-800">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-6 border-gray-50" />
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <p className="text-[10px] font-black text-orange-800 uppercase mb-1">Seller Tip 💡</p>
              <p className="text-[10px] text-orange-700 leading-relaxed font-medium">
                Your B2B sales are up by 12%! Consider boosting your wholesale lots via <strong>Ads Manager</strong> for even higher ROI.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Sponsored Growth Tools */}
        <div className="mt-8 bg-gray-900 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-black mb-2 uppercase tracking-tighter italic">Ready to Scale? 🚀</h2>
            <p className="text-xs md:text-sm opacity-60 max-w-md">Get exclusive access to UDDOM's 'Power Seller' insights and personal business consultant.</p>
          </div>
          <button className="relative z-10 bg-[#ff5722] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#e64a19] shadow-xl transition">
            Upgrade to Premium
          </button>
          {/* Decorative UI element */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#ff5722]/20 rounded-full blur-[50px]"></div>
          <div className="absolute top-2 right-4 text-[7px] bg-white/10 px-2 py-0.5 rounded uppercase font-bold tracking-widest">Sponsored Opportunity</div>
        </div>
      </div>
    </div>
  );
}
