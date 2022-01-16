import React from "react";
import Checkout from "./checkout";
import { Link } from "react-router-dom";

const Logged1=() =>{

  

    const loggedInUser = localStorage.getItem("email");
    console.log(loggedInUser)

    return <div className="Logged1">
       {loggedInUser ? (
      //  < Hero handleLogout = {handleLogout}/>
       <Checkout/>
      ) : (
        <div>
            <nav>
                    <Link to="/login">     
            
                        <a className="btn btn-primary">Please go back and Login to futher proceed</a>
                    </Link>
                </nav>
        </div>
      )}
      </div>

      
  
  }

  export default Logged1;