// src/components/ProdutoCard.tsx
import { Produto } from '../interfaces/product.interface';
import Link from 'next/link';
import AddToCartButton from './addToCartButton';

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProdutoCardProps) {
  return (
    <Link href={`/products/${produto.id}`} className="bg-[#31394c] border border-gray-700 rounded-lg p-6 py-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-semibold text-white truncate">{produto.nome}</h2>
      <p className="text-xl text-amber-500 font-medium mt-2">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(produto.valor)}
      </p>
      <div className="mt-4">
        <AddToCartButton product={produto} />
      </div>
    </Link>
  );
}
