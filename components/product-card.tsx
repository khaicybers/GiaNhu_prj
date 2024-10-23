"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";
import usePetStore from "@/store/petStore";

export function ProductCard({ product }: { product: Product }) {
  const addPet = usePetStore((state) => state.addPet);
  
  // Log the product to check its structure
  console.log('Product:', product);

  const imageSrc = product.images?.[0] || '/default-image.jpg'; // Fallback image

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageSrc}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button onClick={() => addPet(product)} className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
