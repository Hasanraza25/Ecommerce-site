"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && isHydrated) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isHydrated]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.currentSlug !== slug));
    toast.success("Item removed from cart!", {
      autoClose: 2000,
      closeButton: false,
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.discountedPrice * item.quantity,
      0
    );
  };

  const handleQuantityChange = (slug, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
