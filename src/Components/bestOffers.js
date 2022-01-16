import React from 'react';
import './bestOffers.css';

export function BestOffers()
{
    return(
<div className="container">
    <div className="row">

		<div className="col-md-12">

		  <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>   
			<div className="carousel-inner">
				<div className="item active">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/maggi.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Maggi Mega Pack</h4>
                                    
                                        <p>Pack of 8</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.48.00</strike> <span>Rs.40.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#"  className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/milk.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Amul Gold Milk</h4>
                                    
                                        <p>1L Pack</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.54.00</strike> <span>Rs.48.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
								
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/vaseline.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Vaseline Intensive Care</h4>
                                    
                                        <p>400 ml Pack</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.310.00</strike> <span>Rs.232.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
														
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/ceregrow.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Nestle Ceregrow</h4>
                                    
                                        <p>300gm Pack</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.292.00</strike> <span>Rs.275.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
						
					</div>
				</div>


				<div className="item">
					<div className="row">
                    <div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/nescafe.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Nescafe Gold Coffee</h4>
                                    
                                        <p>100 gm</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.475.00</strike> <span>Rs.390.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>

						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/watermelon.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Watermelon</h4>
                                    
                                        <p>1pc 1.5-2.5kg</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.170.00</strike> <span>Rs.121.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
						
                        
                        <div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/eggs.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Brown Eggs</h4>
                                    
                                        <p>6 pcs</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.72.00</strike> <span>Rs.66.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>


						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/thumsup.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Thums Up </h4>
                                    
                                        <p>750ml</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.40.00</strike> <span>Rs.35.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>
											
					</div>
				</div>


				<div className="item">
					<div className="row">
                        <div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/safola.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Safola Oil Can</h4>
                                    
                                        <p>1L</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.187.00</strike> <span>Rs.230.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>


                        <div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/butterCake.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Butter Fruit Cake</h4>
                                    
                                        <p>1pc(250gm)</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.110.00</strike> <span>Rs.99.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>


						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/oranges.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									    <h4>Fresh Oranges</h4>
                                    
                                        <p>4 pcs</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.183.00</strike> <span>Rs.130.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>


						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src={require('../images/shampoo.jpg')} className="img-responsive" alt=""/>
								</div>
								<div className="thumb-content">
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
									    <h4>Head & Shoulders Shampoo</h4>
                                    
                                        <p>Classic clean-2 pack</p>
                                    </div>
                                    
                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-10'>
                                        <p className="item-price"><strike>Rs.6699.00</strike> <span>Rs.3770.00</span></p>
                                    </div>
									
                                    <div className='col-sm-3'></div>
                                    <div className='col-sm-9'>
									
									 <div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									 </div>
                                    </div>

                                    <div className='col-sm-2'></div>
                                    <div className='col-sm-4'>
                                        <a href="#" className="btn btn-primary"> Buy </a>

                                    </div>
                                    <div className='col-sm-6'>
									    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
								</div>						
							</div>
						</div>

					</div>
				</div>

			</div>
			<a className="carousel-control left" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control right" href="#myCarousel" data-slide="next">
				<i className="fa fa-angle-right"></i>
			</a>
		    </div>
		</div>
	</div>
</div>
)}                              		