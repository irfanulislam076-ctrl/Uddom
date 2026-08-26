import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isB2B, setIsB2B] = useState(false);

  // Mock Addresses
  const addresses = [
    { id: 1, type: 'Home', name: 'Zayed Khan', phone: '+880 1711-223344', address: 'Flat 4B, House 12, Road 5, Dhanmondi, Dhaka' },
    { id: 2, type: 'Office', name: 'Zayed Khan', phone: '+880 1822-334455', address: 'UDDOM HQ, Level 8, Banani, Dhaka' }
  ];

  // Mock Order Summary (Grouped by Seller for shipping calculation)
  const orderSummary = {
    sellers: [
      { name: 'ElectroTech BD', items: 3, shipping: 60 },
      { name: 'Fresh Farm Organics', items: 15, shipping: 120 }
    ],
    subtotal: 39500,
    discount: 1500, // Wholesale or Promo discount
  };

  const totalShipping = orderSummary.sellers.reduce((sum, seller) => sum + seller.shipping, 0);
  const totalAmount = (orderSummary.subtotal + totalShipping) - orderSummary.discount;

  return (
    <div className="bg-gray-50 min-h-screen pb-12">

      {/* Checkout Header Progress */}
      <div className="bg-white border-b border-gray-200 py-4 mb-6 md:mb-8">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm font-semibold">
            <Link to="/cart" className="text-gray-500 hover:text-[#ff5722]">1. Cart</Link>
            <span className="text-gray-300">-----</span>
            <span className="text-[#ff5722]">2. Checkout</span>
            <span className="text-gray-300">-----</span>
            <span className="text-gray-400">3. Payment</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Secure Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* 1. Left Column: Forms & Details */}
          <div className="w-full lg:w-2/3 space-y-6">

            {/* Account Info */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Contact Information
                </h2>
                <span className="text-xs text-green-600 font-medium">✓ Logged in</span>
              </div>
              <div className="pl-8 text-xs md:text-sm text-gray-600">
                <p><span className="font-medium text-gray-800">Email:</span> zayed.khan@example.com</p>
                <p><span className="font-medium text-gray-800">Phone:</span> +880 1711-223344</p>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Shipping Address
              </h2>

              <div className="pl-0 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedAddress(addr.id)}
                    className={`border rounded-lg p-4 cursor-pointer transition relative ${selectedAddress === addr.id ? 'border-[#ff5722] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}
                  >
                    {selectedAddress === addr.id && (
                      <div className="absolute top-3 right-3 text-[#ff5722]">✓</div>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{addr.type}</span>
                    </div>
                    <p className="font-bold text-sm text-gray-800">{addr.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{addr.address}</p>
                    <p className="text-xs text-gray-500 mt-1">{addr.phone}</p>
                  </div>
                ))}

                {/* Add New Address Button */}
                <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition text-gray-500 hover:text-[#ff5722]">
                  <span className="text-2xl mb-1">+</span>
                  <span className="text-sm font-medium">Add New Address</span>
                </div>
              </div>
            </div>

            {/* B2B / Corporate Billing Setup */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isB2B}
                  onChange={() => setIsB2B(!isB2B)}
                  className="w-4 h-4 accent-[#ff5722]"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">I need a Corporate / B2B Invoice</h3>
                  <p className="text-[10px] md:text-xs text-gray-500">Requires Company Name and Trade License/BIN for tax purposes.</p>
                </div>
              </label>

              {isB2B && (
                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#ff5722]" placeholder="e.g. UDDOM Enterprise Ltd." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">VAT BIN / Trade License <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#ff5722]" placeholder="Enter BIN number" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Order Notes / Delivery Instructions</label>
                    <textarea rows="2" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#ff5722]" placeholder="e.g. Call before delivery, specific warehouse gate..."></textarea>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <span className="bg-gray-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                Payment Method
              </h2>

              <div className="pl-0 md:pl-8 space-y-3">
                {/* Cash on Delivery */}
                <label className={`flex items-center gap-3 p-3 md:p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'cod' ? 'border-[#ff5722] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-[#ff5722]" />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-gray-800">Cash on Delivery (COD)</span>
                    <p className="text-[10px] md:text-xs text-gray-500">Pay with cash upon delivery.</p>
                  </div>
                  <div className="text-2xl">💵</div>
                </label>

                {/* Mobile Banking (bKash / Nagad) */}
                <label className={`flex items-center gap-3 p-3 md:p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'mfs' ? 'border-[#ff5722] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}>
                  <input type="radio" name="payment" value="mfs" checked={paymentMethod === 'mfs'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-[#ff5722]" />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-gray-800">bKash / Nagad / Upay</span>
                    <p className="text-[10px] md:text-xs text-gray-500">Fast and secure mobile payment.</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-pink-500 rounded text-white text-[8px] font-bold flex items-center justify-center">bKash</div>
                    <div className="w-8 h-5 bg-orange-500 rounded text-white text-[8px] font-bold flex items-center justify-center">Nagad</div>
                  </div>
                </label>

                {/* Credit/Debit Cards */}
                <label className={`flex items-center gap-3 p-3 md:p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'card' ? 'border-[#ff5722] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-[#ff5722]" />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-gray-800">Credit / Debit Card</span>
                    <p className="text-[10px] md:text-xs text-gray-500">Visa, MasterCard, Amex.</p>
                  </div>
                  <div className="text-xl">💳</div>
                </label>

                {/* Bank Transfer (For Wholesale) */}
                <label className={`flex items-center gap-3 p-3 md:p-4 border rounded-lg cursor-pointer transition ${paymentMethod === 'bank' ? 'border-[#ff5722] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}>
                  <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-4 h-4 accent-[#ff5722]" />
                  <div className="flex-1 flex items-center gap-2">
                    <span className="font-bold text-sm text-gray-800">Direct Bank Transfer</span>
                    <span className="bg-blue-100 text-blue-700 text-[8px] font-bold px-1.5 py-0.5 rounded">B2B Preferred</span>
                  </div>
                  <div className="text-xl">🏦</div>
                </label>
              </div>
            </div>

          </div>

          {/* 2. Right Column: Order Summary & Place Order */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-base md:text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-3">Review Order</h2>

              {/* Seller wise shipment breakdown */}
              <div className="mb-4 space-y-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Shipments</h3>
                {orderSummary.sellers.map((seller, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs md:text-sm">
                    <div>
                      <p className="font-medium text-gray-800">{seller.name}</p>
                      <p className="text-gray-500 text-[10px]">({seller.items} items)</p>
                    </div>
                    <span className="text-gray-600">৳{seller.shipping}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4 space-y-3 text-xs md:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800">৳{orderSummary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Shipping</span>
                  <span className="font-medium text-gray-800">৳{totalShipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discounts Applied</span>
                  <span className="font-medium">- ৳{orderSummary.discount.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center mb-6">
                <span className="text-base md:text-lg font-bold text-gray-800">Total</span>
                <span className="text-xl md:text-2xl font-bold text-[#ff5722]">৳{totalAmount.toLocaleString()}</span>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-[#ff5722] hover:bg-[#e64a19] text-white py-3 rounded-md font-bold text-sm md:text-base transition shadow-sm mb-3">
                {paymentMethod === 'cod' ? 'Place Order (COD)' : 'Proceed to Payment'}
              </button>

              <p className="text-center text-[10px] md:text-xs text-gray-500 px-4">
                By placing your order, you agree to UDDOM's <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
