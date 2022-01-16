import React,{useState,useEffect} from "react";
import './HomePage.css'
import  Select  from 'react-select';
import productAPI from './Search'

let productList=productAPI.all()

const searchList = productList.map(
    ({ product_name }) => {
      return{ 
       value: product_name, 
       label: product_name 
      }
     }
    );

export function HomePage()
{
    const[selectedOption,setSelectedOption]=useState(null)

       handleChange = selectedOption => {
        this.setState({ selectedOption })
        // code to make something happen after selecting an option
       }
    render()
    {
      return <div className="grid-container">
      <header>
        <a href="/">Grocery Store</a>
            <div>
            <Select
                value={selectedOption}
                options={searchList}
                onChange={this.handleChange.bind(this)}
                placeholder= "Search..."
                openMenuOnClick={false}/>
            </div>
      </header>
      <main>
        Product List
      </main>
      <footer>
        About Us
      </footer>
    </div>

    }
}

