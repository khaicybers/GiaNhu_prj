import { getProducts } from "@/actions/products";
import { ProductCard } from "@/components/product-card";

export default async function Home() {
  const products = (await getProducts()) || [];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-gray-50 to-blue-100">
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 relative">
        {/* Heading Section with Dog Image */}
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-10 drop-shadow-lg relative">
          🛍️ Shop Thứ Cưng
          {/* Dog Image Positioned Over Title */}
          <img 
            src="https://matpetfamily.com/wp-content/uploads/2018/01/dog2.png" 
            alt="Parson Russel"
            className="absolute w-50 h-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          />
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 animate-slide-in" />

        {/* Products Grid with Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Call-to-action Button with Animation */}
        <div className="text-center mt-12">
          <a
            href="#shop"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-bounce"
          >
            Explore More Products
          </a>
        </div>
      </main>
    </div>
  );
}
