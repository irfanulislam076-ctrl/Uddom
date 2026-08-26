import { useState } from 'react';

export default function Inventory() {
  const [activeFilter, setActiveFilter] = useState('All');

  const inventoryItems = [
    { id: 1, name: 'Premium Wireless Mouse G-Pro', sku: 'ELEC-MSE-001', retailStock: 45, wholesaleStock: 200, status: 'In Stock', price: 1500 },
    { id: 2, name: 'Mechanical Keyboard K85', sku: 'ELEC-KBD-85', retailStock: 5, wholesaleStock: 0, status: 'Low Stock', price: 3200 },
    { id: 3, name: 'Noise Cancelling Earbuds Gen-2', sku: 'ELEC-EAR-002', retailStock: 0, wholesaleStock: 0, status: 'Out of Stock', price: 2800 },
    { id: 4, name: 'Cotton Polo T-Shirt (Bulk Lot)', sku: 'GAR-POLO-BLK', retailStock: 120, wholesaleStock: 1500, status: 'In Stock', price: 450 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Inventory & Stock</h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Manage your retail and bulk warehouse levels</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-black transition">
                📥 Import CSV
              </button>
              <button className="bg-[#ff5722] text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-md hover:bg-[#e64a19] transition">
                + Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Inventory Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total SKUs', value: '124', color: 'text-gray-800' },
            { label: 'Out of Stock', value: '12', color: 'text-red-500' },
            { label: 'Low Stock Alerts', value: '08', color: 'text-orange-500' },
            { label: 'Total Stock Value', value: '৳14.2L', color: 'text-green-600' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className={`text-xl md:text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* 3. Filter & Search Bar */}
        <div className="bg-white rounded-t-2xl border border-gray-100 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
            {['All', 'In Stock', 'Low Stock', 'Out of Stock'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition whitespace-nowrap ${activeFilter === filter ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search SKU or Name..."
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#ff5722]"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 opacity-30 text-xs">🔍</span>
          </div>
        </div>

        {/* 4. Inventory Table */}
        <div className="bg-white rounded-b-2xl shadow-sm border border-gray-100 border-t-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                  <th className="py-4 px-6">Product Details</th>
                  <th className="py-4 px-6">Retail Stock</th>
                  <th className="py-4 px-6">Wholesale Stock</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6">
                      <p className="text-xs md:text-sm font-bold text-gray-800">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono">SKU: {item.sku}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700">{item.retailStock}</span>
                        <button className="text-blue-500 text-[10px] font-bold border-b border-blue-500/20 hover:border-blue-500 transition">Update</button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700">{item.wholesaleStock}</span>
                        <button className="text-blue-500 text-[10px] font-bold border-b border-blue-500/20 hover:border-blue-500 transition">Update</button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs font-bold text-gray-800">৳{item.price}</td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                          item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="bg-gray-100 p-2 rounded hover:bg-gray-200 transition">⚙️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Sponsored Seller Tips */}
        <div className="mt-8 bg-blue-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10">
            <h2 className="text-lg md:text-xl font-bold mb-2 italic tracking-tight">Need Warehouse Support? 🏭</h2>
            <p className="text-xs opacity-90 max-w-md">Let UDDOM handle your fulfillment. Join our 'Smart Warehouse' program to store and ship items faster.</p>
          </div>
          <button className="relative z-10 bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-xs hover:shadow-xl transition">
            Learn More
          </button>
          <div className="absolute top-2 right-2 text-[8px] bg-white/20 px-1 rounded uppercase font-bold tracking-widest">Sponsored</div>
        </div>

      </div>
    </div>
  );
}
