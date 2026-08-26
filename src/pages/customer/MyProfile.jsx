import { useState } from 'react';

export default function MyProfile() {
  // Mock User Data
  const [user, setUser] = useState({
    name: "Mohammed Irfanul Islam",
    email: "irfan@example.com",
    phone: "+880 1711-223344",
    address: "Mohakhali, Dhaka, Bangladesh",
    joined: "April 2024",
    tier: "Gold Member",
    profilePic: "https://placehold.co/150x150/1e293b/ffffff?text=Irfan"
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* 1. Profile Header / Cover */}
      <div className="bg-gray-900 h-32 md:h-48 relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://placehold.co/1920x400/000000/ffffff?text=UDDOM+Member')] bg-cover"></div>
      </div>

      <div className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-10 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* 2. Left Column: Personal Info Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="relative inline-block">
                <img src={user.profilePic} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md mx-auto object-cover" />
                <button className="absolute bottom-1 right-1 bg-[#ff5722] text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition">
                  📸
                </button>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mt-4">{user.name}</h2>
              <div className="inline-block bg-yellow-100 text-yellow-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mt-2 uppercase tracking-wider">
                👑 {user.tier}
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">Member since {user.joined}</p>

              <div className="mt-8 pt-6 border-t border-gray-50 flex justify-around">
                <div>
                  <p className="text-lg font-bold text-gray-800">12</p>
                  <p className="text-[10px] text-gray-400 uppercase">Orders</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">5</p>
                  <p className="text-[10px] text-gray-400 uppercase">Reviews</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">৳2.5k</p>
                  <p className="text-[10px] text-gray-400 uppercase">Saved</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Right Column: Settings & Details */}
          <div className="w-full lg:w-2/3 space-y-6">

            {/* Account Details Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-tight">Account Information</h3>
                <button className="text-[#ff5722] text-xs font-bold hover:underline">Edit Details</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Full Name</label>
                  <p className="text-sm md:text-base font-medium text-gray-800 border-b border-gray-50 pb-2">{user.name}</p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Email Address</label>
                  <p className="text-sm md:text-base font-medium text-gray-800 border-b border-gray-50 pb-2">{user.email}</p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Phone Number</label>
                  <p className="text-sm md:text-base font-medium text-gray-800 border-b border-gray-50 pb-2">{user.phone}</p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Default Address</label>
                  <p className="text-sm md:text-base font-medium text-gray-800 border-b border-gray-50 pb-2">{user.address}</p>
                </div>
              </div>
            </div>

            {/* Quick Links / Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#ff5722]/30 transition cursor-pointer flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-xl">💳</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Saved Payments</h4>
                  <p className="text-[10px] text-gray-400">bKash, Cards, UDDOM Pay</p>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#ff5722]/30 transition cursor-pointer flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-xl">🛡️</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Security</h4>
                  <p className="text-[10px] text-gray-400">Password & 2FA Settings</p>
                </div>
              </div>
            </div>

            {/* Sponsored "Upgrade" Section */}
            <div className="bg-gradient-to-r from-gray-900 to-[#1e293b] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#ff5722] px-2 py-0.5 rounded text-[8px] font-bold uppercase">Sponsored</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold">Switch to Business Account</h3>
                <p className="text-xs text-gray-400 mt-1 mb-6 max-w-sm">Planning to source in bulk? Unlock Trade-In Bangladesh (TIB) verified status and B2B pricing today.</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold text-xs hover:bg-gray-100 transition">
                  Apply as Wholesaler
                </button>
              </div>
              <div className="absolute top-0 right-0 w-40 h-full opacity-10 bg-[url('https://placehold.co/200x200/ffffff/000000?text=B2B')] bg-cover"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
