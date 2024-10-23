import { Product } from "@/types/types";

export async function getProducts() {
  try {
    const res = await fetch(
      "https://hadoki.site/api/data.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const products = await res.json();
    return products as Product[];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
