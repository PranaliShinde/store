import React from "react";
import './brands.css'

export function Brands()
{
    return(
<div className="container">
    <div className="row">
        
            <div className="col-md-3">
    
                        
            </div>
        
        <div id="carousel-example-category" className="carou" data-ride="carousel">
            <div className="carousel-inner">
                
                
                <div className="item active">
                    <div className="row">

                    <div className="col-1"></div>
                        <div className="col-2" id="b1">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={require('../images/ponds.jpg')} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1"></div>
                        <div className="col-2" id="b2">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={require('../images/amul.jpg')} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-1"></div>
                        <div className="col-2" id="b3">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={require('../images/fortune.jpg')} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1"></div>
                        <div className="col-2 " id="b4">
                            <div className="col-item">
                                <div className="photo">
                                    <img src={require('../images/nestle.jpg')} className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
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
