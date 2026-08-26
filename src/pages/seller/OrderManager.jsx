import { useState } from 'react';

export default function OrderManager() {
  const [activeTab, setActiveTab] = useState('Pending');

  const orders = [
    { id: 'UDY-10025', customer: 'Irfanul Islam', date: '27 April 2026', items: 3, total: 4500, type: 'Retail', status: 'Pending' },
    { id: 'UDY-10022', customer: 'Trade In BD Corp', date: '26 April 2026', items: 50, total: 75000, type: 'Wholesale', status: 'Processing' },
    { id: 'UDY-9985', customer: 'Sarah Ahmed', date: '25 April 2026', items: 1, total: 1200, type: 'Retail', status: 'Shipped' },
    { id: 'UDY-9950', customer: 'Modern Gadgets', date: '24 April 2026', items: 100, total: 120000, type: 'Wholesale', status: 'Delivered' },
  ];

  const filteredOrders = activeTab === 'All' ? orders : orders.filter(o => o.status === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Order Management</h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Track, process, and fulfill your customer orders</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-gray-900 text-white px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-black transition">
              📦 Ship Selected
            </button>
            <button className="flex-1 md:flex-none border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-gray-50 transition">
              📄 Export Orders
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">

        {/* 2. Order Status Tabs */}
        <div className="flex gap-4 md:gap-8 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
          {['All', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs md:text-sm font-bold transition whitespace-nowrap border-b-2 ${activeTab === tab ? 'text-[#ff5722] border-[#ff5722]' : 'text-gray-400 border-transparent'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                  <th className="py-4 px-6">Order Details</th>
                  <th className="py-4 px-6">Customer</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6">
                      <p className="text-xs md:text-sm font-bold text-gray-800">{order.id}</p>
                      <p className="text-[10px] text-gray-400">{order.date}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-xs md:text-sm font-medium text-gray-700">{order.customer}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${order.type === 'Wholesale' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-100 text-gray-600'
                        }`}>
                        {order.type}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-xs md:text-sm font-bold text-gray-800">৳{order.total.toLocaleString()}</p>
                      <p className="text-[10px] text-gray-400">{order.items} Items</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md ${order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="text-[10px] font-bold text-blue-600 hover:underline">Manage</button>
                        <button className="text-[10px] font-bold text-gray-400 hover:text-[#ff5722]">Invoice</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Logistic Partners (Sponsored/Ad Section) */}
        <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl">🚛</div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-gray-800">UDDOM Express Delivery</h3>
              <p className="text-xs text-gray-500">Enable faster shipping and lower returns with our verified logistics.</p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-[#ff5722] text-white px-8 py-2.5 rounded-lg font-bold text-xs shadow-md">Activate Now</button>
          <div className="hidden md:block absolute top-2 right-2 text-[7px] text-gray-300 font-bold tracking-widest">PARTNER AD</div>
        </div>

      </div>
    </div>
  );
}
