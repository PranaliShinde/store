import React from "react";
import './afterLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-slideshow-image/dist/styles.css'
import { ProdList } from "./productList";
import { BestOffers } from "./bestOffers";
import { Brands } from "./brands";
import { Link } from 'react-router-dom';
import App1 from "./App1";


export class AfterLogin extends React.Component
{
    componentDidMount(){
        console.log(this.props.propemail)
    }
    render()
    {
      return <div className="container">
    <div id="header" className="row justify-content-start">
      
            <div className="col-3"> 
            <img src={require('../images/logo.jpg')} id="logo"/>
 
            <p ><b>Grocery Store</b></p>

            </div>
            
            <div className="col-4">      
                <form>
                    <input type="text" id="filter" placeholder="Search grocery"  onChange={this.handleInputChange}/>
                </form>
            </div>

            <div className="col-2">
                            <h4>{this.props.emailid}</h4>
                            <nav>
                                <Link to="/login/cart">     
            
                                    <a href="" id="cart" ><b> Cart</b></a>

                                </Link>
                            </nav>
                            



            </div>
            <div className="col-1"> 
            <nav>
                    <Link to="/login/logout">     
                    
                <a href="" id="logout" ><b> Logout</b></a>
                    </Link>
            </nav>

            </div>

            <div className="col-2">   
            <nav>
                    <Link to="/admin">    
                <a href="" id="adminlogin" ><b>Admin Login</b></a>
                    </Link>
            </nav>
            </div>

            
    </div>

    {/* <div className="row" id="category">

        <label htmlFor="grocery">Select by Category</label>

            <select name="grocery" id="grocery" className="col-5">
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Food grains, oil and Masala">Food grains, oil and Masala</option>
                <option value="Bakery,Cakes and Dairy">Bakery,Cakes and Dairy</option>
                <option value="Eggs, Meat and Fish">Eggs, Meat and Fish</option>
                <option value="Beverages">Beverages</option>
                <option value="Kitchen,Garden">Kitchen, Garden</option>
                <option value="Household and Cleaning">Household and Cleaning</option>
                <option value="Beauty and Skin Care">Beauty and Skin Care</option>
                <option value="Baby Care">Baby Care</option>
            </select>
    </div> */}

    
    <div id="main">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

            </ol>
         <div className="carousel-inner active">
            <div className="carousel-item active" data-bs-interval="200">
             <img src={require('../images/slide_1.jpg')}
                 className="d-block w-100" alt="First Slide"/>
            </div>
            <div className="carousel-item" data-bs-interval="200">
             <img src={require('../images/slide_2.jpg')}
                className="d-block w-100" alt="Second Slide"/>
            </div>
            <div className="carousel-item " data-bs-interval="200">
             <img src={require('../images/slide_3.jpg')}
                className="d-block w-100" alt="Third Slide"/>
            </div>
            <div className="carousel-item " data-bs-interval="200">
             <img src={require('../images/slide_4.jpg')}
                className="d-block w-100" alt="Fourth Slide"/>
            </div>
        </div>
 
    </div>

  <a className="carousel-control-prev" href="#carouselExampleControls" data-target="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" data-target="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
    </div>    

    <div className="row">
        <div className="col-5">
        </div>
        <div className="col-7">
        <p id="selectByCategory"><b>Select by Category</b></p>

        </div>

    </div>

    <div >
        <ProdList/>
    </div>
      
    <div className='row'>
        <div className='col-5'></div>
        <div className='col-7'>
            <p id="bestoffer"><b>Best Offers</b></p>

        </div>
    </div>
	
    <div id="offer">
        <BestOffers/>
    </div>
    
    <div className='row'>
        <div className='col-5'></div>
        <div className='col-7'>
            <p id="brand"><b>Brand Store</b></p>

        </div>
    </div>
	
    <div id="brrender" >
        <Brands/>
    </div>
    

    <div id="footer" className="row">
      
        <a href="" id="f1" className="col-3">
        About Us
        </a>
        <a href="" id="f2" className="col-3">
        FAQs
        </a>
        <a href="" id="f3" className="col-3">
        Contact Us 
        </a>
        <a href="" id="f4" className="col-3">
        Terms and Conditions
        </a>
      
    </div>
  </div>

    }
}