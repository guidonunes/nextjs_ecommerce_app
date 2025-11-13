// Exemplo: src/components/AddToCartButton.tsx
"use client";

import React from 'react';
import { Produto } from '@/app/interfaces/product.interface';
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: Produto }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, 1)}
      className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg"
    >
      Add to Cart
    </button>
  );
}
