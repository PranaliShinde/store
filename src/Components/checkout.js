import React from "react";
import { Link } from "react-router-dom";

  

 function Checkout(){


    return(
        <>
            <div className="jumbotron text-center">
                <div>
                <h1>Thank You for buying!</h1>
                <p><strong>Visit Again</strong> to check our new grocery</p>
                
                <nav>
                    <Link to="/login">     
            
                        <a className="btn btn-primary">Continue to Homepage</a>
                    </Link>
                </nav>
                
                </div>
            </div>
        </>
    )
}

export default Checkout;