import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SellerStorePage() {
  const [isWholesale, setIsWholesale] = useState(false);

  // Mock Seller Data
  const sellerInfo = {
    storeName: "Irfan's Tech Solutions",
    location: "Mohakhali, Dhaka",
    rating: "4.8",
    followers: "15.4K",
    joined: "Oct 2024",
    responseRate: "98%",
    isVerified: true,
    logo: "https://placehold.co/150x150/0f172a/ffffff?text=ITS",
    banner: "https://placehold.co/1200x300/1e293b/94a3b8?text=Welcome+to+Irfan's+Official+Store"
  };

  // Mock Products from this specific seller
  const sellerProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Premium Wireless Mouse G-Pro" : "Mechanical Keyboard K85",
    price: 1500 + (i * 100),
    wholesale: 1200 + (i * 80),
    minQty: 12,
    img: `https://placehold.co/300x300/f8fafc/334155?text=Product+${i + 1}`,
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-16">

      {/* 1. Store Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full h-32 md:h-56 relative overflow-hidden bg-gray-900">
          <img src={sellerInfo.banner} alt="Store Banner" className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="container mx-auto px-4 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 -mt-10 md:-mt-14 relative z-10">
            {/* Store Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-white bg-white shadow-lg overflow-hidden">
              <img src={sellerInfo.logo} alt="Store Logo" className="w-full h-full object-cover" />
            </div>

            {/* Store Stats */}
            <div className="flex-grow text-center md:text-left mb-2">
              <h1 className="text-xl md:text-3xl font-black text-gray-800 flex items-center justify-center md:justify-start gap-2">
                {sellerInfo.storeName}
                {sellerInfo.isVerified && <span className="text-blue-500 text-sm md:text-xl">✔</span>}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 mt-2 text-[10px] md:text-sm text-gray-500 font-medium">
                <span className="bg-orange-50 text-[#ff5722] px-2 py-0.5 rounded border border-orange-100">★ {sellerInfo.rating} Seller Rating</span>
                <span>{sellerInfo.followers} Followers</span>
                <span className="hidden md:inline">Response: {sellerInfo.responseRate}</span>
                <span className="hidden md:inline">Location: {sellerInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-[#ff5722] text-white px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-[#e64a19] shadow-sm transition">
                + Follow Store
              </button>
              <button className="flex-1 md:flex-none bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm hover:bg-black shadow-sm transition">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">

        {/* 2. Store Navigation & Toggle */}
        <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
             {['All Products', 'Top Picks', 'Reviews'].map((tab, idx) => (
               <button key={idx} className={`text-xs md:text-sm font-bold whitespace-nowrap ${idx === 0 ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-500'}`}>
                 {tab}
               </button>
             ))}
          </div>

          {/* Pricing Toggle */}
          <div className="flex items-center bg-gray-100 p-1 rounded-lg shrink-0">
            <button
              onClick={() => setIsWholesale(false)}
              className={`px-3 py-1.5 text-[9px] md:text-xs font-bold rounded-md ${!isWholesale ? 'bg-white text-[#ff5722] shadow-sm' : 'text-gray-500'}`}
            >
              Retail
            </button>
            <button
              onClick={() => setIsWholesale(true)}
              className={`px-3 py-1.5 text-[9px] md:text-xs font-bold rounded-md ${isWholesale ? 'bg-[#ff5722] text-white shadow-sm' : 'text-gray-500'}`}
            >
              Wholesale
            </button>
          </div>
        </div>

        {/* 3. Product Grid (Mobile: 3 Columns) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {sellerProducts.map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col group">
              <Link to={`/product/${product.id}`} className="aspect-square bg-gray-50 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                {index === 0 && (
                  <div className="absolute top-1 left-1 bg-yellow-400 text-[7px] md:text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">
                    BEST SELLER
                  </div>
                )}
              </Link>

              <div className="p-1.5 md:p-3 flex flex-col flex-grow">
                <h3 className="text-[9px] md:text-sm font-medium text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-[#ff5722]">
                  {product.name}
                </h3>

                <div className="mt-auto">
                  {!isWholesale ? (
                    <p className="text-[#ff5722] font-black text-xs md:text-lg">৳{product.price}</p>
                  ) : (
                    <div className="bg-orange-50 border border-orange-100 rounded p-1">
                      <p className="text-[#ff5722] font-bold text-[10px] md:text-base leading-none">৳{product.wholesale}</p>
                      <p className="text-gray-500 text-[7px] md:text-[9px] mt-0.5">Min: {product.minQty} pcs</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Sponsored Sidebar/Bottom Ad (Conditional Placement) */}
        <div className="mt-12 bg-blue-600 rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
           <div className="relative z-10 text-center md:text-left">
              <h2 className="text-xl md:text-3xl font-black mb-2">Want to source from Verified Wholesalers?</h2>
              <p className="text-xs md:text-sm opacity-90 max-w-lg">Get access to direct manufacturers and high-volume trade discounts for your business store.</p>
           </div>
           <button className="relative z-10 bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-sm hover:shadow-xl transition">
              Explore Wholesale Hub
           </button>
           {/* Decorative UI element */}
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
           <div className="absolute top-2 right-2 text-[7px] md:text-[9px] bg-white/20 px-1 rounded">Sponsored</div>
        </div>

      </div>
    </div>
  );
}
