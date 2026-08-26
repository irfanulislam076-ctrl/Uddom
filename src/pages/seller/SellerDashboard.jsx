import { Link } from 'react-router-dom';

export default function SellerDashboard() {
  // Mock Data for Dashboard
  const stats = [
    { label: 'Today’s Sales', value: '৳12,450', change: '+15%', icon: '💰' },
    { label: 'Pending Orders', value: '08', change: 'Action Required', icon: '📦' },
    { label: 'Ad Impressions', value: '1.2K', change: '+5%', icon: '📢' },
    { label: 'Store Rating', value: '4.8', change: 'Excellent', icon: '⭐' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* 1. Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Seller Command Center</h1>
              <p className="text-xs md:text-sm text-gray-500">Welcome back, <span className="font-bold text-[#ff5722]">Irfan's Tech Solutions</span></p>
            </div>
            <div className="flex gap-3">
               <Link to="/seller/add-product" className="bg-[#ff5722] text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-md hover:bg-[#e64a19] transition">
                 + New Product
               </Link>
               <button className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-bold text-xs hover:bg-gray-200 transition">
                 ⚙️ Settings
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#ff5722] transition">
              <div className="text-2xl mb-3">{stat.icon}</div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-2">{stat.value}</h3>
              <p className={`text-[9px] md:text-[10px] mt-2 font-bold ${idx === 1 ? 'text-orange-500' : 'text-green-500'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 3. Left Column: Recent Orders & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">

            {/* Sales Overview Chart Placeholder */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm md:text-base font-black text-gray-800 uppercase">Sales Overview</h3>
                  <select className="text-[10px] md:text-xs border-none bg-gray-50 rounded px-2 py-1 font-bold">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
               </div>
               <div className="h-48 md:h-64 bg-gray-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-100">
                  <p className="text-gray-400 text-xs font-medium italic">Interactive Sales Graph (Chart.js/Recharts Integration Ready)</p>
               </div>
            </div>

            {/* Recent Order List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="text-sm md:text-base font-black text-gray-800 uppercase">Recent Orders</h3>
                  <Link to="/seller/orders" className="text-[#ff5722] text-xs font-bold hover:underline">View All</Link>
               </div>
               <div className="divide-y divide-gray-50">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="p-4 flex items-center justify-between hover:bg-gray-50 transition">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">📦</div>
                          <div>
                             <p className="text-xs md:text-sm font-bold text-gray-800">Order #UDY-992{order}</p>
                             <p className="text-[10px] text-gray-400">Retail • 2 mins ago</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-xs md:text-sm font-black text-gray-800">৳1,500</p>
                          <span className="text-[8px] md:text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold uppercase">Pending</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* 4. Right Column: B2B Inquiry & Ads Status */}
          <div className="space-y-6">

            {/* Wholesale Inquiry Alert */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
               <div className="relative z-10">
                  <span className="bg-[#ff5722] text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest">New B2B Inquiry</span>
                  <h3 className="text-lg font-bold mt-4">Trade In BD Corp.</h3>
                  <p className="text-xs text-gray-400 mt-1">Requested quote for <span className="text-white font-bold">500 units</span> of Wireless Headphones.</p>
                  <Link to="/seller/inquiry" className="block w-full text-center bg-white text-gray-900 mt-6 py-2.5 rounded-lg font-black text-xs hover:bg-gray-100 transition">
                    Respond to Quote
                  </Link>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full"></div>
            </div>

            {/* Ad Performance Sidebar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-sm font-black text-gray-800 uppercase mb-4">Ad Manager Status</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <p className="text-xs text-gray-500 font-medium">Active Campaigns</p>
                     <p className="text-xs font-black text-gray-800">02</p>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-xs text-gray-500 font-medium">Wallet Balance</p>
                     <p className="text-xs font-black text-green-600">৳2,400</p>
                  </div>
                  <hr className="border-gray-50" />
                  <Link to="/seller/ads" className="block text-center border border-gray-200 py-2 rounded-lg text-[10px] font-black uppercase text-gray-600 hover:bg-gray-50 transition">
                    Manage Campaigns
                  </Link>
               </div>
            </div>

            {/* Sponsored Support Ad */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 relative">
               <p className="text-[8px] text-orange-400 font-bold uppercase tracking-widest mb-1">Sponsored Tip</p>
               <h4 className="text-sm font-bold text-orange-900">Boost Your Visibility!</h4>
               <p className="text-[10px] text-orange-700 mt-1">Join our "Super Seller" program to get 0% commission on your first 10 wholesale orders.</p>
               <button className="mt-4 text-[#ff5722] text-xs font-black hover:underline">Apply Now →</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
