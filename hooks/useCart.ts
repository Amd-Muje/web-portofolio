"use client";

import { useState, useEffect, useCallback } from "react";
import { CartItem, getCart, saveCart } from "@/lib/cartStore";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setItems(getCart());
    setIsLoaded(true);
  }, []);

  // Sync to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      saveCart(items);
      // Dispatch custom event so navbar badge updates across components
      window.dispatchEvent(new Event("cart-updated"));
    }
  }, [items, isLoaded]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return {
    items,
    isLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
}

// Lightweight hook for navbar badge — reads from localStorage directly
export function useCartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = getCart();
      setCount(cart.reduce((sum, i) => sum + i.quantity, 0));
    };
    update();
    window.addEventListener("cart-updated", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("cart-updated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return count;
}
