"use client";

import { Produto } from "@/app/interfaces/product.interface";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CartItem = Produto & { quantity: number };


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Produto, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {

    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
      return raw ? (JSON.parse(raw) as CartItem[]) : [];

    } catch(e) {
      console.warn('Failed to parse cart items from localStorage:', e);
      return [];
    }
  });
    useEffect(() => {
        try {
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch(e) {
          console.warn('Failed to save cart items to localStorage:', e);
        }

    }, [cartItems]);

    function addToCart(product: Produto, quantity: number = 1) {
      setCartItems((prev) => {
        const existing = prev.find((p) => p.id === product.id);
        if (existing) {
          return prev.map((p) => p.id === product.id ? {...p, quantity: p.quantity + quantity} : p);
        }
        return [...prev, {...product, quantity}];

      });
      alert(`${product.nome} added to the cart!`);
    }

    function removeFromCart(productId: number) {
      setCartItems((prev) => prev.filter((p) => p.id !== productId));
      alert(`Product removed from the cart!`);

    }

    function clearCart() {
      setCartItems([]);
      alert('Cart cleared!');
    }


    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.valor, 0);

    return (
      <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice
      }}>
        {children}
      </CartContext.Provider>
    );
}

export function useCart() {
  const context =  useContext(CartContext);
  if(!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
