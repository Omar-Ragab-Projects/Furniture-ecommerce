"use client";
import { createContext } from "react";
import furniture from "@/lib/furnitures.json";
import { useState } from "react";

type ProductsProps = typeof furniture.products;

type ProductsContextType = {
  products: ProductsProps;
  setProducts: React.Dispatch<React.SetStateAction<ProductsProps>>;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

function FurnitureContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [products, setProducts] = useState(furniture.products);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default FurnitureContext;
