import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover mb-4 rounded-lg" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
