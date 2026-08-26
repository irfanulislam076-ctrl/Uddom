import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [useEmail, setUseEmail] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Banner Section */}
        <div className="bg-[#ff5722] p-6 text-center text-white relative overflow-hidden">
          <h1 className="text-2xl font-bold relative z-10">Create Account</h1>
          <p className="text-xs opacity-90 relative z-10 mt-1">Join the largest B2B & B2C network</p>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>

        <div className="p-6 md:p-8">
          {/* Toggle Register Method */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Sign Up</h2>
            <button
              onClick={() => setUseEmail(!useEmail)}
              className="text-[#ff5722] text-xs font-semibold hover:underline"
            >
              {useEmail ? 'Use Phone Number' : 'Use Email Address'}
            </button>
          </div>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                placeholder="e.g. Irfanul Islam"
              />
            </div>

            {useEmail ? (
              // Email Input
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                  placeholder="e.g. irfan@example.com"
                />
              </div>
            ) : (
              // Phone Input
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

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Create Password</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#ff5722] bg-gray-50"
                placeholder="Minimum 8 characters"
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2 py-2">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-[#ff5722]" id="terms" required />
              <label htmlFor="terms" className="text-[11px] text-gray-500 leading-tight">
                I agree to UDDOM's <Link to="/policies" className="text-[#ff5722] hover:underline">Terms of Service</Link> and <Link to="/policies" className="text-[#ff5722] hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white py-3 rounded-lg font-bold text-sm transition shadow-sm"
            >
              {useEmail ? 'Create Account' : 'Verify & Register'}
            </button>
          </form>

          {/* Social Sign Up Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-white px-2 text-gray-400">Or sign up with</span>
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
            Already have an account? <Link to="/login" className="text-[#ff5722] font-bold hover:underline">Login here</Link>
          </p>
        </div>

        {/* Ad Strip Bottom */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[9px] text-gray-400 italic font-medium">Looking for wholesale sourcing? <Link to="/seller/register" className="text-blue-600 font-bold">Register as Seller</Link></p>
          <span className="text-[8px] bg-white px-1 border rounded text-gray-300">Sponsored</span>
        </div>
      </div>
    </div>
  );
}
