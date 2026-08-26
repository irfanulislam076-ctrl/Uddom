export default function WholesaleDeals() {
  // Mock Data for Wholesale items
  const wholesaleProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Cotton Polo T-Shirt (Lot of 50)" : "Industrial Safety Helmet (Pack of 20)",
    retailPrice: 500 + (i * 50),
    wholesalePrice: 350 + (i * 30),
    moq: i % 2 === 0 ? 50 : 20,
    unit: i % 2 === 0 ? "Lot" : "Pack",
    img: `https://placehold.co/300x300/f1f5f9/1e293b?text=Bulk+Item+${i + 1}`,
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-16">

      {/* 1. Wholesale Header Section */}
      <section className="bg-gray-900 text-white py-10 md:py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              B2B Wholesale Hub 📦
            </h1>
            <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed">
              Direct sourcing from manufacturers and top wholesalers. Get exclusive tiered pricing, corporate billing, and bulk logistics support.
            </p>
          </div>
          <div className="hidden lg:block w-64 h-64 bg-[#ff5722] rounded-full blur-[100px] absolute -top-20 -right-20 opacity-20"></div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center">
             <p className="text-[#ff5722] font-bold text-xs md:text-sm uppercase mb-1">Total Verified Sellers</p>
             <p className="text-2xl md:text-4xl font-black">12,500+</p>
             <button className="mt-4 bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-2 rounded-full text-xs font-bold transition">
               Request Custom Quote
             </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* 2. Featured B2B Categories */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {['Garments', 'Electronics', 'Industrial', 'Packaging', 'Grocery', 'Construction'].map((cat, idx) => (
            <button key={idx} className="bg-white border border-gray-100 rounded-xl p-3 md:p-6 shadow-sm hover:border-[#ff5722] transition group flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-full mb-2 flex items-center justify-center text-xl md:text-2xl group-hover:bg-orange-50 transition">🏢</div>
              <span className="text-[9px] md:text-sm font-bold text-gray-700">{cat}</span>
            </button>
          ))}
        </div>

        {/* 3. Sponsored B2B Banner */}
        <div className="relative w-full h-20 md:h-32 rounded-2xl overflow-hidden shadow-sm mb-10 border border-blue-100">
          <img
            src="https://placehold.co/1200x200/eff6ff/1d4ed8?text=Corporate+Gifting+Solutions+-+Personalized+Bulk+Orders+Available"
            alt="B2B Offer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-[8px] md:text-[10px] px-2 py-0.5 rounded shadow-md font-bold uppercase">Sponsored</div>
        </div>

        {/* 4. Wholesale Product Grid (Mobile: 3 Columns) */}
        <div className="flex justify-between items-end mb-6">
           <div>
             <h2 className="text-lg md:text-2xl font-black text-gray-800 uppercase tracking-tight">Best Bulk Deals</h2>
             <p className="text-xs text-gray-500">Tiered pricing applied on minimum order quantities.</p>
           </div>
           <select className="border border-gray-300 text-xs md:text-sm rounded-lg p-2 focus:outline-none bg-white font-bold">
              <option>Sort: MOQ Low to High</option>
              <option>Sort: Biggest Savings</option>
           </select>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {wholesaleProducts.map((product, index) => {
            const showAd = index === 6;

            return (
              <div key={product.id} className="contents">
                {showAd && (
                  <div className="col-span-full my-4">
                    <div className="w-full h-16 md:h-24 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-between px-6 relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-xs md:text-lg font-bold text-orange-900">Verified Global Wholesaler Program</p>
                        <p className="text-[10px] md:text-sm text-orange-700">Source directly from ISO certified manufacturers.</p>
                      </div>
                      <button className="relative z-10 bg-orange-500 text-white px-4 py-2 rounded-lg text-[10px] md:text-sm font-bold shadow-md group-hover:bg-orange-600">Apply Now</button>
                      <div className="absolute top-0 right-0 bg-white text-gray-300 text-[8px] px-1 rounded-bl">Ad</div>
                    </div>
                  </div>
                )}

                {/* Wholesale Product Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col group">
                  <div className="relative aspect-square bg-gray-50">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                    <div className="absolute bottom-1 left-1 bg-gray-900/80 text-white text-[7px] md:text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                      {product.unit} Only
                    </div>
                  </div>

                  <div className="p-1.5 md:p-3 flex flex-col flex-grow">
                    <h3 className="text-[9px] md:text-sm font-bold text-gray-800 line-clamp-2 leading-tight mb-1">{product.name}</h3>

                    <div className="mt-auto">
                      <div className="flex flex-col mb-2">
                        <span className="text-[#ff5722] font-black text-xs md:text-lg">৳{product.wholesalePrice}</span>
                        <span className="text-gray-400 text-[8px] md:text-xs line-through leading-none">Retail: ৳{product.retailPrice}</span>
                      </div>

                      <div className="bg-gray-100 rounded p-1 text-center border border-gray-200">
                        <p className="text-gray-600 text-[7px] md:text-[10px] font-bold uppercase tracking-tighter">
                          MOQ: <span className="text-gray-900">{product.moq} Units</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Pagination */}
        <div className="mt-12 text-center">
           <button className="bg-white border border-gray-300 text-gray-700 px-10 py-3 rounded-full text-xs md:text-sm font-black hover:bg-gray-50 transition shadow-sm uppercase tracking-widest">
             Load More B2B Deals
           </button>
        </div>

      </div>
    </div>
  );
}
