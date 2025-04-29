import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ThemeController from "./components/ThemeController";

export default function Home() {
  return (
    <main>
      <ThemeController />
      <h1>Hello from Next</h1>
      <Link href="/users" className="link text-secondary">Users</Link>
      <ProductCard />
    </main>
  );
}
