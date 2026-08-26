import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrandPage() {
  const [isWholesale, setIsWholesale] = useState(false);

  // Mock Brand Data
  const brandInfo = {
    name: "SuperAudio Acoustics",
    logo: "https://placehold.co/150x150/1e293b/ffffff?text=SA",
    cover: "https://placehold.co/1200x300/0f172a/334155?text=SuperAudio+Acoustics+-+Hear+The+Difference",
    followers: "124K",
    rating: "4.9",
    joined: "2024",
    categories: ["Headphones", "Speakers", "Earbuds", "Accessories", "Home Theater"]
  };

  // Mock Products for this Brand
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `SuperAudio Pro Series ${i + 1}`,
    price: 2500 + (i * 200),
    wholesale: 2100 + (i * 150),
    minQty: 10,
    img: `https://placehold.co/300x300/f8fafc/334155?text=Audio+${i + 1}`,
    isNew: i === 0 || i === 1
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* 1. Brand Hero Section */}
      <div className="bg-white border-b border-gray-200">

        {/* Cover Image */}
        <div className="w-full h-32 md:h-64 relative bg-gray-900">
          <img src={brandInfo.cover} alt="Brand Cover" className="w-full h-full object-cover opacity-90" />
        </div>

        {/* Brand Info Strip */}
        <div className="container mx-auto px-4 relative pb-4 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 -mt-12 md:-mt-16">

            {/* Logo & Name */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-3 md:gap-6 z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-4 border-white bg-white shadow-md overflow-hidden shrink-0">
                <img src={brandInfo.logo} alt="Brand Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left mb-1 md:mb-2 mt-2 md:mt-0">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                  {brandInfo.name} <span className="text-blue-500 text-sm md:text-base" title="Verified Brand">✔</span>
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mt-1">
                  <span><strong className="text-gray-800">{brandInfo.followers}</strong> Followers</span>
                  <span>|</span>
                  <span className="text-yellow-500 font-bold">★ {brandInfo.rating}</span>
                  <span>|</span>
                  <span>Joined {brandInfo.joined}</span>
                </div>
              </div>
            </div>

            {/* Actions (Follow & Search) */}
            <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto z-10">
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder={`Search in ${brandInfo.name}...`}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#ff5722]"
                />
              </div>
              <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-2 rounded-md font-bold text-xs md:text-sm transition shadow-sm whitespace-nowrap">
                + Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">

        {/* Brand Level Promoted Banner */}
        <div className="relative w-full h-16 md:h-24 rounded-lg overflow-hidden shadow-sm mb-6 border border-gray-200">
          <img
            src="https://placehold.co/1200x150/eff6ff/1d4ed8?text=SuperAudio+Brand+Week+-+Flat+15%+Off+on+Corporate+Orders"
            alt="Brand Promo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">

          {/* 2. Left Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-1/4 lg:w-1/5 shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 sticky top-32">
              <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Categories</h3>

              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {brandInfo.categories.map((cat, idx) => (
                  <li key={idx}>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-[#ff5722]">
                      <input type="checkbox" className="accent-[#ff5722]" /> {cat}
                    </label>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Price Range</h3>
              <div className="flex gap-2 items-center">
                <input type="number" placeholder="Min" className="w-full border p-1.5 text-xs rounded" />
                <span>-</span>
                <input type="number" placeholder="Max" className="w-full border p-1.5 text-xs rounded" />
              </div>
            </div>
          </div>

          {/* 3. Main Product Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">

            {/* Toolbar */}
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-4 flex flex-wrap items-center justify-between gap-3">

              {/* Mobile Category Scroll */}
              <div className="w-full md:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-hide border-b border-gray-100">
                <button className="bg-orange-50 text-[#ff5722] px-3 py-1 text-[10px] font-bold rounded-full border border-orange-200 shrink-0">All</button>
                {brandInfo.categories.map((cat, idx) => (
                  <button key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 text-[10px] font-medium rounded-full border border-gray-200 shrink-0 hover:bg-gray-200">
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
                <span className="text-xs md:text-sm text-gray-600 font-medium">Showing {products.length} products</span>

                {/* Retail/Wholesale Toggle */}
                <div className="flex items-center bg-gray-100 p-1 rounded-md">
                  <button
                    onClick={() => setIsWholesale(false)}
                    className={`px-3 py-1 text-[10px] md:text-xs font-semibold rounded ${!isWholesale ? 'bg-white shadow-sm text-[#ff5722]' : 'text-gray-500'}`}
                  >
                    Retail
                  </button>
                  <button
                    onClick={() => setIsWholesale(true)}
                    className={`px-3 py-1 text-[10px] md:text-xs font-semibold rounded ${isWholesale ? 'bg-[#ff5722] text-white shadow-sm' : 'text-gray-500'}`}
                  >
                    Wholesale
                  </button>
                </div>
              </div>

              <select className="hidden md:block border border-gray-300 text-xs md:text-sm rounded p-1.5 focus:outline-none">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100 flex flex-col">

                  <Link to={`/product/${product.id}`} className="relative aspect-square bg-gray-100 block group">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    {product.isNew && (
                      <span className="absolute top-1 left-1 md:top-2 md:left-2 bg-blue-500 text-white text-[8px] md:text-xs font-bold px-1.5 py-0.5 rounded shadow-sm">
                        New
                      </span>
                    )}
                  </Link>

                  <div className="p-1.5 md:p-3 flex flex-col flex-grow">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-[9px] md:text-sm font-medium text-gray-800 line-clamp-2 mb-1 leading-tight hover:text-[#ff5722] transition">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-auto pt-1">
                      {!isWholesale ? (
                        <div>
                          <p className="text-[#ff5722] font-bold text-xs md:text-lg">৳{product.price}</p>
                        </div>
                      ) : (
                        <div className="bg-orange-50 border border-orange-100 rounded p-1 mt-1">
                          <p className="text-[#ff5722] font-bold text-xs md:text-base leading-tight">৳{product.wholesale}</p>
                          <p className="text-gray-600 text-[7px] md:text-[10px] mt-0.5 flex justify-between">
                            <span>Bulk Price</span>
                            <span>Min: {product.minQty}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
                Load More from {brandInfo.name}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
