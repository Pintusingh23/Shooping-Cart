import React from 'react';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">E-Commerce</a>
        <div>
          <a href="/products" className="text-gray-300 hover:text-white mx-4">Products</a>
          <a href="/cart" className="text-gray-300 hover:text-white mx-4">Cart ({cartItems.length})</a>
          <a href="/signup" className="text-gray-300 hover:text-white mx-4">Sign Up</a>
          <a href="/signin" className="text-gray-300 hover:text-white mx-4">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
