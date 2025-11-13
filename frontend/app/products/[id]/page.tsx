// src/app/produtos/[id]/page.tsx
import AddToCartButton from "@/app/components/addToCartButton";
import { Produto } from "../../interfaces/product.interface";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduto(id: string): Promise<Produto> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/dashboard/products/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound(); // Função do Next.js para renderizar a página 404
  }

  return response.json();
}

// O componente recebe os parâmetros da URL através da prop 'params'
export default async function ProdutoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const produto = await getProduto(id);

  return (
    <main className="container mx-auto p-8">
      <div className="bg-[#31394c] p-8 rounded-lg border border-gray-700 shadow-lg">
        <h1 className="text-5xl font-extrabold text-white">{produto.nome}</h1>

        <p className="text-3xl text-amber-500 my-6 font-semibold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(produto.valor)}
        </p>

        <div className="space-y-3 text-lg">
          <p><span className="font-semibold text-white">In stock:</span> {produto.quantidade}</p>
          <p><span className="font-semibold">Date of manufacture:</span> {new Date(produto.dataFabricacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
        </div>

          <div className="space-y-3 w-full mt-3">
            <AddToCartButton product={produto} />
          </div>


        <div className="mt-8">
          <Link href="/" className="text-amber-500 hover:text-amber-600 hover:underline transition-colors">
            &larr; Back to products
          </Link>
        </div>
      </div>
    </main>
  );
}
