import React from "react";
import fruitAPI from './fruitsdata'
import './category.css'
import App1 from "../App1";
import Checkout from "../checkout";
import { Link } from "react-router-dom";
import base_url from "../../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";
import { Toast } from "bootstrap";
import Bot1 from "../chatrender";



const Logged=(id,title,description,price,image) =>{

  

  const loggedInUser = localStorage.getItem("email");
  console.log(loggedInUser)
  if (loggedInUser) {
    //when logged in-add to cart
    console.log("Hello");

    let products = [];
    if(localStorage.getItem(loggedInUser)){
      products = JSON.parse(localStorage.getItem(loggedInUser));
      }
    products.push({'id' : id ,'title':title, 'descrption':description, 'price':price, 'image':image,'quantity':1});
    console.log(products);
    localStorage.setItem(loggedInUser, JSON.stringify(products));

    

}
else{
      //not logged in-
      console.log("Hello1");
      alert("Please go back and login to proceed further!!");
}
}






export function Fruit()
{
    //let fruitList= fruitAPI.all()

    // function to call server
     const getAllFruits=()=>{
       axios.get(`${base_url}/fruits`).then(
        (response)=>{
            console.log(response.data);
             //Toast.success("fruits has been loaded");
             setFruit(response.data);
         },
         (error)=>{
             console.log(error);
             //Toast.error("Something went wrong");
         }
       )
     }

     //loading above function
     useEffect(()=>{
       console.log("in fruits-js");
       getAllFruits();
     },[]);

     const[fruitList,setFruit]=useState([]);



    console.log(fruitList)
    return <div>
            <label id="labelFruits"><b>Fruits</b></label>
            <div className="row" >
    { fruitList.map(fruit=>(
        <div className="col-3" key={fruit.id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img id="imgser" src={fruit.image_path} alt={fruit.title} />
              </div>
              <div className="content">
                <div className="header" id="fr1"><b>{fruit.title}</b></div>
                <div className="description" id="fr2">{fruit.description}</div>
                <div className="meta price1" id="fr3"><b>Rs. {fruit.price}</b></div>
                <div className="col-sm-2"></div>
                <div className='col-sm-4'>
                <nav>
                    <Link to="/checkout">     
            
                  <a className="btn btn-primary" id="buy"  > Buy </a>
                    </Link>
                </nav>

                </div>
                <div className="col-sm-4"></div>

                <div className='col-sm-4'>
									<a className="btn btn-primary" id="btnCart" onClick={()=>Logged(fruit.id,fruit.title,fruit.description,fruit.price,fruit.image_path)} >Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>  
    ))
    }
          </div>



          <div>
             <Bot1/>
          </div>

       </div>
}

 


   
