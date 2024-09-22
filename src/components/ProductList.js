import React from 'react';
import '../App.css';

const ProductList = ({ product, onAddToCart }) => {
  // If `product` is passed as a prop, use it; otherwise, use default products.
  const defaultProducts = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const products = product || defaultProducts;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((productItem, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img
              src={productItem.url || 'https://via.placeholder.com/150'} // Fallback image if `url` is missing
              alt={productItem.name}
              width="100%"
              className="mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{productItem.name}</h2>
            <p className="mb-2">Category: {productItem.category || 'N/A'}</p>
            <p className="mb-2">Seller: {productItem.seller || 'Unknown'}</p>
            <p className="mb-4">Price: Rs. {productItem.price} /-</p>
            <button
              onClick={() => onAddToCart(productItem)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
