import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import { Fruit } from "./fruits";

export function HeaderComp()
{
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Get fruits</Link></li>

            </ul>

            <Routes>
                <Route path="/" element={<Fruit/>}/>

                
            </Routes>
        </nav>

    </div>

}

