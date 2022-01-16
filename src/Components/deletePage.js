import React from "react";
import './addupdatedelete.css'
import base_url from "../api/bootapi";
import axios from "axios";
import { useEffect,useState } from "react";


export function DeleteProduct()
{

  const[title,setData]=useState('');

  const[grocery,setGrocery]=useState('');
  //form handler function

  const handleForm=(e)=>{
    console.log("data log-");
    console.log(title.title);
    console.log(grocery);
    deleteDatatoServer(title.title,grocery);
    e.preventDefault();

  }


  //creating func to post data on server

  const deleteDatatoServer=(data,grocery)=>{

    console.log("inside post");
    console.log(grocery.grocery);

    if(grocery.grocery==="Fruits")
    {
      console.log("fruits");
      axios.delete(`${base_url}/fruits/${data}`).then(
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
      axios.delete(`${base_url}/vegetables/${data}`).then(
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
      axios.delete(`${base_url}/masalas/${data}`).then(
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
      axios.delete(`${base_url}/nonvegs/${data}`).then(
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
      axios.delete(`${base_url}/cakes/${data}`).then(
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
      axios.delete(`${base_url}/beverages/${data}`).then(
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
      axios.delete(`${base_url}/beautys/${data}`).then(
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
      axios.delete(`${base_url}/babys/${data}`).then(
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
      <h1>Enter details of product you want to delete</h1>
    <div class="content">
        <div class="input-field">

        <label id="ad1" htmlFor="grocery" >Select category</label>
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
            <label htmlFor="title" id="ad2">Enter title of product which you want to delete</label>
          <input type="text" placeholder="title" id="title" onChange={(e)=>{setData({title:e.target.value});}}/>
        </div>


        
    </div>
      <div class="action">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
  }