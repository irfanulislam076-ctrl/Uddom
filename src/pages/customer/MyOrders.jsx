import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState('All');

  const orders = [
    {
      id: 'UDY-98210',
      date: '25 April 2026',
      total: 3500,
      status: 'Processing',
      items: 2,
      img: 'https://placehold.co/100x100/f8fafc/334155?text=Audio',
      type: 'Retail'
    },
    {
      id: 'UDY-98105',
      date: '20 April 2026',
      total: 28000,
      status: 'Shipped',
      items: 10,
      img: 'https://placehold.co/100x100/f1f5f9/1e293b?text=Wholesale',
      type: 'Wholesale'
    },
    {
      id: 'UDY-97500',
      date: '10 March 2026',
      total: 1200,
      status: 'Delivered',
      items: 1,
      img: 'https://placehold.co/100x100/fdf4ff/86198f?text=Grocery',
      type: 'Grocery'
    }
  ];

  const tabs = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">My Orders</h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Check the status of your recent and past orders</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 max-w-4xl">

        {/* 2. Status Tabs (Scrollable on Mobile) */}
        <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs md:text-sm font-bold transition whitespace-nowrap ${activeTab === tab ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              {/* Order Top Bar */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <span className="text-[10px] md:text-xs font-bold text-gray-800 uppercase">Order ID: {order.id}</span>
                  <span className="text-[10px] md:text-xs text-gray-500">{order.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] md:text-xs font-bold px-2 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-4 flex gap-4 items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                  <img src={order.img} alt="Product" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <p className="text-xs md:text-base font-bold text-gray-800">{order.items} Items Purchased</p>
                  <p className="text-[10px] md:text-sm text-gray-500 mt-0.5">Total Amount: <span className="font-bold text-gray-800">৳{order.total.toLocaleString()}</span></p>
                  <span className="inline-block mt-2 text-[8px] md:text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-bold uppercase">{order.type} Order</span>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <Link
                    to={`/track-order`}
                    className="text-center bg-gray-900 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-md text-[10px] md:text-xs font-bold hover:bg-black transition"
                  >
                    Details
                  </Link>
                  {order.status === 'Delivered' && (
                    <button className="text-center border border-[#ff5722] text-[#ff5722] px-3 py-1.5 md:px-5 md:py-2 rounded-md text-[10px] md:text-xs font-bold hover:bg-orange-50 transition">
                      Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Sponsored Ad Slot */}
        <div className="mt-10 relative w-full h-16 md:h-24 rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <img
            src="https://placehold.co/1200x200/f8fafc/64748b?text=Download+UDDOM+Mobile+App+for+Live+Tracking+Notifications"
            className="w-full h-full object-cover opacity-60"
            alt="Ad Banner"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <p className="text-[10px] md:text-sm font-bold text-gray-700 text-center">Get ৳50 cashback on your next app order! <button className="underline text-[#ff5722]">Install Now</button></p>
          </div>
          <div className="absolute top-1 right-1 text-[7px] md:text-[9px] text-gray-300">Sponsored</div>
        </div>

      </div>
    </div>
  );
}
