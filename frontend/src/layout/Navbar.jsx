import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import SignUpPage from "../pages/Signup/signUpPage.jsx";
import LoginPage from "../pages/Login/loginPage.jsx";
import Button1 from "../components/Button/Button.jsx";
import useCart from "../hooks/useCart.js";
import { books } from "../data/books.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { itemCount, openCart } = useCart();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return [];
    }
    return books.filter((book) =>
      [book.title, book.author, book.category]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [query]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingUp = currentScroll < lastScrollY.current;
      const nearTop = currentScroll < 80;

      setIsVisible(scrollingUp || nearTop || open);
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 mt-4 bg-white rounded-xl mx-4 shadow-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between font-poppins max-w-7xl mx-auto">

          {/* Logo */}
          <a href="/#home" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-md">
              <span className="font-bold text-lg">BS</span>
            </div>
            <h1 className="text-xl font-bold text-black">Book Store</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex gap-8 font-medium text-gray-700">
                {[
                  { label: "Home", href: "/#home" },
                  { label: "Books", href: "/books" },
                  { label: "Contact", href: "/#contact" },
                  { label: "About", href: "/#about" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="cursor-pointer hover:text-black transition text-lg"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="relative min-w-[220px]">
              <div className="flex items-center bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm">
                <input
                  type="text"
                  placeholder="Search any books"
                  className="outline-none text-base w-full placeholder-gray-400"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowResults(true);
                  }}
                  onFocus={() => setShowResults(true)}
                />
              </div>
              {showResults && query.trim() && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {results.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-600">
                      No matches. Try another title or author.
                    </div>
                  ) : (
                    <ul className="max-h-72 overflow-y-auto">
                      {results.slice(0, 6).map((book) => (
                        <li key={book.id}>
                          <Link
                            to={`/books/${book.id}`}
                            className="block px-4 py-3 hover:bg-gray-50 transition"
                            onClick={() => {
                              setShowResults(false);
                              setQuery("");
                            }}
                          >
                            <p className="text-sm font-semibold text-gray-900">
                              {book.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {book.author} • {book.category}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100">
                    <Link
                      to="/books"
                      onClick={() => {
                        setShowResults(false);
                        setQuery("");
                      }}
                      className="hover:text-pink-600"
                    >
                      Browse all books →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
              onClick={openCart}
              aria-label="View cart"
              type="button"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] rounded-full bg-pink-500 text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* LOGIN BUTTON (DESKTOP) */}
          <Button1
            onClick={() => setShowLogin(true)}
            className="hidden md:block"
          >
            Login
          </Button1>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            type="button"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-md p-4 space-y-4">
            <nav>
              <ul className="flex flex-col gap-4 text-lg text-gray-700">
                {[
                  { label: "Home", href: "/#home" },
                  { label: "Books", href: "/books" },
                  { label: "Contact", href: "/#contact" },
                  { label: "About", href: "/#about" },
                ].map((item) => (
                  <li key={item.label} className="cursor-pointer hover:text-black">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="relative">
              <div className="flex items-center bg-white px-4 py-2 border border-gray-300 rounded-xl shadow-sm">
                <input
                  type="text"
                  placeholder="Search any books"
                  className="outline-none text-base w-full"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowResults(true);
                  }}
                  onFocus={() => setShowResults(true)}
                />
              </div>
              {showResults && query.trim() && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {results.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-600">
                      No matches. Try another title or author.
                    </div>
                  ) : (
                    <ul className="max-h-72 overflow-y-auto">
                      {results.slice(0, 6).map((book) => (
                        <li key={book.id}>
                          <Link
                            to={`/books/${book.id}`}
                            className="block px-4 py-3 hover:bg-gray-50 transition"
                            onClick={() => {
                              setShowResults(false);
                              setQuery("");
                              setOpen(false);
                            }}
                          >
                            <p className="text-sm font-semibold text-gray-900">
                              {book.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {book.author} • {book.category}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100">
                    <Link
                      to="/books"
                      onClick={() => {
                        setShowResults(false);
                        setQuery("");
                        setOpen(false);
                      }}
                      className="hover:text-pink-600"
                    >
                      Browse all books →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => {
                  openCart();
                  setOpen(false);
                }}
                aria-label="View cart"
                type="button"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] rounded-full bg-pink-500 text-white flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <Button1
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
                className="px-5 w-full"
              >
                Login
              </Button1>
            </div>
          </div>
        )}
      </header>
      <div className="h-24" aria-hidden="true" />

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden">
            <LoginPage
              onClose={() => setShowLogin(false)}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          </div>
        </div>
      )}

      {/* ================= SIGNUP MODAL ================= */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
            <SignUpPage
              onClose={() => setShowSignup(false)}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;




