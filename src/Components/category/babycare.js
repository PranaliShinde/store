import React from "react";
import babycareAPI from "./babycaredata";
import './category.css'
import { Link } from "react-router-dom";
import base_url from "../../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";
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



export function BabyCare()
{
    //let babycareList= babycareAPI.all()

    // function to call server
 const getAllBabys=()=>{
  axios.get(`${base_url}/babys`).then(
   (response)=>{
       console.log(response.data);
        //Toast.success("babys has been loaded");
        setBaby(response.data);
    },
    (error)=>{
        console.log(error);
        //Toast.error("Something went wrong");
    }
  )
}

//loading above function
useEffect(()=>{
  getAllBabys();
},[]);

const[babyList,setBaby]=useState([]);


    return <div>
            <label id="labelFruits"><b>Baby Care</b></label>
            <div className="row" >
    { babyList.map(babycare=>(
        <div className="col-3" key={babycare.id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img id="imgser" src={babycare.image_path} alt={babycare.title} />
              </div>
              <div className="content">
                <div className="header" id="fr1"><b>{babycare.title}</b></div>
                <div className="description" id="fr2">{babycare.description}</div>
                <div className="meta price1" id="fr3"><b>Rs. {babycare.price}</b></div>
                <div className="col-sm-2"></div>
                <div className='col-sm-4'>
                <nav>
                    <Link to="/checkout">     
            
                        <a href="#" className="btn btn-primary" id="buy"> Buy </a>
                    </Link>
                  </nav>
                </div>
                <div className="col-sm-4"></div>

                <div className='col-sm-4'>
                <a className="btn btn-primary" id="btnCart" onClick={()=>Logged(babycare.id,babycare.title,babycare.description,babycare.price,babycare.image_path)} >Add to Cart</a>                </div>
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

 


   
