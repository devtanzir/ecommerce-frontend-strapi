"use client";

import { useState, useEffect } from "react";
import Filter from "./filter";
import BreadCrumbComponents from "@/components/shared/breadCrumbComponents";
import { getData } from "@/lib/getData";
import { Product } from "@/interfaces/products";
import ProductItem from "./product-item";
import { createId } from "@/lib/utils/utils";
import ProductsLoader from "./loading";
import NoDataFound from "@/components/animation/no-data";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    const fetchProducts = async () => {

      const { data } = await getData({
        url: process.env.NEXT_PUBLIC_GET_PRODUCTS ?? "",
      });
      setProducts(data);
      setFilteredProducts(data);
    };

    const fetchFilters = async () => {
      const { data: categoriesData } = await getData({
        url: process.env.NEXT_PUBLIC_CATEGORIES ?? "",
      });
      const { data: brandsData } = await getData({
        url: process.env.NEXT_PUBLIC_BRANDS ?? "",
      });
      setCategories(categoriesData);
      setBrands(brandsData);
      setLoader(false);
    };

    fetchProducts();
    fetchFilters();
  }, []);

  // Filter products based on selected filters
  const handleApplyFilters = (filters: {
    categories: string[];
    brands: string[];
    priceRange: [number, number];
  }) => {
    const { categories, brands, priceRange } = filters;
    const [minPrice, maxPrice] = priceRange;

    const filtered = products.filter((product) => {
      const productCategory =
        product.attributes.categories?.data[0]?.attributes?.title || "";
      const productBrand =
        product.attributes.brands?.data[0]?.attributes?.name || "";
      const productPrice = product.attributes.price;

      return (
        (!categories.length || categories.includes(productCategory)) &&
        (!brands.length || brands.includes(productBrand)) &&
        productPrice >= minPrice &&
        productPrice <= maxPrice
      );
    });

    setFilteredProducts(filtered);
  };

  if (loader) {
    return <ProductsLoader/>
  }

  return (
    <>
      <BreadCrumbComponents />
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Heading & Filters */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
              Products - ShopBD
            </h2>
            <div className="flex items-center space-x-4">
              <Filter
                onApplyFilters={handleApplyFilters}
                categories={categories}
                brands={brands}
              />
            </div>
          </div>

          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts?.length > 0
              ? filteredProducts?.map((product: Product) => (
                  <ProductItem key={createId()} product={product} />
                ))
              : <NoDataFound/>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
