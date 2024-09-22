import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cartItems);
  }, [cartItems]);

  const totalAmount = CART.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {CART.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {CART.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border rounded-lg shadow-md">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">Price: Rs. {item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Total: Rs. {totalAmount.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
