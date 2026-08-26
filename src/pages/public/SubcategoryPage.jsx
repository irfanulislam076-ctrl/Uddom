import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SubcategoryPage() {
  const [isWholesale, setIsWholesale] = useState(false);
  const subcategoryName = "Audio & Headphones";

  // Mock Products
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Noise Cancelling Earbuds Gen-2" : "Studio Monitor Headphones",
    price: 1800 + (i * 120),
    wholesale: 1450 + (i * 100),
    minQty: 15,
    img: `https://placehold.co/300x300/f8fafc/0f172a?text=Audio+${i + 1}`,
  }));

  const brands = ["Sony", "Bose", "JBL", "Sennheiser", "Apple", "Xiaomi"];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* 1. Header & Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <nav className="text-[10px] md:text-xs text-gray-400 mb-2 flex items-center gap-1">
            <Link to="/" className="hover:text-[#ff5722]">Home</Link> <span>/</span>
            <Link to="/categories" className="hover:text-[#ff5722]">Electronics</Link> <span>/</span>
            <span className="text-gray-800 font-bold">{subcategoryName}</span>
          </nav>
          <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">
            {subcategoryName}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">

        {/* 2. Brand Quick Links (Scrollable) */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Popular Brands</h3>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {brands.map((brand, idx) => (
              <Link
                key={idx}
                to={`/brand/${idx}`}
                className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-medium text-gray-600 hover:border-[#ff5722] hover:text-[#ff5722] transition shrink-0 shadow-sm"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Subcategory Top Banner (Ad) */}
        <div className="relative w-full h-24 md:h-40 rounded-xl overflow-hidden shadow-sm mb-8 border border-gray-200">
          <img
            src="https://placehold.co/1200x300/f0f9ff/0369a1?text=Upgrade+Your+Audio+Experience+-+Bulk+Pricing+Available"
            alt="Subcat Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/80 text-[8px] md:text-[10px] px-2 py-0.5 rounded border text-gray-500">Sponsored</div>
        </div>

        {/* 4. Toolbar */}
        <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-sm text-gray-500 font-medium">{products.length} Products Found</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Wholesale Toggle */}
            <div className="flex items-center bg-gray-100 p-1 rounded-md">
              <button
                onClick={() => setIsWholesale(false)}
                className={`px-3 py-1 text-[9px] md:text-xs font-bold rounded ${!isWholesale ? 'bg-white text-[#ff5722] shadow-sm' : 'text-gray-500'}`}
              >
                Retail
              </button>
              <button
                onClick={() => setIsWholesale(true)}
                className={`px-3 py-1 text-[9px] md:text-xs font-bold rounded ${isWholesale ? 'bg-[#ff5722] text-white shadow-sm' : 'text-gray-500'}`}
              >
                Wholesale
              </button>
            </div>

            <select className="border-none bg-transparent text-xs font-bold text-gray-700 focus:outline-none cursor-pointer hidden md:block">
              <option>Sort: Popular</option>
              <option>Price: Low-High</option>
            </select>
          </div>
        </div>

        {/* 5. Product Grid (Mobile: 3 Columns) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {products.map((product, index) => {
            const showInFeedAd = index === 6;

            return (
              <div key={product.id} className="contents">
                {showInFeedAd && (
                  <div className="col-span-full my-3">
                    <div className="w-full h-16 md:h-24 bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden group border border-gray-800">
                      <img
                        src="https://placehold.co/1000x200/1e293b/94a3b8?text=Premium+Seller:+SuperSound+Official+Store"
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
                      />
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <p className="text-white font-bold text-xs md:text-lg">Visit Official Brand Store</p>
                        <p className="text-gray-400 text-[8px] md:text-xs">UDDOM Verified Wholesaler</p>
                      </div>
                      <div className="absolute top-1 right-1 bg-white/20 text-white text-[7px] px-1 rounded">Ad</div>
                    </div>
                  </div>
                )}

                {/* Product Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col group">
                  <Link to={`/product/${product.id}`} className="aspect-square bg-gray-50 overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
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
                          <p className="text-[#ff5722] font-bold text-[9px] md:text-base leading-none">৳{product.wholesale}</p>
                          <p className="text-gray-500 text-[7px] md:text-[9px] mt-0.5">Min: {product.minQty} pcs</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6. Pagination */}
        <div className="mt-10 flex justify-center">
          <button className="bg-white border border-gray-200 px-8 py-2 rounded-full text-xs md:text-sm font-bold text-gray-600 hover:bg-gray-50 transition shadow-sm">
            Load More
          </button>
        </div>

      </div>
    </div>
  );
}
