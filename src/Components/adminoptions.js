import React from "react";
import { Link } from 'react-router-dom';
import './adminoptions.css'
 
export function AdminOptions()
{
   
    return <div className="admin">
            
            
             <label id="adminlabel">Admin have below options/access</label>
                 <nav>
                    <Link to="/add">
                        <a  className="btn btn-primary btn-lg" id="add"> Add New Product </a>
                    </Link>
                </nav>
                <nav>
                    <Link to="/update">
                        <a  className="btn btn-primary btn-lg" id="update"> Update Existing Product </a>
                   </Link>
               </nav>
               <nav>
                    <Link to="/delete">
                        <a className="btn btn-primary btn-lg" id="delete"> Delete Existing Product </a>
                    </Link>
               </nav>
            
        </div>
    
}