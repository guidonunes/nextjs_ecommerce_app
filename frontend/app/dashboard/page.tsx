"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Produto } from "../interfaces/product.interface";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Produto[]>([]);
  const router = useRouter();


  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if(!token) {
      router.push('/dashboard/login');
      return;
    }

    if(!token) {
      window.location.href = '/admin/login';
      return;
    }
    fetchProducts();
  }, [router]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/dashboard/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id?: number) => {
    if(!id) return;
    if(!confirm('Are you sure you want to delete this product?')) {
      return;
    }
    try {
      const response = await fetch(`/api/dashboard/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response.ok) {
        alert('Failed to delete product.');
        return;
      } else {
        fetchProducts();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      alert(`Error deleting product: ${message}`);
    }
  }
  return (
    <main className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href="/dashboard/product/new" className="px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-300 shadow-md">Add New Product</Link>
      </div>

      {loading ? (
        <p className="mt-6">Loading products...</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full bg-[#31394c] rounded-lg border border-gray-700 shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-3 border border-gray-700">ID</th>
                <th className="px-6 py-3 border border-gray-700">Name</th>
                <th className="px-6 py-3 border border-gray-700">Price</th>
                <th className="px-6 py-3 border border-gray-700">Stock</th>
                <th className="px-6 py-3 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-4">No products found.</td>
                  </tr>
                )
              }
              {Array.isArray(products) && products.map((p) => (
                <tr key={p.id} className="border-t border border-gray-700 hover:bg-gray-600">
                  <td className="px-6 py-4 border border-gray-700">{p.id}</td>
                  <td className="px-6 py-4 border border-gray-700">{p.nome}</td>
                  <td className="px-6 py-4 border border-gray-700">${p.valor.toFixed(2)}</td>
                  <td className="px-6 py-4 border border-gray-700">{p.quantidade}</td>
                  <td className="px-6 py-4 border border-gray-700 flex gap-2">
                  <Link href={`/dashboard/product/${p.id}/edit`} className="px-3 py-1 bg-blue-500 text-white rounded flex">Edit</Link>
                  <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded flex">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
