import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('https://placehold.co/600x600/f8fafc/334155?text=Product+Main');

  const gallery = [
    'https://placehold.co/600x600/f8fafc/334155?text=Product+Main',
    'https://placehold.co/600x600/e2e8f0/0f172a?text=Angle+1',
    'https://placehold.co/600x600/cbd5e1/020617?text=Angle+2',
  ];

  // Logic to determine price based on quantity (Wholesale Tiers)
  let currentPrice = 1500; // Retail price (1-4 pcs)
  if (quantity >= 5 && quantity <= 19) currentPrice = 1350; // Tier 1
  if (quantity >= 20) currentPrice = 1200; // Tier 2

  const handleQtyChange = (type) => {
    if (type === 'minus' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'plus') setQuantity(quantity + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 text-[10px] md:text-xs text-gray-500">
        <Link to="/" className="hover:text-[#ff5722]">Home</Link> <span className="mx-1">{'>'}</span>
        <Link to="/categories" className="hover:text-[#ff5722]">Electronics</Link> <span className="mx-1">{'>'}</span>
        <Link to="/category/1" className="hover:text-[#ff5722]">Accessories</Link> <span className="mx-1">{'>'}</span>
        <span className="text-gray-800">Premium Wireless Headphones</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">

            {/* 1. Image Gallery */}
            <div className="w-full md:w-2/5 shrink-0">
              <div className="aspect-square rounded-lg border border-gray-200 overflow-hidden mb-3 bg-gray-100 relative">
                <img src={activeImage} alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-md border-2 overflow-hidden ${activeImage === img ? 'border-[#ff5722]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Promo Strip under Gallery */}
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-2 flex items-center justify-center text-blue-800 text-[10px] md:text-xs font-semibold relative">
                <span>Free Shipping on bulk orders over ৳10,000!</span>
                <span className="absolute top-0 right-0 bg-white text-gray-500 text-[6px] md:text-[8px] px-1 rounded-bl border-l border-b border-gray-200">Ad</span>
              </div>
            </div>

            {/* 2. Product Info & Pricing */}
            <div className="w-full md:w-3/5 flex flex-col">

              <div className="border-b border-gray-100 pb-4 mb-4">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-tight mb-2">
                  Premium Wireless Noise-Cancelling Headphones (Pro Edition)
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                  <span className="text-yellow-500 font-bold">★ 4.8</span>
                  <span className="text-blue-600 hover:underline cursor-pointer">124 Reviews</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600">Brand: <Link to="/brand/1" className="text-blue-600 font-medium">SuperAudio</Link></span>
                  <span className="text-gray-300">|</span>
                  <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">In Stock (1,200 pcs)</span>
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="mb-6">
                <p className="text-gray-500 text-xs md:text-sm mb-1">Current Price:</p>
                <div className="flex items-end gap-3">
                  <span className="text-3xl md:text-4xl font-bold text-[#ff5722]">৳{currentPrice}</span>
                  <span className="text-gray-500 text-sm md:text-base mb-1">/ piece</span>
                </div>
              </div>

              {/* Wholesale Tiers Table */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 md:p-4 mb-6">
                <h3 className="text-xs md:text-sm font-bold text-gray-700 mb-2">Volume Pricing (Mix & Match)</h3>
                <div className="grid grid-cols-3 gap-2">
                  {/* Tier Retail */}
                  <div className={`p-2 rounded text-center border ${quantity < 5 ? 'bg-orange-50 border-[#ff5722] shadow-sm' : 'bg-white border-gray-200'}`}>
                    <p className="text-[10px] md:text-xs text-gray-500 mb-1">1 - 4 pcs</p>
                    <p className="text-xs md:text-sm font-bold text-gray-800">৳1,500</p>
                  </div>
                  {/* Tier 1 */}
                  <div className={`p-2 rounded text-center border ${quantity >= 5 && quantity <= 19 ? 'bg-orange-50 border-[#ff5722] shadow-sm' : 'bg-white border-gray-200'}`}>
                    <p className="text-[10px] md:text-xs text-gray-500 mb-1">5 - 19 pcs</p>
                    <p className="text-xs md:text-sm font-bold text-gray-800">৳1,350</p>
                  </div>
                  {/* Tier 2 */}
                  <div className={`p-2 rounded text-center border ${quantity >= 20 ? 'bg-orange-50 border-[#ff5722] shadow-sm' : 'bg-white border-gray-200'}`}>
                    <p className="text-[10px] md:text-xs text-gray-500 mb-1">≥ 20 pcs</p>
                    <p className="text-xs md:text-sm font-bold text-[#ff5722]">৳1,200</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-md h-10 md:h-12 w-full sm:w-32 bg-white">
                  <button onClick={() => handleQtyChange('minus')} className="w-10 md:w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg transition">-</button>
                  <input type="number" value={quantity} readOnly className="w-full h-full text-center text-sm font-bold text-gray-800 focus:outline-none border-x border-gray-200" />
                  <button onClick={() => handleQtyChange('plus')} className="w-10 md:w-12 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg transition">+</button>
                </div>

                {/* Buy Buttons */}
                <button className="flex-1 bg-[#ff5722] hover:bg-[#e64a19] text-white h-10 md:h-12 rounded-md font-bold text-sm md:text-base transition shadow-sm">
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-black text-white h-10 md:h-12 rounded-md font-bold text-sm md:text-base transition shadow-sm">
                  Buy Now
                </button>
              </div>

              {/* Seller Info Mini Card */}
              <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    ET
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-gray-800">ElectroTech BD <span className="text-blue-500 text-[10px]">✔ Verified</span></p>
                    <p className="text-[10px] md:text-xs text-gray-500">98% Positive Feedback</p>
                  </div>
                </div>
                <Link to="/store/1" className="text-[#ff5722] text-xs md:text-sm font-medium border border-[#ff5722] px-3 py-1.5 rounded hover:bg-orange-50 transition">
                  Visit Store
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* 3. Mid Page Ad Banner */}
        <div className="relative w-full h-20 md:h-28 rounded-lg overflow-hidden shadow-sm mb-8">
          <img
            src="https://placehold.co/1200x200/fef08a/854d0e?text=Need+Corporate+Gifts?+Request+a+Custom+Quote+Today!"
            alt="Promo Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1 right-1 bg-white/90 text-gray-600 text-[8px] md:text-[10px] px-1.5 py-0.5 rounded border border-gray-200">
            Sponsored
          </div>
        </div>

        {/* 4. Product Description & Specs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
          <h2 className="text-base md:text-lg font-bold text-gray-800 mb-4 border-b pb-2">Product Description</h2>
          <div className="text-xs md:text-sm text-gray-600 leading-relaxed space-y-4">
            <p>
              Experience crystal clear audio with our Premium Wireless Noise-Cancelling Headphones. Perfect for both office work and personal entertainment.
              Built with high-quality materials to ensure durability for B2B bulk purchases and individual users alike.
            </p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Active Noise Cancellation (ANC) up to 35dB</li>
              <li>40-hour battery life on a single charge</li>
              <li>Bluetooth 5.2 for seamless connectivity</li>
              <li>Comfortable memory foam ear cushions</li>
              <li>1 Year Brand Warranty included</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
