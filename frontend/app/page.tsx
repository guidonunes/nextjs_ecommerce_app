import ProdutoCard from "./components/ProductCard";
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
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Availabe in stock</h1>
      {products.length === 0 ? (
        <p>Sorry! We are out of stock.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
          <ProdutoCard key={product.id} produto={product}/>
      ))}
        </div>
      )}
    </main>
  );
}
