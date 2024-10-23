"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";
import usePetStore from "@/store/petStore";

export function ProductCard({ product }: { product: Product }) {
  const addPet = usePetStore((state) => state.addPet);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {product.images && product.images.length > 0 ? (
      <img
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={200}
      />
    ) : (
      <div className="w-[300px] h-[200px] flex items-center justify-center bg-gray-200">
        <span>Image not available</span>
      </div>
    )}
  </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button onClick={()=>addPet(product)} className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
