"use client";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="relative bg-white border-b border-slate-200">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-5 transition-all">
          <Link
            href="/"
            className="relative text-3xl tracking-tight font-semibold text-slate-900"
          >
            <span className="text-green-600">go</span>cart
            <span className="text-green-600">.</span>
            <span className="ml-2 align-middle text-[10px] tracking-[.2em] uppercase text-slate-400">
              Pro supply
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-600">
            <Link className="hover:text-green-600 transition" href="/">
              Home
            </Link>
            <Link className="hover:text-green-600 transition" href="/shop">
              Shop all
            </Link>
            <Link className="hover:text-green-600 transition" href="/about">
              About Us
            </Link>
            <Link className="hover:text-green-600 transition" href="/contact">
              Contact
            </Link>

            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center w-64 text-sm gap-2 bg-slate-100 px-4 py-2.5 rounded-lg"
            >
              <Search size={18} className="text-slate-600" />
              <input
                className="w-full bg-transparent outline-none placeholder-slate-600"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex items-center gap-2 text-slate-600 hover:text-green-600"
            >
              <ShoppingCart size={18} />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute -top-2 -right-2 text-[9px] text-white bg-green-600 size-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-green-700 transition text-white rounded-lg">
              <UserRound size={16} /> Account
            </button>
          </div>

          {/* Mobile User Button  */}
          <div className="sm:hidden">
            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <ShoppingCart size={20} />{" "}
              <span className="text-xs bg-green-600 text-white rounded-full px-1.5">
                {cartCount}
              </span>
            </Link>
            <button className="px-4 py-2 bg-slate-900 hover:bg-green-700 text-sm transition text-white rounded-lg">
              <UserRound size={17} />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;
