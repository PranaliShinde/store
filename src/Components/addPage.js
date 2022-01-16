import React from "react";
import './addupdatedelete.css'

import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";


export function AddProduct()
{

  const[data,setData]=useState({});

  const[grocery,setGrocery]=useState('');
  //form handler function

  const handleForm=(e)=>{
    console.log("data log-");
    console.log(data);
    console.log(grocery);
    postDatatoServer(data,grocery);
    e.preventDefault();

  }


  //creating func to post data on server

  const postDatatoServer=(data,grocery)=>{

    console.log("inside post");
    console.log(grocery.grocery);

    if(grocery.grocery==="Fruits")
    {
      console.log("fruits");
      axios.post(`${base_url}/fruits`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    else if(grocery.grocery==="Vegetables")
    {
      axios.post(`${base_url}/vegetables`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    else if(grocery.grocery==="Food grains, oil and Masala")
    {
      axios.post(`${base_url}/masalas`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )

    }
    else if(grocery.grocery==="Eggs, Meat and Fish")
    {
      axios.post(`${base_url}/nonvegs`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    else if(grocery.grocery==="Bakery,Cakes and Dairy")
    {
      axios.post(`${base_url}/cakes`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    else if(grocery.grocery==="Beverages")
    {
      axios.post(`${base_url}/beverages`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
    else if(grocery.grocery==="Beauty and Skin Care")
    {
      axios.post(`${base_url}/beautys`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )

    }
    else if(grocery.grocery==="Baby Care")
    {
      axios.post(`${base_url}/babys`,data).then(
        (response)=>{
          console.log(response.data);
        },
        (error)=>{
          console.log(error);
        }
      )

    }


  }

      
    return <div class="login-form">
    <form onSubmit={handleForm}>
      <h1>Enter New Product Details</h1>
    <div class="content">
        <div class="input-field">

        <label id="ad1" htmlFor="grocery">Select Category</label>
        <div>
        <select name="grocery" id="grocery" className="col-5" onChange={(e)=>{
          console.log(e.target.value);
          setGrocery({grocery:e.target.value});}}>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Food grains, oil and Masala">Food grains, oil and Masala</option>
            
            <option value="Eggs, Meat and Fish">Eggs, Meat and Fish</option>
            <option value="Bakery,Cakes and Dairy">Bakery,Cakes and Dairy</option>
            <option value="Beverages">Beverages</option>
            <option value="Beauty and Skin Care">Beauty and Skin Care</option>
            <option value="Baby Care">Baby Care</option>
            
        </select>
        </div>
        </div>

        <div class="input-field">
            <label htmlFor="price" id="ad3">Enter Price</label>

          <input type="text" placeholder="Price" id="price" onChange={(e)=>{setData({...data,price:parseFloat(e.target.value)});}}/>
        </div>


        <div class="input-field">
            <label htmlFor="title" id="ad2">Enter Title</label>
          <input type="text" placeholder="title" id="title" onChange={(e)=>{setData({...data,title:e.target.value});}}/>
        </div>

        
        <div class="input-field">
            <label htmlFor="description" id="ad4">Enter Description</label>

          <input type="text" placeholder="Description" id="description" onChange={(e)=>{setData({...data,description:e.target.value});}} />
        </div>

        <div class="input-field">
            <label htmlFor="image_path" id="ad5">Enter Image Path</label>

            <input type="text" placeholder="Image Path" id="image_path" onChange={(e)=>{setData({...data,image_path:e.target.value});}}/>
                
        </div>
        
    </div>
      <div class="action">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  }