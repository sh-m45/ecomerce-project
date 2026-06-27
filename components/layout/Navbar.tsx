// components/Navbar.tsx
import Link from "next/link";
import { ShoppingCart, Home, Package, Search, Zap, Heart, CircleUserRound, Languages } from "lucide-react";

const Navbar = () => {
  const cartCount = 3;

  return (
    <nav className="fixed px-15 top-0 left-0 right-0 z-50 flex items-center justify-between gap-8 px-6 h-16
      border-b border-yellow-300 bg-yellow-300 backdrop-blur-md">


      <div className="grid grid-cols-2">
        <Link href="/"
          className="flex text-4xl items-center gap-2 font-black text-gray-900">
          noon
        </Link>


        <div className="relative flex items-center w-90">
          <Search size={15}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search…"
            className="w-full h-9 pl-8 pr-3 text-sm border border-gray-200 rounded-md
            bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500
            placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex">
        {/* Nav links */}
        <div className="flex justify-end-safe w-100 gap-1 pl-5">
          <div className="flex items-center justify-end-safe">
            {[
              { href: "/", label: "Home", Icon: Home },
              { href: "/orders", label: "Orders", Icon: Package },
              { href: "/wishlist", label: "Wishlist", Icon: Heart },
              { href: "/language", label: "Language", Icon: Languages },
              { href: "/login", label: "Login", Icon: CircleUserRound },
            ].map(({ href, label, Icon }) => (
              <Link key={href} href={href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm
              text-gray-700 hover:bg-amber-200 hover:text-gray-900 transition-colors font-semibold">
                <Icon size={20} /> {label}
              </Link>
            ))}
          </div>
        </div>



        {/* Actions */}
        <div className="flex items-center shrink-0 ml-15 pl-20 text-gray-700 font-semibold">
          <button
            aria-label={`Cart — ${cartCount} items`}
            className="relative flex items-center justify-center w-9 h-9 rounded-md
            text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <ShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-1 w-4 h-4 rounded-full bg-red-500
              text-white text-[10px] font-semibold flex items-center justify-center"
                aria-hidden="true">
                {cartCount}
              </span>
            )}


          </button>
          <div>Cart</div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;