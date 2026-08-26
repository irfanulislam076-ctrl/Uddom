import { useState } from 'react';

export default function ManageProducts() {
  const [activeFilter, setActiveFilter] = useState('Pending');

  const allProducts = [
    { id: 101, name: 'Premium Wireless Mouse G-Pro', seller: "Irfan's Tech", category: 'Electronics', price: '৳1,500', stock: 45, status: 'Active' },
    { id: 102, name: 'Industrial Grade Power Drill', seller: 'Dhaka Tools Ltd', category: 'Industrial', price: '৳8,500', stock: 12, status: 'Pending' },
    { id: 103, name: 'Cotton Polo T-Shirt', seller: 'Fashion Hub', category: 'Clothing', price: '৳450', stock: 0, status: 'Out of Stock' },
    { id: 104, name: 'Generic Tablet (No Brand)', seller: 'Unknown Seller', category: 'Electronics', price: '৳12,000', stock: 5, status: 'Flagged' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">
      {/* 1. Header Area */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Catalog Moderator</h1>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Review, Approve and Manage Global Inventory</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <input
               type="text"
               placeholder="Search by SKU or Name..."
               className="flex-1 md:w-64 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-xs focus:border-[#ff5722] outline-none"
             />
             <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition">Export List</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">

        {/* 2. Inventory KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Listings', value: '12.4K', icon: '📦', color: 'text-blue-600' },
            { label: 'Waiting Approval', value: '142', icon: '⏳', color: 'text-orange-500' },
            { label: 'Flagged/Reported', value: '18', icon: '🚩', color: 'text-red-500' },
            { label: 'Out of Stock', value: '450', icon: '📉', color: 'text-gray-400' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-xl mb-3">{stat.icon}</div>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className={`text-xl md:text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* 3. Status Filters */}
        <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
          {['All Products', 'Pending', 'Active', 'Flagged', 'Out of Stock'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`pb-3 text-xs font-black uppercase tracking-widest transition whitespace-nowrap border-b-2 ${
                activeFilter === tab ? 'text-[#ff5722] border-[#ff5722]' : 'text-gray-400 border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4. Products Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="py-5 px-8">Product Details</th>
                  <th className="py-5 px-8">Seller Info</th>
                  <th className="py-5 px-8">Category</th>
                  <th className="py-5 px-8">Price/Stock</th>
                  <th className="py-5 px-8">Status</th>
                  <th className="py-5 px-8 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {allProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition group">
                    <td className="py-5 px-8">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl border border-gray-100 shrink-0"></div>
                          <div>
                            <p className="text-xs font-black text-gray-800 line-clamp-1">{product.name}</p>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">SKU: UDY-{product.id}</p>
                          </div>
                       </div>
                    </td>
                    <td className="py-5 px-8">
                       <p className="text-xs font-bold text-[#ff5722]">{product.seller}</p>
                    </td>
                    <td className="py-5 px-8 text-[10px] font-bold text-gray-500 uppercase">{product.category}</td>
                    <td className="py-5 px-8">
                       <p className="text-xs font-black text-gray-900">{product.price}</p>
                       <p className="text-[9px] text-gray-400 font-bold">Qty: {product.stock}</p>
                    </td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase ${
                         product.status === 'Active' ? 'bg-green-100 text-green-700' :
                         product.status === 'Pending' ? 'bg-orange-100 text-orange-700 animate-pulse' :
                         product.status === 'Flagged' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
                       }`}>
                         {product.status}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-right">
                       <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black">Approve</button>
                          <button className="bg-white border border-gray-200 text-gray-400 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:text-red-500">Flag</button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Special Moderation Tools (Bottom) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-6">Bulk Moderator</h4>
                <p className="text-xs font-medium leading-relaxed mb-6">
                  Disable all listings from a specific seller or category in case of a security breach or legal issue.
                </p>
                <div className="flex gap-3">
                   <button className="bg-red-500 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition">Emergency Kill-Switch</button>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-[7px] bg-[#ff5722] px-2 py-0.5 rounded font-black">SUPER-ADMIN ONLY</div>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-[#ff5722]/20 shadow-xl shadow-orange-900/5">
              <div className="flex items-center gap-3 mb-6">
                 <span className="text-2xl">🌟</span>
                 <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest">Featured Selection</h4>
              </div>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-6">
                Manually pick products to display in the <span className="font-bold text-gray-800">"Flash Sale"</span> or <span className="font-bold text-gray-800">"Wholesale Hub"</span> top slots.
              </p>
              <button className="w-full border-2 border-dashed border-gray-200 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-[#ff5722] hover:text-[#ff5722] transition">
                Manage Featured Slots
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
