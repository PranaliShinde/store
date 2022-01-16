import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src={require('../images/arrow.jpg')} alt="arrow" className="arrow-icon" />
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
          <img src={require('../images/cart.jpg')} alt="cart-logo" />
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
