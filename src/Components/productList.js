import React from "react";
import { Fruit } from "./category/fruits";
import './productList.css'
import { Link } from 'react-router-dom';

export function ProdList()
{
    return(
<div className="container1">
    <div className="row">
        
            <div className="col-md-3">
    
                        
            </div>
        
        <div id="carousel-example-category" className="caro" data-ride="carousel">
            <div className="carousel-inner">
                
                
                <div className="item active">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                    <nav>
                                        <Link to="/fruits">
      
                                    <img src={require('../images/fruits.jpg')} className="img-responsive" alt="a" />
                                    </Link>
                                    </nav>
                                    
                                </div>
                                
                                <div className="info">
                                    <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-4">
                                                </h5>

                                            <h5 className="col-sm-5">
                                               <b>Fruits</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/masala">
      
                                    <img src={require('../images/food_grains_oil_masala.jpg')} className="img-responsive" alt="a" />
                                    </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-2">
                                                </h5>

                                            <h5 className="col-sm-10">
                                               <b>Food grains, Oil and Masala</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/vegetables">
      
                                    <img src={require('../images/vegetables.jpg')} className="img-responsive" alt="a" />
                                    </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-4">
                                                </h5>

                                            <h5 className="col-sm-5">
                                               <b>Vegetables</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/meat">
      
                                    <img src={require('../images/eggs_meat_fish.jpg')} className="img-responsive" alt="a" />
                                    </Link>                               
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-2">
                                                </h5>

                                            <h5 className="col-sm-8">
                                               <b>Eggs, Meat and Fish</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="col-sm-3" id="c1">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/bakery">
      
                                    <img src={require('../images/bakery_cakes_dairy.jpg')} className="img-responsive" alt="a" />
                                        </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-2">
                                                </h5>

                                            <h5 className="col-sm-8">
                                               <b>Bakery, Cakes and Dairy</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                      

                        <div className="col-sm-3" id="c2">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/beverages">
      
                                    <img src={require('../images/beverages2.jpg')} className="img-responsive" alt="a" />
                                        </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-4">
                                                </h5>

                                            <h5 className="col-sm-5">
                                               <b>Beverages</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3" id="c3">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/beautycare">
      
                                    <img src={require('../images/beauty_skin_care.jpg')} className="img-responsive" alt="a" />
                                        </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-2">
                                                </h5>

                                            <h5 className="col-sm-8">
                                               <b>Beauty and Skin Care</b> </h5>
                                        </div>
                                        
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" id="c4">
                            <div className="col-item">
                                <div className="photo">
                                <nav>
                                        <Link to="/babycare">
      
                                    <img src={require('../images/baby_care.jpg')} className="img-responsive" alt="a" />
                                        </Link>
                                </nav>
                                </div>
                                <div className="info">
                                <div className="row">
                                        <div className="price1">
                                        <h5 className="col-sm-3">
                                                </h5>

                                            <h5 className="col-sm-7">
                                               <b>Baby Care Products</b> </h5>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
</div>
    )}
