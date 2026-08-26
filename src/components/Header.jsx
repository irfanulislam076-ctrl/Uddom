import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Grouped navigation links shown in the mega-menu and mobile drawer
  const navigationLinks = {
    shopping: [
      { name: 'All Categories', path: '/categories' },
      { name: 'Flash Sale ⚡', path: '/flash-sale' },
      { name: 'Grocery Store 🥦', path: '/grocery' },
      { name: 'Wholesale Hub 📦', path: '/wholesale' },
      { name: 'Offers & Coupons', path: '/offers' },
      { name: 'Browse Aisles', path: '/browse' },
    ],
    account: [
      { name: 'My Profile', path: '/account/profile' },
      { name: 'My Orders', path: '/account/orders' },
      { name: 'My Wishlist', path: '/account/wishlist' },
      { name: 'My Wallet', path: '/account/wallet' },
      { name: 'My Coupons', path: '/account/coupons' },
      { name: 'My Reviews', path: '/account/reviews' },
      { name: 'Notifications', path: '/account/notifications' },
      { name: 'Bulk Inquiry (RFQ)', path: '/account/bulk-inquiry' },
    ],
    support: [
      { name: 'Help Centre', path: '/help' },
      { name: 'About UDDOM', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Policies', path: '/policies' },
    ]
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">

      {/* 1. Top Mini Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.15em]">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 opacity-90">
              <span className="text-[#ff5722]">📞</span> +880 1234-567890
            </span>
            <Link to="/help" className="hover:text-[#ff5722] transition">Help Centre</Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/seller/register" className="text-[#ff5722] font-black hover:brightness-110">Become a Seller</Link>
            <div className="w-[1px] h-3 bg-gray-700"></div>
            <Link to="/about" className="hover:text-[#ff5722] transition opacity-90">Our Story</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo & Toggle */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-gray-800 text-2xl p-1">☰</button>
            <Link to="/" className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter flex items-center group">
              UDDOM<span className="text-[#ff5722] group-hover:scale-125 transition-transform duration-300">.</span>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl relative group">
            <input
              type="text"
              placeholder="Search for electronics, wholesale clothing, groceries..."
              className="w-full border-2 border-gray-100 bg-gray-50 rounded-2xl px-6 py-2.5 text-sm font-medium focus:outline-none focus:border-[#ff5722] focus:bg-white transition-all shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ff5722] text-white px-6 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg active:scale-95">
              Search
            </button>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3 md:gap-8">
            {/* Account Dropdown */}
            <div className="hidden md:relative md:block">
              <button onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="flex items-center gap-2 text-gray-800 hover:text-[#ff5722] font-black text-[11px] uppercase tracking-widest transition group">
                <span className="text-xl bg-gray-50 p-2 rounded-full group-hover:bg-orange-50 transition">👤</span>
                <span className="hidden lg:block">Account</span>
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                  <div className="p-5 bg-gray-50 border-b">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Hello, Sign In</p>
                    <div className="flex gap-2 mt-3">
                      <Link to="/login" className="flex-1 bg-[#ff5722] text-white text-center py-2 rounded-lg text-[10px] font-black uppercase hover:shadow-lg transition">Login</Link>
                      <Link to="/register" className="flex-1 border border-gray-200 text-gray-800 text-center py-2 rounded-lg text-[10px] font-black uppercase hover:bg-white transition">Join</Link>
                    </div>
                  </div>
                  <div className="py-2">
                    {navigationLinks.account.slice(0, 4).map((link, idx) => (
                      <Link key={idx} to={link.path} className="block px-5 py-2.5 text-[11px] font-bold text-gray-600 hover:bg-orange-50 hover:text-[#ff5722] uppercase tracking-tight transition">{link.name}</Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2">
                      <Link to="/account/profile" className="block px-5 py-3 text-[10px] font-black text-gray-900 uppercase hover:bg-gray-50 tracking-widest">Full Dashboard →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart & Wishlist */}
            <Link to="/account/wishlist" className="relative p-1 group">
              <span className="text-2xl group-hover:scale-110 block transition">🤍</span>
              <span className="absolute -top-1 -right-1 bg-[#ff5722] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full border-2 border-white">0</span>
            </Link>
            <Link to="/cart" className="flex items-center gap-3 bg-gray-100 md:bg-transparent p-2 md:p-0 rounded-2xl group">
              <div className="relative">
                <span className="text-2xl group-hover:scale-110 block transition">🛒</span>
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] font-black px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
              </div>
              <div className="hidden md:block">
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none">Total</p>
                <p className="text-xs font-black text-gray-900 mt-1 leading-none">৳1,250</p>
              </div>
            </Link>
            <Link to="/login" className="md:hidden flex items-center justify-center bg-[#ff5722] text-white w-10 h-10 rounded-full shadow-lg">👤</Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <input type="text" placeholder="Search UDDOM..." className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:border-[#ff5722]" />
        </div>
      </div>

      {/* 3. Bottom Nav (Desktop) */}
      <nav className="hidden md:block border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 flex gap-8 py-3.5 overflow-x-auto scrollbar-hide">
          <Link to="/categories" className="flex items-center gap-2 text-[10px] font-black text-gray-900 hover:text-[#ff5722] uppercase tracking-widest whitespace-nowrap">
            <span className="text-lg">☰</span> All Categories
          </Link>
          <div className="w-[1px] h-4 bg-gray-200"></div>
          {navigationLinks.shopping.slice(1).map((link, idx) => (
            <Link key={idx} to={link.path} className="text-[10px] font-black text-gray-500 hover:text-[#ff5722] uppercase tracking-widest whitespace-nowrap transition">{link.name}</Link>
          ))}
          <Link to="/bulk-inquiry" className="ml-auto text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:opacity-80">
            <span className="animate-pulse text-lg">📢</span> Bulk Inquiry (RFQ)
          </Link>
        </div>
      </nav>

      {/* 4. Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative w-[85%] max-w-xs bg-white h-full shadow-2xl flex flex-col overflow-y-auto">
            <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff5722] rounded-xl flex items-center justify-center font-black text-xl shadow-xl shadow-orange-500/20">U</div>
                <p className="text-xl font-black uppercase tracking-tighter italic">UDDOM</p>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-400">✕</button>
            </div>

            <div className="p-5 grid grid-cols-2 gap-3 bg-gray-50 border-b">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="bg-[#ff5722] text-white text-center py-3 rounded-xl font-black text-[10px] uppercase shadow-lg">Login</Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)} className="bg-white border border-gray-200 text-gray-800 text-center py-3 rounded-xl font-black text-[10px] uppercase shadow-sm">Join</Link>
            </div>

            <div className="p-6 space-y-10">
              {/* Shopping Section */}
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5">Shop All</p>
                <div className="space-y-5">
                  {navigationLinks.shopping.map((link, idx) => (
                    <Link key={idx} to={link.path} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between text-xs font-black text-gray-700 uppercase tracking-widest group">
                      {link.name} <span className="text-gray-300 group-hover:text-[#ff5722]">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Account Section */}
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5">My Account</p>
                <div className="space-y-5">
                  {navigationLinks.account.map((link, idx) => (
                    <Link key={idx} to={link.path} onClick={() => setIsMenuOpen(false)} className="block text-xs font-black text-gray-500 uppercase tracking-widest hover:text-[#ff5722]">{link.name}</Link>
                  ))}
                </div>
              </div>

              {/* Support / About section */}
              <div className="pb-10">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5">UDDOM Support</p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {navigationLinks.support.map((link, idx) => (
                    <Link key={idx} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-[#ff5722]">{link.name}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto p-6 bg-orange-50 border-t">
              <Link to="/seller/register" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-gray-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase shadow-xl">Start Selling on UDDOM</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
