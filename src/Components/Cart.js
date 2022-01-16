import React, { useState, createContext, useContext, useReducer } from "react";
import "./cart.css";
import { products } from "./products";
import {len} from './products';
import {tot} from './products';
import ContextCart from "./ContextCart";

// create a context
export const CartContext = createContext();



const initialState = {
  item: products,
  totalAmount: tot,
  totalItems: len,
  quantity: 1,
};

const Cart = () => {
  // inPlace of useState we will use the useReducer Hook
  // const [item, setItem] = useState(products);

  //const [state, dispatch] = useReducer(reducer, initialState);

   const [state, setstate] = useState(initialState)


  const removeItem = (id) => {
    // return dispatch({
    //   type: "REMOVE_ITEM",
    //   payload: id,
    // });

    const loggedInUser = localStorage.getItem("email");

    let products = [];

     if(loggedInUser){
      products = JSON.parse(localStorage.getItem(loggedInUser));
       }
      var i;
      let products1=[];
       for(i=0;i<products.length;i++)
       {
         if(products[i].id===id)
         {
           console.log(id);
         }
         else{
             products1.push(products[i]);
         }
       }
       console.log(products1);
       localStorage.setItem(loggedInUser, JSON.stringify(products1));
  
       setstate(initialState);
  
  };

  const increment = (id) => {
    // return dispatch({
    //   type: "INCREMENT",
    //   payload: id,
    // });
    const loggedInUser = localStorage.getItem("email");

    let products = [];

     if(loggedInUser){
      products = JSON.parse(localStorage.getItem(loggedInUser));
       }
      var i;
      let products1=[];
       for(i=0;i<products.length;i++)
       {
         if(products[i].id===id)
         {
          products[i].quantity=products[i].quantity+1;
        }
       }

       console.log(products);
       localStorage.setItem(loggedInUser, JSON.stringify(products));
  
       setstate(initialState);
  
  };

  const decrement = (id) => {
    // return dispatch({
    //   type: "DECREMENT",
    //   payload: id,
    // });

    const loggedInUser = localStorage.getItem("email");

    let products = [];

     if(loggedInUser){
      products = JSON.parse(localStorage.getItem(loggedInUser));
       }
      var i;
      let products1=[];
       for(i=0;i<products.length;i++)
       {
         if(products[i].id===id)
         {
          products[i].quantity=products[i].quantity-1;
        }
       }

       console.log(products);
       localStorage.setItem(loggedInUser, JSON.stringify(products));
  
       setstate(initialState);
  
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;
