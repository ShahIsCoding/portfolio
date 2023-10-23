import React from "react";
import logo from '../assets/image/logo.jpg'
function Navbar({isLogoVisible,isMenuVisible,className}){
    return(
        <div className={`nav pt-2 d-flex justify-content-between align-item-center ${className}`} >
            {isLogoVisible && 
                <div className="text-white mx-5">
                    <img src={logo} alt="logo" width="3rem" height="3rem" />
                </div>}
            {isMenuVisible && <ul className="mynavbar text-center">
                <li className="nav-item h4">Home</li>
                <li className="nav-item h4">About</li>
                <li className="nav-item h4">Projects</li>
                <li className="nav-item h4">Skills</li>
            </ul>}
        </div>
    );
}
export default Navbar;