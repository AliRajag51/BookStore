import React, { useState } from "react";
import SignUpPage from "./signUpPage";
import LoginPage from "./loginPage";

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
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-md">
              <span className="font-bold text-lg">BS</span>
            </div>
            <h1 className="text-xl font-bold text-black">Book Store</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex gap-8 font-medium text-gray-700">
                {["Home", "Course", "Contact", "About"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-black transition text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm min-w-[200px]">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-base w-full placeholder-gray-400"
              />
            </div>

            <button className="text-xl p-2 rounded-full hover:bg-gray-100 transition">
              🌙
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="hidden md:block bg-black text-white px-10 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Login
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-md p-4 space-y-4">
            <nav>
              <ul className="flex flex-col gap-4 text-lg text-gray-700">
                {["Home", "Course", "Contact", "About"].map((item) => (
                  <li key={item} className="cursor-pointer hover:text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center bg-white px-4 py-2 border border-gray-300 rounded-xl shadow-sm">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-base w-full"
              />
            </div>

            <button
              onClick={() => {
                setShowLogin(true);
                setOpen(false);
              }}
              className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 w-full"
            >
              Login
            </button>
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
          <div className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden">

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
