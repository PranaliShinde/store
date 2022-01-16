import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import { Link } from "react-router-dom";
import Bot1 from "./chatrender";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems } = useContext(CartContext);
  {
    if (item.length === 0) {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <div>
                <Bot1/>
              </div>

              <nav>
                    <Link to="/checkout">     
            
                      <button>CheckOut</button>
                    </Link>
              </nav>
            </div>
          </section>
        </>
      );
    }
  }
};

export default ContextCart;
