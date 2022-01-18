import React from "react";
import '../css/navigation.css'
import { useState } from "react";

const Navigation = () =>{

    const [showLinks, setshowLinks] = useState(false);

    return(
        <div className="navigation-wrapper">
            <div className="navigation-link" id={showLinks ? "hidden":""} >
                        <ul onClick={()=> setshowLinks(!showLinks)}>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/#about'>About</a></li>
                            <li><a href='/#services'>Services</a></li>
                            <li><a href='/#skills'>Skills</a></li>
                            <li><a href='/#resume'>Resume</a></li>
                            <li ><a href='/#contact'>Contact</a></li>
                           
                        </ul>
                    </div>
          
            <div className="nav-button" onClick={()=> setshowLinks(!showLinks)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navigation;
