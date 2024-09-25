import Hero from "@/components/shared/hero";
import ProductList from "./products/product-list";

export default function Home() {
  return (
    <>
    <Hero/>
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ProductList/>
    </div>
    
    </>
  );
}
