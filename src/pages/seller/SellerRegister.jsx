import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SellerRegister() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

        <div className="flex flex-col md:flex-row">
          {/* Left Side: Brand/Info Section */}
          <div className="md:w-1/3 bg-gray-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <Link to="/" className="text-2xl font-black tracking-tighter">
                UDDOM<span className="text-[#ff5722]">.</span>
              </Link>
              <h2 className="text-xl font-bold mt-10 leading-tight">Grow your business with UDDOM.</h2>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                Join 12,000+ verified wholesalers and retailers across Bangladesh.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <div className="flex items-center gap-3 mb-4 opacity-80">
                <span className="text-xl">🚀</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Fast Onboarding</p>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <span className="text-xl">📦</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Bulk Sales Support</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#ff5722] rounded-full blur-[80px] opacity-20"></div>
          </div>

          {/* Right Side: Form Section */}
          <div className="md:w-2/3 p-8 md:p-10">
            {/* Step Indicator */}
            <div className="flex gap-2 mb-8">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#ff5722]' : 'bg-gray-100'}`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#ff5722]' : 'bg-gray-100'}`}></div>
            </div>

            <h2 className="text-2xl font-black text-gray-800 mb-2">
              {step === 1 ? 'Store Information' : 'Business Documents'}
            </h2>
            <p className="text-xs text-gray-400 font-medium mb-8 uppercase tracking-widest">Step {step} of 2</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {step === 1 ? (
                <>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Store / Brand Name *</label>
                    <input type="text" className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] transition" placeholder="e.g. Irfan's Gadget Galaxy" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Business Type</label>
                    <select className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] transition">
                      <option>Manufacturer / Wholesaler</option>
                      <option>Retailer / Shop Owner</option>
                      <option>Distributor</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input type="email" className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] transition" placeholder="biz@example.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] transition" placeholder="017XXXXXXXX" />
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full bg-gray-900 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition shadow-lg mt-4">Next Step →</button>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Trade License / BIN Number (Optional)</label>
                    <input type="text" className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] transition" placeholder="For B2B Verification" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">NID Front Side (Photo)</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-xl">📸</span>
                      <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">Click to upload</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 py-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#ff5722]" id="agree" />
                    <label htmlFor="agree" className="text-[10px] text-gray-500 font-medium leading-tight">
                      I agree to UDDOM's <Link to="/policies" className="text-[#ff5722] font-bold hover:underline">Seller Terms & Conditions</Link> regarding commissions and logistics.
                    </label>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(1)} className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition">Back</button>
                    <button className="flex-[2] bg-[#ff5722] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#e64a19] transition shadow-lg shadow-orange-100">Submit Application</button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-8 text-center">
              <p className="text-[10px] md:text-xs text-gray-400 font-medium">
                Already have a store? <Link to="/seller/login" className="text-[#ff5722] font-black hover:underline uppercase tracking-tighter">Login here</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Sponsored Strip */}
        <div className="bg-orange-50 px-8 py-3 flex items-center justify-between border-t border-orange-100">
          <p className="text-[9px] text-orange-800 font-bold uppercase italic">Special Offer: 0% Commission for the first 30 days!</p>
          <span className="text-[8px] bg-white px-2 border rounded text-orange-300 font-bold">PARTNER PROMO</span>
        </div>
      </div>
    </div>
  );
}
