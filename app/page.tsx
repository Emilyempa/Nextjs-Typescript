import ProductCard from "./components/ProductCard";

export default function Home() {

  const products = [
    { title: "Product 1", description: "Description of product 1" },
    { title: "Product 2", description: "Description of product 2" },
    { title: "Product 3", description: "Description of product 3" },
  ];
  return (
    <main>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
        />
      ))}
    </main>
  );
}