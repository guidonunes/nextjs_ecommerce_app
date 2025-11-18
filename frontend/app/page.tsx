import ProdutoCard from "./components/ProductCard";
import { ProdutoCard3D } from "./components/ui/cards/CardsProduct";
import Hero  from "./components/ui/hero/Hero";
import { InfoSection } from "./components/ui/info/InfoSection";

import { Produto } from "./interfaces/product.interface";

async function getProducts(): Promise<Produto[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/dashboard/products`,
      {cache: 'no-store'}
    );

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();

  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }

}

export default async function HomePage() {
  const products = await getProducts();
  console.log('Products:', products);

  return (
    <>
      <Hero />
      <InfoSection />
      <main className="container mx-auto mt-8 sm:mt-12 px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white"><span className="text-red-500">Availabe</span> in stock</h2>
        {products.length === 0 ? (
          <p>Sorry! We are out of stock.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
            <ProdutoCard3D key={product.id} produto={product}/>
        ))}
          </div>
        )}
      </main>
      </>
  );
}
