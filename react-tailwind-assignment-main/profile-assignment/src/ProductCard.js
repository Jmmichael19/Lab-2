import React from "react";

// Example Product Data
const products = [
  { id: 1, name: "Product 1", price: "₱10" },
  { id: 2, name: "Product 2", price: "₱20" },
  { id: 3, name: "Product 3", price: "₱30" },
  { id: 4, name: "Product 4", price: "₱40" },
  { id: 5, name: "Product 5", price: "₱50" },
  { id: 6, name: "Product 6", price: "₱60" },
  { id: 7, name: "Product 7", price: "₱70" },
  { id: 8, name: "Product 8", price: "₱80" },
  { id: 9, name: "Product 9", price: "₱90" },
  { id: 10, name: "Product 10", price: "₱100" },
];

function ProductCard() {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-all duration-200"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductCard;
