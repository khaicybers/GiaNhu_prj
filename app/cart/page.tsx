"use client";
import { Button } from "@/components/ui/button";
import usePetStore from "@/store/petStore";

export default function Cart() {
  const { pets, removePet, updateQuantity } = usePetStore((state) => state);

  const subtotal = pets.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Giỏ Hàng: ({pets.reduce((sum , i) => sum + i.quantity, 0)}) bé
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {pets.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-lg mr-6 object-cover"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-3 space-x-2">
                    <Button onClick={() => updateQuantity("decrement", item.id)} variant="outline" size="sm" className="px-3">
                      -
                    </Button>
                    <span className="mx-2 font-medium text-lg">{item.quantity}</span>
                    <Button onClick={() => updateQuantity("increment", item.id)} variant="outline" size="sm" className="px-3">
                      +
                    </Button>
                  </div>
                </div>
                <Button onClick={() => removePet(item.id)}
                  variant="destructive"
                  size="sm"
                  className="ml-4 bg-red-600 hover:bg-red-700 text-white"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-3 text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3 text-gray-700">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-md">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
