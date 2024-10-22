import { Product } from "@/types/types";

export async function getProducts() {
  try {
    const res = await fetch(
      "https://hadoki.site/api/data.json",
    );
    const products = await res.json();
    return products as Product[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
