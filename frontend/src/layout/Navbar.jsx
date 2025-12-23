import React, { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import SignUpPage from "../pages/Signup/signUpPage.jsx";
import LoginPage from "../pages/Login/loginPage.jsx";
import Button1 from "../components/Button/Button.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="px-6 py-4 mt-4 bg-white rounded-xl mx-4 shadow-sm">
        <div className="flex items-center justify-between font-poppins max-w-7xl mx-auto">

          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 cursor-pointer">
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
                  { label: "Home", href: "#home" },
                  { label: "Books", href: "#free-courses" },
                  { label: "Contact", href: "#contact" },
                  { label: "About", href: "#about" },
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

            <div className="flex items-center bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm min-w-[200px]">
              <input
                type="text"
                placeholder="Search titles, authors, or genres"
                className="outline-none text-base w-full placeholder-gray-400"
              />
            </div>

            <button
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => {
                document
                  .getElementById("free-courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="View cart"
              type="button"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
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
                  { label: "Home", href: "#home" },
                  { label: "Books", href: "#free-courses" },
                  { label: "Contact", href: "#contact" },
                  { label: "About", href: "#about" },
                ].map((item) => (
                  <li key={item.label} className="cursor-pointer hover:text-black">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center bg-white px-4 py-2 border border-gray-300 rounded-xl shadow-sm">
              <input
                type="text"
                placeholder="Search titles, authors, or genres"
                className="outline-none text-base w-full"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => {
                  document
                    .getElementById("free-courses")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="View cart"
                type="button"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
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





