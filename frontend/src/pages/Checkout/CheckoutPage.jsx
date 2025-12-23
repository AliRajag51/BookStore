import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentOption from "../../components/BuyNowModal/PaymentOption.jsx";
import SecurityNotice from "../../components/BuyNowModal/SecurityNotice.jsx";
import GuaranteeBox from "../../components/BuyNowModal/GuaranteeBox.jsx";
import useCart from "../../hooks/useCart.js";
import bannerImage from "../../assets/banner-image.png";
import { isValidEmail } from "../../utils/validation.js";

function CheckoutPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  return (
    <section className="font-poppins py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600">Complete your order in a few steps.</p>
          </div>
          <Link
            to="/#free-courses"
            className="text-sm text-pink-600 hover:text-pink-700"
          >
            Continue browsing
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order summary</h2>
            {items.length === 0 ? (
              <div className="rounded-xl border border-gray-200 p-6 text-center text-gray-600">
                Your cart is empty. Add books to continue.
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-xl border border-gray-200 p-4 bg-white"
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={bannerImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-xs text-gray-500">by {item.author}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-gray-500 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-pink-600 font-medium">Free</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 border rounded-lg text-sm"
                          >
                            -
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 border rounded-lg text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              >
                Clear cart
              </button>
            )}
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Order placed successfully
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Your books are on their way. We sent a confirmation email.
                  </p>
                  <Link
                    to="/#free-courses"
                    className="inline-flex mt-6 px-5 py-2 rounded-lg bg-black text-white text-sm"
                  >
                    Continue browsing
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Your details
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Johnson"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }));
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none ${
                          errors.fullName ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                          setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none ${
                          errors.email ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shipping address
                      </label>
                      <input
                        type="text"
                        placeholder="123 Book Street, Reading City"
                        value={formData.address}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }));
                          setErrors((prev) => ({ ...prev, address: "" }));
                        }}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none ${
                          errors.address ? "border-red-300" : "border-gray-300"
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </form>

                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Payment method
                    </h3>
                    <div className="space-y-3">
                      <PaymentOption
                        value="credit-card"
                        label="Credit/Debit Card"
                        isSelected={paymentMethod === "credit-card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <PaymentOption
                        value="paypal"
                        label="PayPal"
                        isSelected={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <SecurityNotice text="Secure checkout. Your information is protected." />
                    <GuaranteeBox />
                  </div>

                  <button
                    type="button"
                    className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition"
                    onClick={() => {
                      const nextErrors = {};
                      const fullName = formData.fullName.trim();
                      const emailValue = formData.email.trim();
                      const addressValue = formData.address.trim();

                      if (items.length === 0) {
                        return;
                      }
                      if (!fullName) {
                        nextErrors.fullName = "Full name is required.";
                      }
                      if (!emailValue) {
                        nextErrors.email = "Email is required.";
                      } else if (!isValidEmail(emailValue)) {
                        nextErrors.email = "Enter a valid email address.";
                      }
                      if (!addressValue) {
                        nextErrors.address = "Address is required.";
                      }

                      if (Object.keys(nextErrors).length > 0) {
                        setErrors(nextErrors);
                        return;
                      }

                      setIsSubmitted(true);
                      clearCart();
                    }}
                    disabled={items.length === 0}
                  >
                    Place order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
