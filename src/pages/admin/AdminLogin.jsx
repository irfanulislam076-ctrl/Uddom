import { Link } from 'react-router-dom';

export default function AdminLogin() {
  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff5722] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px] opacity-10"></div>

      <div className="max-w-md w-full relative z-10">
        {/* Admin Logo Area */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white tracking-tighter">
            UDDOM <span className="text-[#ff5722]">ADMIN</span>
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mt-2 font-bold">Authorized Access Only</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white">System Login</h2>
            <p className="text-xs text-gray-400 mt-1">Please enter your administrative credentials.</p>
          </div>

          <form className="space-y-6">
            {/* Admin ID / Email */}
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Admin Identity</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🆔</span>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all"
                  placeholder="admin_username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Secret Key</label>
                <Link to="#" className="text-[10px] font-bold text-gray-500 hover:text-[#ff5722] transition">Reset Key?</Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🔐</span>
                <input
                  type="password"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            {/* 2FA Reminder */}
            <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-xl flex items-center gap-3">
              <span className="text-lg">🛡️</span>
              <p className="text-[10px] text-orange-200 leading-tight">Secondary 2FA prompt will appear after password verification.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ff5722] to-orange-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Initialize Session
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest leading-loose">
            UDDOM Infrastructure Management System <br />
            Secure Core v2.0.4 • Dhaka Node
          </p>
        </div>
      </div>
    </div>
  );
}
