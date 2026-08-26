import { Link } from 'react-router-dom';

export default function Home() {
  // Category data
  const categories = [
    { id: 1, name: 'Grocery', icon: '🛒' },
    { id: 2, name: 'Fashion', icon: '👕' },
    { id: 3, name: 'Electronics', icon: '📱' },
    { id: 4, name: 'Home & Living', icon: '🛋️' },
    { id: 5, name: 'Health', icon: '💊' },
    { id: 6, name: 'Sports', icon: '⚽' },
    { id: 7, name: 'Hardware', icon: '🔧' },
    { id: 8, name: 'Wholesale', icon: '📦' },
  ];

  // Trending products data
  const trendingProducts = [
    { id: 1, name: 'Premium Wireless Headphones', price: 2500, wholesale: 2200, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Organic Raw Honey (1kg)', price: 800, wholesale: 650, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Men\'s Casual Cotton T-Shirt', price: 350, wholesale: 250, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Smart LED TV 43" 4K UHD', price: 28000, wholesale: 25000, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Running Sneakers for Men', price: 1500, wholesale: 1200, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Bluetooth Smartwatch Pro', price: 1200, wholesale: 950, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80' },
  ];

  // Flash sale products data
  const flashSaleProducts = [
    { id: 10, name: 'Sports Water Bottle', price: 450, oldPrice: 900, img: 'https://images.unsplash.com/photo-1610811985920-56904d9b4b0e?auto=format&fit=crop&w=400&q=80' },
    { id: 11, name: 'Minimalist Wall Clock', price: 700, oldPrice: 1500, img: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80' },
    { id: 12, name: 'Ergonomic Desk Lamp', price: 1100, oldPrice: 2200, img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="bg-gray-50 pb-10">

      {/* 1. Hero Banner Section */}
      <section className="container mx-auto px-4 py-4">
        <div className="relative w-full h-56 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl group border-2 border-white">
          <img
            src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80"
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-6xl font-black mb-3 uppercase italic leading-tight tracking-tighter">UDDOM MEGA SALE</h1>
            <p className="text-xs md:text-2xl font-medium opacity-90 max-w-lg">Factory Direct, Premium Quality Goods. Delivered Across Bangladesh.</p>
            <div className="mt-6 flex gap-3">
                <Link to="/search" className="bg-[#ff5722] px-6 py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-gray-900 transition-all duration-300">Shop Now</Link>
                <Link to="/wholesale" className="bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all duration-300">Wholesale</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Categories Slider */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-sm md:text-xl font-bold mb-4 text-gray-800 uppercase tracking-tight italic">Categories</h2>
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Link to={`/category/${cat.id}`} key={cat.id} className="flex flex-col items-center min-w-[75px] md:min-w-[130px] p-3 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0 hover:border-[#ff5722] transition group">
              <span className="text-2xl md:text-4xl mb-2 group-hover:scale-110 transition">{cat.icon}</span>
              <span className="text-[10px] md:text-sm font-bold text-gray-600 text-center uppercase tracking-tighter">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Flash Sale (3 Columns Mobile) */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-[2rem] p-5 md:p-8 border border-red-50 shadow-xl shadow-red-900/5 relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-sm md:text-2xl font-black text-gray-900 italic uppercase">Flash Sale</h2>
              <div className="bg-red-600 text-white px-2 py-0.5 rounded-md text-[9px] md:text-xs font-black animate-pulse">05:24:12</div>
            </div>
            <Link to="/flash-sale" className="text-[#ff5722] text-[10px] md:text-sm font-black uppercase tracking-widest border-b-2 border-[#ff5722]">View All</Link>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {flashSaleProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-1 left-1 bg-red-600 text-white text-[7px] md:text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-lg">-{Math.round((1 - p.price/p.oldPrice)*100)}%</div>
                </div>
                <div className="mt-2 text-center md:text-left">
                  <p className="text-[#ff5722] font-black text-[10px] md:text-xl leading-none">৳{p.price}</p>
                  <p className="text-gray-400 text-[8px] md:text-xs line-through mt-0.5">৳{p.oldPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trending Now (3 Columns Mobile) */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm md:text-xl font-black text-gray-900 uppercase italic">Trending Now</h2>
          <Link to="/search" className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-widest hover:text-black">View All</Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {trendingProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="bg-white p-1 md:p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <span className="absolute top-1 right-1 bg-red-600 text-white text-[7px] md:text-[10px] font-black px-1 py-0.5 rounded-md shadow-sm">HOT</span>
              </div>
              <div className="p-1.5 md:p-2 flex flex-col flex-grow">
                <h3 className="text-[9px] md:text-sm font-bold text-gray-800 line-clamp-1 mb-1 leading-tight">{product.name}</h3>
                <div className="mt-auto pt-1 border-t border-gray-50">
                   <p className="text-[#ff5722] font-black text-[10px] md:text-lg leading-none">৳{product.price}</p>
                   <div className="bg-orange-50 rounded-md p-1 mt-1 border border-orange-100/50">
                      <p className="text-gray-600 text-[7px] md:text-[10px] font-bold text-center">
                         W: <span className="text-gray-900 font-black">৳{product.wholesale}</span>
                      </p>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Wholesale Promo Banner */}
      <section className="container mx-auto px-4 py-6">
        <Link to="/wholesale" className="relative block w-full h-32 md:h-56 rounded-[2rem] overflow-hidden group shadow-2xl border-2 border-white">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            alt="Wholesale"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-white text-lg md:text-4xl font-black uppercase tracking-tighter italic">Bulk Wholesale Hub</h2>
              <p className="text-white/80 text-[8px] md:text-lg font-bold uppercase tracking-widest mt-1">Direct Factory Pricing • Bangladesh Wide</p>
            </div>
          </div>
        </Link>
      </section>

      {/* 6. For You Section (3 Columns Mobile) */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-sm md:text-xl font-black text-gray-900 uppercase italic mb-6">For You</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
           {[
             { id: 20, name: 'Leather Wallet', price: '1200', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80' },
             { id: 21, name: 'Mechanical Keyboard', price: '4500', img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400&q=80' },
             { id: 22, name: 'Coffee Bean', price: '2200', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80' },
             { id: 23, name: 'Yoga Mat Pro', price: '1800', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80' }
           ].map((item, i) => (
             <Link to={`/product/${item.id}`} key={i} className="bg-white p-1.5 md:p-3 rounded-2xl border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-1 mt-1">
                   <h4 className="text-[9px] md:text-sm font-bold text-gray-700 line-clamp-1">{item.name}</h4>
                   <p className="text-[#ff5722] font-black text-[10px] md:text-base mt-0.5">৳{item.price}</p>
                </div>
             </Link>
           ))}
        </div>
        <div className="mt-8 text-center">
           <button className="border border-gray-200 text-gray-400 px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#ff5722] hover:text-[#ff5722] transition-colors">Load More</button>
        </div>
      </section>

    </div>
  );
}
