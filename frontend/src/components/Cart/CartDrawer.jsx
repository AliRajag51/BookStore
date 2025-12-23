import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart.js";

function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeCart}
        role="button"
        tabIndex={0}
        aria-label="Close cart overlay"
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
            <p className="text-sm text-gray-600">Review your selected books</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center text-gray-600 mt-12">
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="text-sm mt-2">Add a book to get started.</p>
              <button
                type="button"
                className="inline-flex mt-6 px-5 py-2 rounded-lg bg-black text-white text-sm"
                onClick={() => {
                  closeCart();
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#free-courses";
                    return;
                  }
                  document
                    .getElementById("free-courses")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse books
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl border border-gray-100 p-4 hover:shadow-sm transition"
                >
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500">by {item.author}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-pink-600">
                        Free
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full border border-gray-200 hover:bg-gray-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full border border-gray-200 hover:bg-gray-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-5 space-y-3">
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:from-pink-600 hover:to-purple-700 transition"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
