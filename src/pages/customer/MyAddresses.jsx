import { useState } from 'react';

export default function MyAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'Irfanul Islam',
      phone: '+880 1711-000000',
      address: 'Flat 4B, House 12, Road 5, Block C',
      area: 'Dhanmondi, Dhaka-1209',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      name: 'Irfanul Islam (SEBPO)',
      phone: '+880 1822-000000',
      address: 'TB Gate, Mohakhali',
      area: 'Gulshan, Dhaka-1212',
      isDefault: false
    }
  ]);

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16 pt-6 md:pt-10">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">My Addresses</h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">Manage your shipping and billing locations</p>
          </div>
          <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm transition shadow-sm flex items-center justify-center gap-2">
            <span>+</span> Add New Address
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {addresses.map((addr) => (
            <div key={addr.id} className={`bg-white rounded-xl p-5 border-2 transition shadow-sm relative overflow-hidden ${addr.isDefault ? 'border-[#ff5722]' : 'border-gray-100'}`}>

              {/* Default Badge */}
              {addr.isDefault && (
                <div className="absolute top-0 right-0 bg-[#ff5722] text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg uppercase">
                  Default
                </div>
              )}

              {/* Address Content */}
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{addr.type === 'Home' ? '🏠' : '🏢'}</span>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{addr.type}</span>
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{addr.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{addr.address}</p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{addr.area}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 font-semibold">📞 {addr.phone}</p>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-4">
                  <button className="text-xs font-bold text-gray-700 hover:text-[#ff5722] transition">Edit</button>
                  <span className="text-gray-200">|</span>
                  <button
                    onClick={() => removeAddress(addr.id)}
                    className="text-xs font-bold text-gray-400 hover:text-red-500 transition"
                  >
                    Delete
                  </button>
                  {!addr.isDefault && (
                    <>
                      <span className="text-gray-200">|</span>
                      <button className="text-xs font-bold text-blue-500 hover:underline transition">Set as Default</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Empty/Add Placeholder */}
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-[#ff5722] hover:text-[#ff5722] transition cursor-pointer bg-white/50 group">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-2 group-hover:bg-orange-50 transition">
              +
            </div>
            <p className="text-xs font-bold uppercase tracking-wider">Add Another Address</p>
          </div>
        </div>

        {/* Sponsored Bottom Info Strip */}
        <div className="mt-12 bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-3 relative z-10">
            <span className="text-2xl">📦</span>
            <p className="text-[10px] md:text-xs text-gray-600 font-medium italic">
              Get free shipping on your first address order with <span className="text-[#ff5722] font-bold uppercase">UDDOM Express</span>
            </p>
          </div>
          <span className="text-[8px] text-gray-300 font-bold uppercase relative z-10">Sponsored</span>
          <div className="absolute top-0 right-0 w-24 h-full bg-orange-50 -skew-x-12 translate-x-12"></div>
        </div>

      </div>
    </div>
  );
}
