import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { toast, ToastContainer } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const handleCheckout = () => {
    const totalAmount = getTotalCartAmount();
  
    if (totalAmount > 0) {
      // Show success toast if cart is not empty
      toast.success("Payment Done!", {
        position: "top-center",
      });
    } else {
      // Show warning toast if cart is empty
      toast.warning("Cart is empty!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <p>product Id: {e.id}</p>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartItem-product-icon" />
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="cartItem-quantity">{cartItems[e.id]}</button>
                <p>$ {e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItem-remove-icon"
                  src={remove_icon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
      </div>

      {/* ToastContainer for showing the toast messages */}
      <ToastContainer />
    </div>
  );
};

export default CartItems;
