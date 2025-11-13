// src/app/dashboard/produto/[id]/editar/page.tsx
"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Produto } from '@/app/interfaces/product.interface';

export default function EditarProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduto() {
      try {
        const res = await fetch(`/api/dashboard/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduto(data);
        } else {
          throw new Error('Product not found');
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduto();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!produto) return;

    try {
      const res = await fetch(`/api/dashboard/products/${produto.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.message || 'Update failed');
      }

      router.push('/dashboard');
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  if (loading) return <p className="mt-6">Loading...</p>;
  if (error) return <p className="mt-6 text-red-600">{error}</p>;
  if (!produto) return <p className="mt-6">Product not found.</p>;

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Editar Produto</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-[#31394c] p-6 rounded shadow">
        {error && <p className="text-red-600">{error}</p>}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input value={produto.nome} onChange={(e) => setProduto({ ...produto, nome: e.target.value })} type="text" required className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input value={produto.valor} onChange={(e) => setProduto({ ...produto, valor: parseFloat(e.target.value) })} type="number" step="0.01" required className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input value={produto.quantidade} onChange={(e) => setProduto({ ...produto, quantidade: parseInt(e.target.value, 10) })} type="number" required className="mt-1 w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Created at</label>
          <input value={produto.dataFabricacao} onChange={(e) => setProduto({ ...produto, dataFabricacao: e.target.value })} type="date" required className="mt-1 w-full p-2 border rounded" />
        </div>
        <button className="w-full bg-amber-500 text-white py-2 rounded">Salvar Alterações</button>
      </form>
    </main>
  );
}
