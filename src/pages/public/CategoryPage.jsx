import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryPage() {
  const [isWholesale, setIsWholesale] = useState(false);

  // Mock Products (12 items to demonstrate ad injection)
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Premium Quality Product ${i + 1}`,
    price: 1500 + (i * 100),
    wholesale: 1200 + (i * 80),
    minQty: 5 + (i % 3) * 5,
    img: `https://placehold.co/300x300/f8fafc/334155?text=Product+${i + 1}`,
    isHot: i === 0 || i === 4
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* 1. Category Top Banner (Sponsored) */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          {/* Breadcrumb */}
          <div className="text-[10px] md:text-xs text-gray-500 mb-3">
            <Link to="/" className="hover:text-[#ff5722]">Home</Link> <span className="mx-1">{'>'}</span>
            <Link to="/categories" className="hover:text-[#ff5722]">Categories</Link> <span className="mx-1">{'>'}</span>
            <span className="text-gray-800 font-medium">Electronics</span>
          </div>

          {/* Top Ad Banner */}
          <div className="relative w-full h-24 md:h-48 rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://placehold.co/1200x300/e0f2fe/0369a1?text=Electronics+Week+-+Up+to+40%+Off+on+Bulk+Orders"
              alt="Category Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white/80 backdrop-blur text-gray-600 text-[9px] md:text-xs px-2 py-0.5 rounded shadow-sm border border-gray-200">
              Sponsored
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">

          {/* 2. Left Sidebar Filters (Hidden on Mobile, shown on Desktop) */}
          <div className="hidden md:block w-1/4 lg:w-1/5 shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 sticky top-32">
              <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Subcategories</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#ff5722]" /> Mobile Phones</label></li>
                  <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#ff5722]" /> Laptops</label></li>
                  <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#ff5722]" /> Accessories</label></li>
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Price Range</h4>
                <div className="flex gap-2 items-center">
                  <input type="number" placeholder="Min" className="w-full border p-1.5 text-xs rounded" />
                  <span>-</span>
                  <input type="number" placeholder="Max" className="w-full border p-1.5 text-xs rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Main Product Listing Area */}
          <div className="w-full md:w-3/4 lg:w-4/5">

            {/* Toolbar (Mobile Filter Button, Sort, Wholesale Toggle) */}
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button className="md:hidden bg-gray-100 px-3 py-1.5 text-xs font-medium rounded border border-gray-200">
                  ⚙️ Filters
                </button>
                <span className="text-xs md:text-sm text-gray-600 font-medium">{products.length}+ items found</span>
              </div>

              <div className="flex items-center gap-4 ml-auto">
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

                {/* Sort By */}
                <select className="border border-gray-300 text-xs md:text-sm rounded p-1.5 focus:outline-none">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Product Grid with In-feed Ads */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {products.map((product, index) => {

                // IN-FEED AD LOGIC: After 6th product, render a full-width Ad banner
                const renderAd = index === 6;

                return (
                  <div key={product.id} className="contents">
                    {renderAd && (
                      <div className="col-span-full my-2 md:my-4">
                        <div className="relative w-full h-16 md:h-28 rounded-lg overflow-hidden shadow-sm border border-yellow-200">
                          <img
                            src="https://placehold.co/1000x200/fef08a/854d0e?text=Sponsored+Brand:+SuperTech+Accessories"
                            alt="In-feed Ad"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-1 right-1 bg-white/90 text-gray-600 text-[8px] md:text-[10px] px-1.5 py-0.5 rounded border border-gray-200">
                            Ad
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Single Product Card */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100 flex flex-col">
                      <Link to={`/product/${product.id}`} className="relative aspect-square bg-gray-100 block">
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                        {product.isHot && (
                          <span className="absolute top-1 left-1 md:top-2 md:left-2 bg-red-500 text-white text-[8px] md:text-xs font-bold px-1.5 py-0.5 rounded shadow-sm">
                            Hot
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
                          {/* Conditional Pricing Display based on Toggle */}
                          {!isWholesale ? (
                            <div>
                              <p className="text-[#ff5722] font-bold text-xs md:text-lg">৳{product.price}</p>
                              <p className="text-gray-400 text-[7px] md:text-[10px] mt-0.5">Retail Price</p>
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
                  </div>
                );
              })}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-8 flex justify-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition shadow-sm">
                Load More Products
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
