import React, { createContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "";
  };

  const readCartCookie = () => {
    const raw = getCookie("cart");
    if (!raw) return [];
    try {
      const parsed = JSON.parse(decodeURIComponent(raw));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const compactItem = (item) => ({
    id: item.id,
    title: item.title,
    author: item.author,
    price: item.price,
    image: item.image,
    quantity: item.quantity,
  });

  const writeCartCookie = (nextItems) => {
    const compact = nextItems.map(compactItem);
    const value = encodeURIComponent(JSON.stringify(compact));
    document.cookie = `cart=${value}; path=/; max-age=604800; samesite=lax`;
  };

  const [items, setItems] = useState(() => readCartCookie());
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product, options = {}) => {
    const safeQuantity =
      Number.isFinite(options.quantity) && options.quantity > 0
        ? options.quantity
        : 1;
    const autoCloseMs = Number.isFinite(options.autoCloseMs)
      ? options.autoCloseMs
      : 1000;
    const nextProduct = {
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      image: product.image,
    };

    setItems((prev) => {
      const existing = prev.find((item) => item.id === nextProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === nextProduct.id
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }
      return [...prev, { ...nextProduct, quantity: safeQuantity }];
    });
    if (options.open !== false) {
      openCart();
      if (autoCloseMs > 0) {
        setTimeout(() => {
          setIsOpen(false);
        }, autoCloseMs);
      }
    }
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  useEffect(() => {
    writeCartCookie(items);
  }, [items]);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, itemCount, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
