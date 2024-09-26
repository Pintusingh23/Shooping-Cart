import React, { useContext, useState } from "react";
import Classes from "./navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={Classes.navbar}>
      <div className={Classes.nav_logo}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <button className={Classes.hamburger} onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`${Classes.nav_menu} ${isMobileMenuOpen ? Classes.mobileMenuActive : ''}`}>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className={Classes.cart}>
        <Link to='/signin'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className={Classes.nav_cart_count}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
