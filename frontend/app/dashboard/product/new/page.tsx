"use client"

import { Produto } from "@/app/interfaces/product.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NovoProdutoPage() {
  const[error, setError] = useState<string | null>(null);
  const[nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);
  const [dataFabricacao, setDataFabricacao] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    // Implement product creation logic here
    try {
      const produto: Produto = { nome, quantidade, valor, dataFabricacao};
      const response = await fetch('/api/dashboard/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
      router.push('/dashboard');
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    setError(message);
    }
  }

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-[#31394c] p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">
        Add a New Product
      </h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium">Name: </label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" id="nome" name="nome" placeholder='e.g. Smartphone' className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="quantidade" className="block text-sm font-medium">Stock: </label>
          <input value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} type="number" id="quantidade" name="quantidade" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="valor" className="block text-sm font-medium">Price: </label>
          <input value={valor} onChange={(e) => setValor(Number(e.target.value))} type="number" id="valor" name="valor" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="dataFabricacao" className="block text-sm font-medium">Created at: </label>
          <input value={dataFabricacao} onChange={(e) => setDataFabricacao(e.target.value)} type="text" id="dataFabricacao" name="dataFabricacao" placeholder="2025-06-03" className="mt-1 w-full p-2 border rounded" required />
        </div>
        <button className="w-full bg-amber-500 text-black py-2 rounded">Save</button>
      </form>
    </div>
  )
}
