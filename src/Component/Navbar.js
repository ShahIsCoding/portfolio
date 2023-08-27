import React from "react";

function Navbar({isLogoVisible,isMenuVisible}){
    return(
        <div className="nav pt-2 d-flex justify-content-between align-item-center">
            {isLogoVisible && <div className="text-white mx-5 mylogo">AS</div>}
            {isMenuVisible && <ul className="mynavbar text-left">
                <li className="nav-item h4">Home</li>
                <li className="nav-item h4">About</li>
                <li className="nav-item h4">Projects</li>
                <li className="nav-item h4">Skills</li>
            </ul>}
        </div>
    );
}
export default Navbar;