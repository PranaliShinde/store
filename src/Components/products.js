import React from "react";



export const products = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser')));

console.log("products: ")
console.log(products.length)

export const len=products.length

const total=()=>{
    var l=0;
    var i;
    for(i=0; i < products.length; i++){
        l+= parseFloat(`${products[i].price}`)*(`${products[i].quantity}`)
    }
    console.log(l);
    return l;
  
  }

  export const tot=total();


  


  
  