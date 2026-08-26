export default function FlashSale() {
  // Mock Data for Flash Sale
  const flashProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Flash Deal Item ${i + 1}`,
    originalPrice: 2000 + (i * 100),
    salePrice: 1200 + (i * 50),
    soldPercentage: 20 + (i * 7),
    img: `https://placehold.co/300x300/f8fafc/334155?text=Sale+${i + 1}`,
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* 1. Flash Sale Hero & Countdown */}
      <div className="bg-red-600 text-white py-8 md:py-12 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-extrabold italic uppercase tracking-tighter mb-4">
            Flash Sale ⚡
          </h1>
          <p className="text-xs md:text-base font-medium opacity-90 mb-6 uppercase tracking-widest">
            Ending In:
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-2 md:gap-4">
            {[{ v: '02', l: 'Hrs' }, { v: '45', l: 'Min' }, { v: '12', l: 'Sec' }].map((time, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="bg-black text-white w-10 h-10 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-lg md:text-3xl font-black shadow-lg">
                  {time.v}
                </div>
                <span className="text-[8px] md:text-xs font-bold mt-1 uppercase">{time.l}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Abstract Background Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10">

        {/* 2. Top Sponsored Banner */}
        <div className="relative w-full h-20 md:h-32 rounded-xl overflow-hidden shadow-sm mb-8">
          <img
            src="https://placehold.co/1200x200/1e293b/ffffff?text=UDDOM+Exclusive:+Extra+10%+Discount+with+UDDOM+Pay"
            alt="Sponsored Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md text-white text-[8px] md:text-xs px-2 py-0.5 rounded">
            Sponsored
          </div>
        </div>

        {/* 3. Product Grid (Mobile: 3 Columns) */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {flashProducts.map((product, index) => {

            // In-feed Ad Logic: After 6 products (2 rows on mobile)
            const showAd = index === 6;

            return (
              <div key={product.id} className="contents">
                {showAd && (
                  <div className="col-span-full my-2">
                    <div className="relative w-full h-16 md:h-24 rounded-lg overflow-hidden border border-red-100">
                      <img
                        src="https://placehold.co/1000x200/fff1f2/be123c?text=Partner+Brand:+Grab+the+Latest+Tech+Deals"
                        alt="Promo Ad"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-white/80 text-[7px] md:text-[10px] px-1 rounded border">Ad</div>
                    </div>
                  </div>
                )}

                {/* Product Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col group">
                  <div className="relative aspect-square">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                    <div className="absolute top-1 left-1 bg-yellow-400 text-black text-[7px] md:text-[10px] font-black px-1 rounded">
                      SAVE {Math.round((1 - product.salePrice / product.originalPrice) * 100)}%
                    </div>
                  </div>

                  <div className="p-1.5 md:p-3 flex flex-col flex-grow">
                    <h3 className="text-[9px] md:text-sm font-medium text-gray-800 line-clamp-2 leading-tight mb-1">
                      {product.name}
                    </h3>

                    <div className="mt-auto">
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-1">
                        <span className="text-[#ff5722] font-bold text-xs md:text-lg">৳{product.salePrice}</span>
                        <span className="text-gray-400 text-[8px] md:text-xs line-through">৳{product.originalPrice}</span>
                      </div>

                      {/* Stock Progress Bar */}
                      <div className="mt-2">
                        <div className="flex justify-between text-[7px] md:text-[10px] mb-1">
                          <span className="text-gray-500 font-medium">{product.soldPercentage}% Sold</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1 md:h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-red-500 h-full rounded-full"
                            style={{ width: `${product.soldPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom View All / Pagination */}
        <div className="mt-10 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-gray-50 transition shadow-sm">
            Load More Deals
          </button>
        </div>

      </div>
    </div>
  );
}
