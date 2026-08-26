import { Link } from 'react-router-dom';

export default function SellerLogin() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Top Branding Section */}
        <div className="bg-gradient-to-br from-gray-800 to-black p-8 text-center text-white relative">
          <Link to="/" className="text-3xl font-black tracking-tighter">
            UDDOM<span className="text-[#ff5722]">.</span> <span className="text-xs uppercase tracking-widest opacity-60">Seller Center</span>
          </Link>
          <p className="text-[10px] md:text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">Manage your business at scale</p>

          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff5722] rounded-full blur-[80px] opacity-20"></div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-800">Welcome Back</h2>
            <p className="text-xs text-gray-400 font-medium">Enter your credentials to access your store panel.</p>
          </div>

          <form className="space-y-5">
            {/* Store Email / Phone */}
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Store Email or Phone</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📧</span>
                <input
                  type="text"
                  className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#ff5722] transition"
                  placeholder="seller@UDDOM.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                <Link to="#" className="text-[10px] font-bold text-[#ff5722] hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                <input
                  type="password"
                  className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#ff5722] transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-[#ff5722] border-gray-200 rounded" id="remember" />
              <label htmlFor="remember" className="text-xs text-gray-500 font-bold">Keep me logged in for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest transition shadow-lg shadow-orange-200"
            >
              Enter Dashboard
            </button>
          </form>

          {/* New Seller Link */}
          <div className="mt-10 pt-6 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-500 font-medium">
              Not a seller yet? <Link to="/seller/register" className="text-blue-600 font-black hover:underline">Start Selling on UDDOM</Link>
            </p>
          </div>
        </div>

        {/* Support Ad Strip */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter italic">24/7 Seller Support Available</p>
          <span className="text-[8px] bg-white px-2 py-0.5 border rounded text-gray-300 font-bold">UDDOM SECURE</span>
        </div>
      </div>
    </div>
  );
}
