import React from "react";
import { useState } from "react";
import App3 from "../App3";
import './chatrender.css';

function Bot1(){

    
    let [showChat, setShowChat] = useState(false);

    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }

    return(

        <div className = "bot">
        {/* <div style ={{display: showChat ? "" : "none"}}>
          
        </div>       */}
         <div> {showChat ? <App3/>: null} </div>
        <div>
          {!showChat 
            ? <button className="btn" id="chat1" onClick={() => startChat()}><i class="fas fa-comment"></i></button> 
            : <button className="btn" id="chat2" onClick={() => hideChat()}>click to hide... </button>}
        </div>
         
      </div>  
    
    )
}

export default Bot1;