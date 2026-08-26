import { useState } from 'react';

export default function StoreSettings() {
  const [storeInfo, setStoreInfo] = useState({
    name: "Irfan's Tech Solutions",
    tagline: "Retail & Wholesale Electronics Hub",
    description: "Leading supplier of premium gadgets and industrial electronics in Bangladesh. We specialize in B2B bulk orders and high-quality consumer tech.",
    address: "Tb gate, Mohakhali, Dhaka",
    email: "biz@irfantech.com",
    phone: "+880 17XXXXXXXX",
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">Store Settings</h1>
            <p className="text-[10px] md:text-sm text-gray-500 font-medium">Customize your brand identity and public store profile</p>
          </div>
          <button className="bg-[#ff5722] text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#e64a19] shadow-md transition">
            Save Changes
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 2. Left Column: Visual Branding */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Store Branding</h3>

              {/* Store Logo */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gray-100 border-4 border-white shadow-lg overflow-hidden">
                    <img src="https://placehold.co/150x150/0f172a/ffffff?text=ITS" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-2 rounded-xl shadow-lg hover:bg-black transition">
                    📸
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 mt-4 font-bold uppercase">Store Logo</p>
              </div>

              {/* Store Banner */}
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Store Banner (Desktop)</p>
                <div className="relative h-24 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden group cursor-pointer hover:bg-gray-200 transition">
                   <p className="text-[10px] font-bold text-gray-400 uppercase z-10">Upload Banner</p>
                   <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/800x200/000000/ffffff?text=Banner')] bg-cover"></div>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-100 relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Account Status</p>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Verified Seller <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">✔</span>
                  </h3>
                  <p className="text-xs mt-2 opacity-80 leading-relaxed">You are eligible to post <strong>Wholesale Lots</strong> and receive <strong>Bulk Inquiries</strong>.</p>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            </div>
          </div>

          {/* 3. Right Column: Store Details Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Basic Information</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Store Name</label>
                    <input
                      type="text"
                      value={storeInfo.name}
                      className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tagline (Slogan)</label>
                    <input
                      type="text"
                      value={storeInfo.tagline}
                      className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Store Description</label>
                  <textarea
                    rows="4"
                    value={storeInfo.description}
                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none leading-relaxed"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Business Email</label>
                    <input type="email" value={storeInfo.email} className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Contact Phone</label>
                    <input type="tel" value={storeInfo.phone} className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Business Address</label>
                  <input type="text" value={storeInfo.address} className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:border-[#ff5722] focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Sponsored Marketing Tool */}
            <div className="bg-orange-900 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="relative z-10 text-center md:text-left">
                  <h4 className="text-lg font-bold">Boost Your Brand Profile? 💎</h4>
                  <p className="text-xs text-gray-400 mt-1">Get the 'Featured Wholesaler' badge on your store page to attract more high-ticket corporate clients.</p>
               </div>
               <button className="relative z-10 bg-[#ff5722] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#e64a19] shadow-xl transition">
                 Learn More
               </button>
               <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://placehold.co/1000x200/ffffff/000000?text=Premium')] bg-cover"></div>
               <div className="absolute top-2 right-4 text-[7px] bg-white/10 px-2 py-0.5 rounded font-bold uppercase">Sponsored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
