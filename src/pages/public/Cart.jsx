import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  // Mock Cart Data with Wholesale Tiers
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      seller: 'ElectroTech BD',
      sellerId: 1,
      name: 'Premium Wireless Headphones',
      img: 'https://placehold.co/150x150/f8fafc/334155?text=Audio',
      basePrice: 1500,
      tiers: [
        { min: 5, price: 1350 },
        { min: 20, price: 1200 }
      ],
      qty: 2, // Currently Retail
    },
    {
      id: 2,
      seller: 'ElectroTech BD',
      sellerId: 1,
      name: 'Smart LED TV 43" 4K UHD',
      img: 'https://placehold.co/150x150/000000/ffffff?text=Smart+TV',
      basePrice: 28000,
      tiers: [{ min: 10, price: 25000 }],
      qty: 1, // Currently Retail
    },
    {
      id: 3,
      seller: 'Fresh Farm Organics',
      sellerId: 2,
      name: 'Organic Raw Honey (1kg)',
      img: 'https://placehold.co/150x150/fffbeb/b45309?text=Honey',
      basePrice: 800,
      tiers: [{ min: 10, price: 650 }],
      qty: 15, // Wholesale tier active!
    }
  ]);

  // Dynamic Price Calculator based on Quantity
  const getActivePrice = (item, currentQty) => {
    let price = item.basePrice;
    if (item.tiers && item.tiers.length > 0) {
      // Sort tiers descending to find the highest applicable tier
      const applicableTiers = [...item.tiers].sort((a, b) => b.min - a.min);
      for (let tier of applicableTiers) {
        if (currentQty >= tier.min) {
          price = tier.price;
          break;
        }
      }
    }
    return price;
  };

  const handleQtyChange = (id, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        let newQty = type === 'plus' ? item.qty + 1 : item.qty - 1;
        if (newQty < 1) newQty = 1;
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Group items by Seller
  const groupedCart = cartItems.reduce((acc, item) => {
    if (!acc[item.seller]) acc[item.seller] = [];
    acc[item.seller].push(item);
    return acc;
  }, {});

  // Calculate Order Summary
  const subtotal = cartItems.reduce((sum, item) => sum + (getActivePrice(item, item.qty) * item.qty), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const shippingEstimate = cartItems.length > 0 ? 120 : 0; // Flat mock shipping

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">Shopping Cart ({totalItems} Items)</h1>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* 1. Cart Items List (Left Column) */}
          <div className="w-full lg:w-2/3 space-y-6">

            {Object.keys(groupedCart).length === 0 ? (
              <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">🛒</div>
                <h2 className="text-lg font-bold text-gray-700">Your cart is empty</h2>
                <p className="text-sm text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                <Link to="/" className="bg-[#ff5722] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#e64a19] transition">
                  Start Shopping
                </Link>
              </div>
            ) : (
              Object.entries(groupedCart).map(([sellerName, items]) => (
                <div key={sellerName} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Seller Header */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">🏪</span>
                      <h3 className="text-sm md:text-base font-bold text-gray-800">{sellerName}</h3>
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                      Fulfilled by Seller
                    </span>
                  </div>

                  {/* Seller's Items */}
                  <div className="p-4 flex flex-col gap-4">
                    {items.map((item) => {
                      const currentPrice = getActivePrice(item, item.qty);
                      const isWholesale = currentPrice < item.basePrice;

                      return (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-50 last:border-0 last:pb-0">
                          {/* Item Image */}
                          <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <Link to={`/product/${item.id}`} className="text-xs md:text-sm font-bold text-gray-800 hover:text-[#ff5722] line-clamp-2 mb-1">
                                {item.name}
                              </Link>

                              {/* Dynamic Pricing Tag */}
                              {isWholesale ? (
                                <span className="inline-block bg-orange-100 text-[#ea580c] text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded mb-2">
                                  ✓ Wholesale Price Applied
                                </span>
                              ) : (
                                <span className="inline-block text-gray-500 text-[9px] md:text-[10px] mb-2">
                                  Retail Price (Add {item.tiers?.[0]?.min - item.qty} more for Wholesale)
                                </span>
                              )}
                            </div>

                            {/* Quantity & Actions */}
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-gray-300 rounded h-8 w-24">
                                <button onClick={() => handleQtyChange(item.id, 'minus')} className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold">-</button>
                                <input type="text" value={item.qty} readOnly className="w-full h-full text-center text-xs font-bold text-gray-800 focus:outline-none border-x border-gray-200 bg-white" />
                                <button onClick={() => handleQtyChange(item.id, 'plus')} className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold">+</button>
                              </div>

                              <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700 text-xs md:text-sm font-medium flex items-center gap-1">
                                🗑️ <span className="hidden sm:inline">Remove</span>
                              </button>
                            </div>
                          </div>

                          {/* Pricing Column */}
                          <div className="sm:w-32 sm:text-right flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end">
                            <span className="text-gray-500 text-xs md:hidden">Price:</span>
                            <div>
                              <p className="text-sm md:text-base font-bold text-[#ff5722]">৳{(currentPrice * item.qty).toLocaleString()}</p>
                              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">৳{currentPrice.toLocaleString()} / pc</p>
                              {isWholesale && (
                                <p className="text-[9px] text-gray-400 line-through mt-0.5">৳{item.basePrice.toLocaleString()} / pc</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}

            {/* In-Cart Promo Banner (Sponsored) */}
            {cartItems.length > 0 && (
              <div className="relative w-full h-16 md:h-24 rounded-lg overflow-hidden shadow-sm border border-blue-200 mt-4">
                <img
                  src="https://placehold.co/1000x200/eff6ff/1d4ed8?text=UDDOM+Business:+Get+Extra+5%+Off+on+Corporate+Orders"
                  alt="Cart Promo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1 right-1 bg-white/80 text-gray-600 text-[8px] md:text-[10px] px-1.5 py-0.5 rounded border border-gray-200">
                  Sponsored
                </div>
              </div>
            )}
          </div>

          {/* 2. Order Summary (Right Column) */}
          {cartItems.length > 0 && (
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 sticky top-32">
                <h2 className="text-sm md:text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-3">Order Summary</h2>

                <div className="space-y-3 text-xs md:text-sm text-gray-600 mb-4 border-b border-gray-100 pb-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-gray-800">৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Estimate</span>
                    <span className="font-medium text-gray-800">৳{shippingEstimate}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Wholesale Discount</span>
                    <span className="font-medium">Applied Automatically</span>
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#ff5722]"
                    />
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-black transition">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-base md:text-lg font-bold text-gray-800">Total</span>
                  <span className="text-xl md:text-2xl font-bold text-[#ff5722]">৳{(subtotal + shippingEstimate).toLocaleString()}</span>
                </div>

                <Link to="/checkout" className="w-full block text-center bg-[#ff5722] hover:bg-[#e64a19] text-white py-3 rounded-md font-bold text-sm md:text-base transition shadow-sm">
                  Proceed to Checkout
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-[10px] md:text-xs">
                  <span>🔒 Secure Payment via UDDOM Pay</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
