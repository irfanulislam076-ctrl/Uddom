import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [useEmail, setUseEmail] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Banner Section */}
        <div className="bg-[#ff5722] p-6 text-center text-white relative overflow-hidden">
          <h1 className="text-2xl font-bold relative z-10">Welcome to UDDOM</h1>
          <p className="text-xs opacity-90 relative z-10 mt-1">Retail & Wholesale Marketplace</p>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>

        <div className="p-6 md:p-8">
          {/* Toggle Login Method */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Login</h2>
            <button
              onClick={() => setUseEmail(!useEmail)}
              className="text-[#ff5722] text-xs font-semibold hover:underline"
            >
              {useEmail ? 'Login with Phone Number' : 'Login with Email'}
            </button>
          </div>

          <form className="space-y-4">
            {useEmail ? (
              // Email Login
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                  placeholder="e.g. irfan@example.com"
                />
              </div>
            ) : (
              // Phone/OTP Login
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm">
                    +880
                  </span>
                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                    placeholder="1XXXXXXXXX"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-xs font-bold text-gray-700 uppercase">Password</label>
                {useEmail && <Link to="#" className="text-[10px] text-gray-400 hover:text-[#ff5722]">Forgot Password?</Link>}
              </div>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white py-3 rounded-lg font-bold text-sm transition shadow-sm"
            >
              {useEmail ? 'Login' : 'Send OTP / Login'}
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-white px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-200 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-50 transition">
              <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-4 h-4" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            Don't have an account? <Link to="/register" className="text-[#ff5722] font-bold hover:underline">Register Now</Link>
          </p>
        </div>

        {/* Ad Strip Bottom */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[9px] text-gray-400 italic">Want to sell bulk? <Link to="/seller/register" className="text-blue-500 font-bold">Join as Seller</Link></p>
          <span className="text-[8px] bg-white px-1 border rounded text-gray-300">Sponsored</span>
        </div>
      </div>
    </div>
  );
}
