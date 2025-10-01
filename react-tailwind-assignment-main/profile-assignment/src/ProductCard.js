import React from "react";

const ProductWrapper = () => {
  const productImagePath = "/iPhone_17_promax.png";

  const ProductCard = ({ name, price }) => (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-all duration-200">
      <img
        src={productImagePath}
        alt={name}
        className="w-full aspect-square object-contain mb-4 rounded"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-lg text-gray-700">{price}</p>
    </div>
  );

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
        <ProductCard name="iPhone 17 Pro Max" price="₱100,000"/>
      </div>
    </main>
  );
};

export default ProductWrapper;
