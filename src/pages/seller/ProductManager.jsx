import { useState } from 'react';

export default function ProductManager() {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'add'

  const products = [
    { id: 1, name: 'Premium Wireless Mouse G-Pro', category: 'Electronics', price: 1500, wholesale: 1200, moq: 10, status: 'Active' },
    { id: 2, name: 'Mechanical Keyboard K85', category: 'Electronics', price: 3200, wholesale: 2800, moq: 5, status: 'Active' },
    { id: 3, name: 'Noise Cancelling Earbuds Gen-2', category: 'Audio', price: 2800, wholesale: 2400, moq: 20, status: 'Draft' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Product Management</h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">List, edit, and manage your product catalog</p>
          </div>
          <button
            onClick={() => setActiveView(activeView === 'list' ? 'add' : 'list')}
            className="bg-[#ff5722] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-[#e64a19] transition"
          >
            {activeView === 'list' ? '+ Add New Product' : '← Back to List'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {activeView === 'list' ? (
          /* 2. Product List Table */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 md:p-6 border-b border-gray-50 bg-gray-50/50 flex flex-col md:flex-row gap-4 justify-between items-center">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">Your Inventory</h2>
              <div className="relative w-full md:w-64">
                <input type="text" placeholder="Search product..." className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none" />
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 opacity-30 text-xs">🔍</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                    <th className="py-4 px-6">Product</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Retail Price</th>
                    <th className="py-4 px-6">Wholesale Price</th>
                    <th className="py-4 px-6">MOQ</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded border border-gray-100 shrink-0"></div>
                          <p className="text-xs md:text-sm font-bold text-gray-800 line-clamp-1">{item.name}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-600 font-medium">{item.category}</td>
                      <td className="py-4 px-6 text-xs font-bold text-gray-800">৳{item.price}</td>
                      <td className="py-4 px-6 text-xs font-bold text-[#ff5722]">৳{item.wholesale}</td>
                      <td className="py-4 px-6 text-xs text-gray-500 font-bold">{item.moq} pcs</td>
                      <td className="py-4 px-6">
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${
                          item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-gray-400 hover:text-gray-900 transition">⚙️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* 3. Add Product Form */
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-8 border-b pb-4">Create New Product</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Product Title *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none bg-gray-50" placeholder="e.g. Sony WH-1000XM5" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Category</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none bg-gray-50">
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Description</label>
                  <textarea rows="4" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none bg-gray-50" placeholder="Describe your product..."></textarea>
                </div>
              </div>

              {/* Pricing & B2B */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Retail Price (৳)</label>
                    <input type="number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none bg-gray-50" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Cost Price (৳)</label>
                    <input type="number" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none bg-gray-50" placeholder="0.00" />
                  </div>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                  <h3 className="text-xs font-black text-orange-800 uppercase tracking-widest mb-4">Wholesale / B2B Settings</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-orange-900 mb-2">Wholesale Price (৳)</label>
                      <input type="number" className="w-full border border-orange-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#ff5722] focus:outline-none bg-white" placeholder="0.00" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-orange-900 mb-2">MOQ (Units)</label>
                      <input type="number" className="w-full border border-orange-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#ff5722] focus:outline-none bg-white" placeholder="Min Qty" />
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Product Images</label>
                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
                      <span className="text-2xl mb-2">📸</span>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Click to upload or drag & drop</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition shadow-lg">
                Publish Product
              </button>
              <button className="px-10 bg-gray-100 text-gray-600 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
                Save Draft
              </button>
            </div>
          </div>
        )}

        {/* 4. Tips Ad / Sidebar */}
        {activeView === 'list' && (
          <div className="mt-8 bg-blue-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative z-10">
              <h2 className="text-lg md:text-xl font-bold mb-2">Optimize Your Listings 📈</h2>
              <p className="text-xs opacity-90 max-w-md">Products with high-resolution photos and clear wholesale pricing are 4x more likely to be featured in the "Wholesale Hub".</p>
            </div>
            <button className="relative z-10 bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-xs">Read Listing Guide</button>
            <div className="absolute top-2 right-2 text-[8px] bg-white/20 px-1 rounded font-bold tracking-widest uppercase">Sponsored Tip</div>
          </div>
        )}
      </div>
    </div>
  );
}
