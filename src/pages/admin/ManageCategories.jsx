import { useState } from 'react';

export default function ManageCategories() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Electronics', slug: 'electronics', items: 1250, status: 'Active', type: 'Global' },
    { id: 2, name: 'Industrial Tools', slug: 'industrial-tools', items: 450, status: 'Active', type: 'B2B Exclusive' },
    { id: 3, name: 'Organic Grocery', slug: 'grocery', items: 890, status: 'Active', type: 'Retail' },
    { id: 4, name: 'Fashion & Wholesale Cloth', slug: 'fashion', items: 2100, status: 'Disabled', type: 'Global' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-sans">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">Category Architecture</h1>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Organize Retail & Wholesale Market Segments</p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition shadow-xl"
          >
            + Create Category
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">

        {/* 2. Category Insights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Categories', value: '24', icon: '📁' },
            { label: 'Sub-Categories', value: '142', icon: '🌿' },
            { label: 'B2B Locked', value: '05', icon: '🔒' },
            { label: 'Empty Categories', value: '02', icon: '⚠️' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-xl">{stat.icon}</div>
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-lg font-black text-gray-800">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Categories Table */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
             <h3 className="text-xs font-black text-gray-800 uppercase tracking-widest">Live Category Tree</h3>
             <div className="relative">
                <input type="text" placeholder="Search..." className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:border-[#ff5722]" />
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="py-5 px-8">Category Name & Slug</th>
                  <th className="py-5 px-8">Market Type</th>
                  <th className="py-5 px-8">Product Count</th>
                  <th className="py-5 px-8">Status</th>
                  <th className="py-5 px-8 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50/50 transition group">
                    <td className="py-5 px-8">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs">📦</div>
                          <div>
                            <p className="text-xs font-black text-gray-800">{cat.name}</p>
                            <p className="text-[10px] text-gray-400 font-mono">/{cat.slug}</p>
                          </div>
                       </div>
                    </td>
                    <td className="py-5 px-8">
                       <span className={`text-[9px] font-bold px-2 py-1 rounded-md ${
                         cat.type.includes('B2B') ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-100 text-gray-600'
                       }`}>
                         {cat.type}
                       </span>
                    </td>
                    <td className="py-5 px-8 text-xs font-bold text-gray-700">{cat.items.toLocaleString()} Products</td>
                    <td className="py-5 px-8">
                       <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${cat.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          <span className="text-[10px] font-black uppercase text-gray-500">{cat.status}</span>
                       </div>
                    </td>
                    <td className="py-5 px-8 text-right">
                       <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                          <button className="text-[10px] font-bold text-gray-400 hover:text-red-500">Delete</button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Advanced: Sub-Category Management Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gray-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-40">Fast Mapping</h4>
              <p className="text-xs font-medium leading-relaxed mb-6">
                Drag products from "Uncategorized" to specific categories to update their SEO and placement instantly.
              </p>
              <button className="bg-[#ff5722] text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#e64a19] transition">Open Mapper</button>
              <div className="absolute top-4 right-4 text-[7px] bg-white/10 px-2 py-0.5 rounded font-black">PRO TOOL</div>
           </div>

           <div className="bg-white rounded-[2rem] p-8 border border-[#ff5722]/20 shadow-xl shadow-orange-900/5">
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-2xl">🔥</span>
                 <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest">Trending Catagories</h4>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-600">Organic Honey</span>
                    <span className="text-green-500">+140% Growth</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-600">Solar Panels</span>
                    <span className="text-green-500">+85% Growth</span>
                 </div>
                 <hr className="border-gray-50" />
                 <p className="text-[10px] text-gray-400 italic font-medium leading-relaxed">Consider featuring these in the next <strong>Homepage Ad Campaign</strong>.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
