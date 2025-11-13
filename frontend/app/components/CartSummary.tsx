// Exemplo: src/components/CartSummary.tsx
"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartSummary() {
  const { cartItems, totalItems, totalPrice, removeFromCart, clearCart } = useCart();

  return (
    <aside className="bg-[#31394c] p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h3 className="font-bold text-xl mb-4 text-white">My Cart</h3>
      <table className="min-w-full border rounded overflow-hidden">
        <thead className="bg-[#31394c] text-white  rounded-lg">
          <tr>
            <th className="px-4 py-2 border border-gray-700 text-left">Product</th>
            <th className="px-4 py-2 border border-gray-700 text-center">Quantity</th>
            <th className="px-4 py-2 border border-gray-700 text-center">Price per Unit</th>
            <th className="px-4 py-2 border border-gray-700 text-center">Total</th>
            <th className="px-4 py-2 border border-gray-700 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">Cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((i) => (
              <tr key={i.id} className="border-b hover:bg-gray-600">
                <td className="px-4 py-3 border border-gray-700 font-medium text-white">{i.nome}</td>
                <td className="px-4 py-3 border border-gray-700 text-center">{i.quantity}</td>
                <td className="px-4 py-3 border border-gray-700 text-center">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.valor)}</td>
                <td className="px-4 py-3 border border-gray-700 text-center">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.valor * i.quantity)}</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <button onClick={() => { if (i.id != null) removeFromCart(i.id); }} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Remove</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="font-semibold">Total items:</span> {totalItems}
        </div>
        <div>
          <span className="font-semibold">Total:</span> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice)}
        </div>
        <button onClick={clearCart} className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition font-semibold">Empty cart</button>
      </div>
    </aside>
  );
}
